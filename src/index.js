
const scrapping = require("./Scrapping");

(async () => {
    const data = await scrapping.start();
    data.forEach(elem => console.log(elem));
    // require("./DatabaseQueries").insertAllArticles(data);
})();
