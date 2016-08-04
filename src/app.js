/*
项目的功能性入口
ECMAScript2015
 */

import { join } from 'path'
import express from 'express'
const app = express()

//==============静态文件配置=================
app.use(express.static(join(__dirname,'../static/')))

//==============视图引擎配置=================
app.set('views',join(__dirname,'views'))
app.set('view engine','hbs')
// app.locals.layout = 'shared/layout'

//==============载入路由表=================
import router from './router'
app.use(router)

const port = ((process.env.PORT || 3000) + '').trim()
app.listen(port,error => {
  if(error) throw error
  console.log(`app is ready @ http://localhost:${port}/`)
})
