import { Router } from 'express'

const router = Router()
export const prefix = '/account'
/*
GET /account/login
 */
router.get('/login',(req,res) => {
  res.render('account/login')
})

/*
POST /account/register
 */
router.post('/register',(req,res) => {
  /*
  1.接收客户端传来的表单数据
  req.body
  2.参数合法化校验
  3.执行业务逻辑
       */

  if(!req.body.agree) {
    return res.send('你必须同意')
  }

  if(req.body.confirm !== req.body.password) {
    return res.send('密码必须一致')
  }

  if(!/^\w[\w\d_]{5,}$/.test(req.body.username)) {
    return res.send('用户名不符合规范')
  }

  res.send('hello')
})


/*
POST /account/login
 */
router.post('/login',(req,res) => {
  res.send('hello')
})

export default router
