// const mysql = require('mysql')

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'demo'
// })


import test from 'ava'
test(t => {
  t.deepEqual([1,2],[1,2])
})
