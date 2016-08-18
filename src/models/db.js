'use strict'

1const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shop'
})

export const query = (...argv) => new Promise((resolve,reject) => {
  const args = [...argv,(error,rows) => {
    if(error) return reject(error)
    resolve(rows)
  }]
  console.log(arguments.length)
  pool.query(...args)
})
