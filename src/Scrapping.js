
const puppeteer = require("puppeteer");
const scrapping = {};

scrapping.start = async function() {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0);
        await page.goto("https://www.mercadolibre.com.uy/");
        await page.click(".nav-search-input");
        await page.keyboard.type("playstation 5");
        await page.keyboard.press("Enter");
        await page.waitForTimeout(6000);
        
        const data = await page.evaluate(() => {
            const olElement = document.querySelector(".ui-search-layout");
            let infoScrapping = [];

            function convertDollarToPesosUy(price) {
                return price * 42.59;   // asumo que el dolar siempre está a ese precio xd :D
            }

            for (const child of olElement.childNodes)
            {
                // const divContainer = document.querySelector(".ui-search-result__wrapper");
                const divContainer = child.childNodes[0];
                const contentWrapper = divContainer.childNodes[0].childNodes[1];
                const titleElement = contentWrapper.childNodes[0].childNodes[0];   // element: <a href=""></a>
                const link = titleElement.href;
                const title = titleElement.childNodes[0].textContent;
                const soldByElement = contentWrapper.childNodes[0].childNodes[1].childNodes[0].textContent;
                if (soldByElement === null || soldByElement === undefined) {
                    soldByElement = "Sin información del vendedor";
                }
                const priceElement = contentWrapper.childNodes[1].childNodes[0]
                    .childNodes[0].childNodes[0].childNodes[0].childNodes[0];

                const coin = priceElement.childNodes[0].textContent;    // U$S or $
                let price = parseFloat((priceElement.childNodes[1].textContent).replace(".", ""));
                
                if (coin === "U$S") {
                    price = convertDollarToPesosUy(price);
                }
                infoScrapping.push({
                    title: title,
                    soldBy: soldByElement,
                    price: price,
                    link: link
                });

            }
            return infoScrapping;
        });

        await browser.close();        
        return data;

    } catch (exception) {
        console.log(exception);
    }
}

module.exports = scrapping;

