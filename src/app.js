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


import hbs from 'hbs'
//将app的locals中所有的属性都作为模板的变量
//此处的变量设置是全局的
hbs.localsAsTemplateData(app)
//公共模板变量
// app.locals.demovar = new Date()
app.locals.site_name = 'zxm shop'
app.locals.layout = 'shared/layout'

// 注册Helper可以用于在模板中作为标识(自定义业务功能)
const blocks = {}
hbs.registerHelper('block',(key,context) => {
  const block = blocks[key] = blocks[key] || []
  if(context.fn) {
    // 开闭标签
    block.push(context.fn(this))
  }else {
    // 单标签
    delete blocks[key]

    return new hbs.handlebars.SafeString(block.join('\n'))
  }
})
//==============解析请求体=================

//==============载入路由表=================
import router from './router'
app.use(router)

const port = ((process.env.PORT || 3000) + '').trim()
app.listen(port,error => {
  if(error) throw error
  console.log(`app is ready @ http://localhost:${port}/`)
})
