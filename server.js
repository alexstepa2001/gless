const express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const mysql = require('mysql');
const PORT = 80;
var products = new Array();
var fullDb = new Array();

let sql = 'SELECT * FROM `items`';
let resultsPerPage = 15;
var dbLength = 0;
var fullDbLength = 0;
//БД

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "gless_db",
    password: ""
});
connection.connect(function (er) {
    if (er) {
        return console.error("Ошибка: " + er.message);
    } 
    else {
        console.log("База даннных успешно подключена");
    }  
}); 

function sqlConnect(){ 
    connection.query(sql, (req, res) => { 
        console.log(res.length);
        dbLength = res.length; 
        for(let i = 0; i < res.length; i++){
            products[i] = new Object();
            products[i].id = res[i]['id'];
            products[i].name = res[i]['product_name'];
            products[i].description = res[i]['description'];
            products[i].specifications = res[i]['specifications'];
            products[i].full_specifications = res[i]['full_specifications'];
            products[i].category = res[i]['category'];
            products[i].img = res[i]['img'];
            products[i].real_price = res[i]['real_price'];
            products[i].full_price = res[i]['full_price'];
            products[i].filter = res[i]['filter'];
        }
    }); 
}

//GET-запросы 

app.get('/', function(req, res) {        //Главная
    res.render('pages/index', {
        dbLength: dbLength,
        products: products, 
        fullDb: fullDb,
        fullDbLength: fullDbLength
    });
}); 
app.get('/payment_methods', function(req, res) {          //Главная
    res.render('pages/payment_methods', {
        dbLength: dbLength,
        products: products,
        fullDb: fullDb,
        fullDbLength: fullDbLength
    });
});
app.get('/office_payment', function(req, res) {          //Главная
    res.render('pages/office_pay', {
        dbLength: dbLength,
        products: products,
        fullDb: fullDb,
        fullDbLength: fullDbLength
    });
});
app.get('/gallery', function(req, res) {          //Главная
    res.render('pages/gallery', { 
        dbLength: dbLength, 
        products: products,
        fullDb: fullDb,
        fullDbLength: fullDbLength
    });
});
app.get('/index', function(req, res) {      //Главная
    res.redirect('/');
});
app.get('/catalog', function(req, res) {        //Каталог
    res.render('pages/catalog', {
        dbLength: dbLength,
        products: products,
        fullDb: fullDb,
        fullDbLength: fullDbLength
    });
});
app.get('/about', function(req, res) {      //О нас
    res.render('pages/about', {
        dbLength: dbLength,
        products: products,
        fullDb: fullDb,
        fullDbLength: fullDbLength
    });
});
app.get('/payment', function(req, res) {        //Оплата
    res.render('pages/payment', {
        dbLength: dbLength,
        products: products,
        fullDb: fullDb,
        fullDbLength: fullDbLength
    });
});
app.get('/questions', function(req, res) {      //Вопросы
    res.render('pages/questions', {
        dbLength: dbLength,
        products: products,
        fullDb: fullDb,
        fullDbLength: fullDbLength
    });
});
app.get('/contacts', function(req, res) {            //Контакты
    res.render('pages/contacts', {
        dbLength: dbLength,
        products: products,
        fullDb: fullDb,
        fullDbLength: fullDbLength
    });
});
app.get('/items', function(req, res) {  //Товары
    let category = req.query.category;
    sql = `SELECT * FROM items WHERE category = "${category}" AND real_price != "0"`;
    connection.query(sql, (err, resu) => { 
        const numOfResults = resu.length; 
        const numberOfPages = Math.ceil(numOfResults / resultsPerPage);  
        let page = req.query.page ? Number(req.query.page) : 1;
        if(page > numberOfPages){
            res.redirect('/?page='+encodeURIComponent(numberOfPages));
        }
        else if (page < 1){
            res.redirect('/?page='+encodeURIComponent('1'));
        }
        const startingLimit = (page - 1) * resultsPerPage;
        sql = `SELECT * FROM items WHERE category = "${category}" AND real_price != "0" LIMIT ${startingLimit}, ${resultsPerPage}`;
        connection.query(sql, (req, result) => {
            let iterator  = (page - 5) <  1 ? 1 : page - 5;
            let endingLink = (iterator + 9) <= numberOfPages ? (iterator + 9) : page + (numberOfPages - page);
            if(endingLink > (page + 4)){
                iterator -= (page + 4) - numberOfPages;
            }
            dbLength = result.length; 
            for(let i = 0; i < result.length; i++){
                products[i] = new Object();
                products[i].id = result[i]['id'];
                products[i].name = result[i]['product_name'];
                products[i].description = result[i]['description'];
                products[i].specifications = result[i]['specifications'];
                products[i].full_specifications = result[i]['full_specifications'];
                products[i].category = result[i]['category'];
                products[i].img = result[i]['img'];
                products[i].real_price = result[i]['real_price'];
                products[i].full_price = result[i]['full_price'];
                products[i].filter = result[i]['filter'];
            }
            sql = `SELECT * FROM items`;
            connection.query(sql, (req, resul) => {
                fullDbLength = resul.length; 
                for(let i = 0; i < resul.length; i++){
                    fullDb[i] = new Object();
                    fullDb[i].id = resul[i]['id'];
                    fullDb[i].name = resul[i]['product_name'];
                    fullDb[i].description = resul[i]['description'];
                    fullDb[i].specifications = resul[i]['specifications'];
                    fullDb[i].full_specifications = resul[i]['full_specifications'];
                    fullDb[i].category = resul[i]['category'];
                    fullDb[i].img = resul[i]['img'];
                    fullDb[i].real_price = resul[i]['real_price'];
                    fullDb[i].full_price = resul[i]['full_price'];
                    fullDb[i].filter = resul[i]['filter'];
                }
                res.render('pages/items', {
                    dbLength: dbLength,
                    products: products,
                    page: page,
                    iterator: iterator,
                    endingLink: endingLink,
                    numberOfPages: numberOfPages,
                    category: category, 
                    fullDb: fullDb,
                    fullDbLength: fullDbLength
                });
            })
        });
    })
});
app.get('/item', function(req, res) {       //Товар
    res.render('pages/item', {
        dbLength: dbLength,
        products: products,
        id: req.query.id, 
        fullDb: fullDb,
        fullDbLength: fullDbLength
    });
});
app.get('/404', function(req, res) {        //Ошибка
    res.render('pages/404', {
        dbLength: dbLength,
        products: products, 
        fullDb: fullDb,
        fullDbLength: fullDbLength
    });  
}); 

