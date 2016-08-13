/*
一般情况下，数据库有多少张表就会有多少模型
每一个模型专门负责操作一张表
 */

function User(id,username,password,nickname,email,status,created) {
  this.id = id
  this.username = username
  this.password = password
  this.nickname = nickname
  this.email = email
  this.status = status
  this.created = created
}

import { query } from './db'

// User.prototype.getList = function (arguments) {
//   // body...
// }

User.getList = function() {
  query('select * from users').then((rows) => {
    console.log(rows)
  })
}


User.prototype.save = function () {

}


export default User
