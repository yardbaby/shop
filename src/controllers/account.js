import { Router } from 'express'
import User from '../models/user'

const router = Router()
export const prefix = '/account'
/*
GET /account/login
 */
router.get('/login',(req,res) => {
  res.render('account/login',{user:{},message: ''})
})

/*
POST /account/register
 */
router.post('/register',(req,res) => {
  console.log(req.body)
  /*
  1.接收客户端传来的表单数据
  req.body
  2.参数合法化校验
       */
  if(!req.body.agree) {
    return res.render( 'account/login',{user: req.body,message: '你必须同意' })
  }

  if(req.body.confirm !== req.body.password) {
    return res.send('密码必须一致')
  }

  if(!/^\w[\w\d_]{5,}$/.test(req.body.username)) {
    return res.send('用户名不符合规范')
  }

/*
3.执行业务逻辑
 */
  User.existUsername(req.body.username)
    .then(exist => {
      if(exist) {
        return res.send('用户名已经存在')
      }
      //将新用户存到数据库
      const user = new User(null,req.body.username,req.body.password,req.body.username,req.body.email,'init',new Date())
      return user.save()
    })
    .then(u => {
      if(u) {
        res.redirect('/')
      }
    })
    .catch(error => {
      throw error
    })
})


/*
POST /account/login
 */
router.post('/login',(req,res) => {
  // 接收参数并校验
  // 通过user模型查询数据
  User.getByUsername(req.body.username)
    .then(user => {
      console.log(user)
      if(!user) {
        // 用户名是存在的
        return res.send('用户名或密码错误')
      }
      if(user.password !== req.body.password) {
        return res.send({status: false, message: '用户名或密码错误'})
      }
      // 用户名和密码都正确了
      res.send('ok')
    })
    .catch(error => res.send(error))

})

export default router
