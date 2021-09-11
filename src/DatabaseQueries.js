
const databaseQueries = {};
const connection = require("./ControllerDB");

databaseQueries.createTable = () => {
    try {
        const sqlQuery = `create table articles (
            id int primary key not null auto_increment,
            title varchar(255) not null default "Sin nombre",
            soldBy varchar(255) not null default "sin datos",
            price int not null, 
            link varchar(255) not null default "Sin datos"
        )`;
        connection.query(sqlQuery, (error, result, fields) => {
            if (error) throw error;
            console.log("Tabla creada correctamente");
        });
    } catch(error) {
        console.log(error);
    }
}

databaseQueries.insertAllArticles = data => {
    try {
        for (const article of data)
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

