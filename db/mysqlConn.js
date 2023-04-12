const mysql = require("mysql")

// melakukan koneksi ke database
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    port : 3306,
    password : 'root',
    database : 'pengaduan'
})

// open the my sql connection
conn.connect(err => {
    if(err) throw err;
    console.log('koneksi database berhasil')
})

//import ke index
module.exports = conn