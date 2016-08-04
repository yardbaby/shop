import { Router } from 'express'

const router = Router()
export const prefix = '/'

router.use((req,res,next) => {
  const viewPort = 'home/'
  res.view = (name,data) => {
    res.render(viewPort + name,data)
  }
  next()
})

/*
GET /
 */
router.get('/',(req,res) => {
  res.view('index',{name: '张三'})
})

/*
GET /about
 */
router.get('/about',(req,res) => {
  res.view('about')
})
/*
GET /contact
 */
router.get('/contact',(req,res) => {
  res.view('contact')
})

export default router
