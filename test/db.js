import test from 'ava'
import { query } from '../src/models/db'

test(t => {
  query('select * from users')
    .then(rows => console.log(rows))
    .catch(error => console.log(error))
})


// test(async t => {
//   try {
//     const rows = await query('select * from users')
//     console.log(rows)
//   }catch(e) {
//     console.log(e)
//   }
// })
