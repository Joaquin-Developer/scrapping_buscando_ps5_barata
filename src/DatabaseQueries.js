
const databaseQueries = {};
const connection = require("./ControllerDB");

databaseQueries.createTable = function() {
    try {
        const sqlQuery = `create table articles(
            
        )`;
        connection.query(sqlQuery, (error, result, fields) => {
            if (error) throw error;
            console.log("Tabla creada correctamente");
        });
    } catch(error) {
        console.log(error);
    }
}

databaseQueries.insertAllArticles = function(data) {
    try {
        for (article of data)
        {
            const sqlQuery = `insert into articles (id, title, soldBy, price, link) 
                values (null, '${article.title}', '${article.soldBy}', ${article.price}, '${article.link}')`;
    
            connection.query(sqlQuery, (error, result, fields) => {
                if (error) throw error;
                console.log(`Se ingresó correctamente el artículo de nombre: ${article.title}`);
            });
        }
    } catch (error) {
        console.log(error);
    }

}

module.exports = databaseQueries;

