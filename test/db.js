import test from 'ava'
import { query } from '../src/models/db'

test(async t => {
  try {
    const rows = await query('select * from users')
    console.log(rows)
  }catch(e) {
    console.log(e)
  }

})