app.get('/search_result', function(req, res) {  
    let searchContent = req.query.search;       //Ошибка
    sql = `SELECT * FROM items WHERE product_name LIKE "%${searchContent}%"  OR filter LIKE "%${searchContent}%" OR art LIKE "%${searchContent}%" AND real_price != "0"`;
    connection.query(sql, (err, resu) => {
        const numOfResults = resu.length; 
        const numberOfPages = Math.ceil(numOfResults / resultsPerPage); 
        let page = req.query.page ? Number(req.query.page) : 1;
        if(page > numberOfPages){
            res.redirect('/?page='+encodeURIComponent(numberOfPages));
        }
        else if (page < 1){
            res.redirect('/?page='+encodeURIComponent('1'));
        }
        const startingLimit = (page - 1) * resultsPerPage;
        sql = `SELECT * FROM items WHERE (product_name LIKE "%${searchContent}%" OR full_specifications LIKE "%${searchContent}%" OR art LIKE "%${searchContent}%") AND real_price != "0" LIMIT ${startingLimit}, ${resultsPerPage}`;
        connection.query(sql, (req, result) => {
            let iterator  = (page - 5) <  1 ? 1 : page - 5;
            let endingLink = (iterator + 9) <= numberOfPages ? (iterator + 9) : page + (numberOfPages - page);
            if(endingLink > (page + 4)){
                iterator -= (page + 4) - numberOfPages;
            }
            dbLength = result.length; 
            for(let i = 0; i < result.length; i++){
                products[i] = new Object();
                products[i].id = result[i]['id'];
                products[i].name = result[i]['product_name'];
                products[i].description = result[i]['description'];
                products[i].specifications = result[i]['specifications'];
                products[i].full_specifications = result[i]['full_specifications'];
                products[i].category = result[i]['category'];
                products[i].img = result[i]['img'];
                products[i].real_price = result[i]['real_price'];
                products[i].full_price = result[i]['full_price'];
                products[i].filter = result[i]['filter'];
            }
            sql = `SELECT * FROM items`;
            connection.query(sql, (req, resul) => {
                fullDbLength = resul.length; 
                for(let i = 0; i < resul.length; i++){
                    fullDb[i] = new Object();
                    fullDb[i].id = resul[i]['id'];
                    fullDb[i].name = resul[i]['product_name'];
                    fullDb[i].description = resul[i]['description'];
                    fullDb[i].specifications = resul[i]['specifications'];
                    fullDb[i].full_specifications = resul[i]['full_specifications'];
                    fullDb[i].category = resul[i]['category'];
                    fullDb[i].img = resul[i]['img'];
                    fullDb[i].real_price = resul[i]['real_price'];
                    fullDb[i].full_price = resul[i]['full_price'];
                    fullDb[i].filter = resul[i]['filter'];
                }
                res.render('pages/search_result', {
                    dbLength: dbLength,
                    products: products,
                    page: page,
                    iterator: iterator,
                    endingLink: endingLink,
                    numberOfPages: numberOfPages,
                    fullDb: fullDb,
                    fullDbLength: fullDbLength
                });
            })
        });
    })
});
//POST

app.post('/', urlencodedParser, function(req, res) {
    connection.query(`INSERT INTO subscription (user_mail) VALUES ("${req.body.user_mail}");`, (err) => {
        res.redirect('/');
    })
});

app.listen(PORT);
console.log(`Port is ${PORT}`);  
