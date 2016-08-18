import ava from 'ava'
import user from '../../src/models/user'

ava(t => {
  user.existUsername('zce')
    .then(exist => console.log(exist))
    .catch(error => console.log(error))
})
