// var mysql = require('mysql')
// var pool  = mysql.createPool({
//   connectionLimit : 10,
//   host            : 'localhost',
//   user            : 'root',
//   password        : '',
//   database        : 'shop'
// })

// pool.query('select * from users', function(err, rows, fields) {
//   if (err) throw err
//   console.log(rows)
// })

// pool.query('select * from users')
//   .then(rows, fields) {
//   if (err) throw err
//   console.log(rows)
// })
//   .catch(error => {

//   })

import test from 'ava';

test(t => {
    t.deepEqual([1, 2], [1, 2]);
});

