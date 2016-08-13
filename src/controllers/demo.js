import { Router } from 'express'

const router = Router()
export const prefix = '/demo'

// router.use((req,res,next) => {
//   const viewPort = 'demo/'
//   res.view = (name,data) => {
//     res.render(viewPort + name,data)
//   }
//   next()
// })

/*
GET /
 */
router.get('/',(req,res) => {
  res.render('demo/index',{layout:'demo/layout'})
})

export default router
