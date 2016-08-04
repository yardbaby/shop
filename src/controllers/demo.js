import { Router } from 'express'

const router = Router()
export const prefix = '/demo'

router.use((req,res,next) => {
  const viewPort = 'demo/'
  res.view = (name,data) => {
    res.render(viewPort + name,data)
  }
  next()
})

/*
GET /
 */
router.get('/',(req,res) => {
  res.view('index',{layout:'demo/demo.hbs',name: '张三'})
})

export default router
