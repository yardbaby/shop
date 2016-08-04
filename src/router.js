import { Router } from 'express'
const router = Router()

//匹配所有的控制器文件 控制器时不确定的
import glob from 'glob'

glob.sync('./controllers/*.js',{ cwd: __dirname}).forEach(c => {
  const controller = require(c)
  router.use(controller.prefix,controller.default)
})

export default router