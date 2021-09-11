/**
 * Scrapping para usar con selenium y Firefox
 */

const { Builder, By, Key, until } = require('selenium-webdriver');

(async () => {
    const driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.google.com');
        // Enter text "cheese" and perform keyboard action "Enter"
        await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);
        const firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 10000);
        console.log(await firstResult.getAttribute('textContent'));

    } finally {
        driver.quit();
    }
})();
