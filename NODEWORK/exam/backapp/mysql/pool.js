const mysql = require("mysql2");
const boardsql = require("./board_sql.js");
const customersql = require("./customer_sql.js");
const booksql = require("./book_sql.js");

const sql = {...boardsql, ...customersql, ...booksql};

const conn = {
    host: "127.0.0.1",
    port: "3306",  
    user: "hr",  
    password: "hr",  
    database: "shop",
    connectionLimit: 10, 
};

let pool = mysql.createPool(conn);

function query(key, data) {
    return new Promise( (resolve, reject) => {
        pool.query(sql[key], data, (err, result, fields) => {
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    });
}

module.exports = {pool, query};