const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'demo'
})

export const query = (sql) => new Promise((resolve,reject) => {
  pool.query(sql,(error,rows) => {
    if(error) return reject(error)
    resolve(rows)
  })
})
