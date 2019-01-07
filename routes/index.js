var express = require('express');
var router = express.Router();
//引入md5
const md5=require('blueimp-md5');
const { UserModel }=require('../db/models');
const filter={password:0};
//注册的路由
router.post('/register',function (req,res) {
  //读取请求参数
  const {username,password,type}=req.body;
  //处理数据
  /*根据username查询数据库，看是否存在user*/
  UserModel.findOne({username},function(err,user){
    //如果存在返回一个提示数据：此用户已存在
    if(user){
      res.send({code:1,msg:'此用户已经存在'});
    }else{
        //如果不存在将提交的user保存到数据库
        new UserModel({username,password:md5(password),type}).save(function (err,user) {
        //生成一个cookie(userid:user._id),并提交给浏览器保存
        res.cookie('userid',user._id,{maxAge:1000*60*60*24*7});//持久化cookie,浏览器会保存到本地文件
        //保存成功，返回成功的相应数据user
        res.send({code:0,data:{_id:user._id,username,type}})
      })
    }
  })
});

//登陆的路由
router.post('/login',function (req,res) {
  const {username,password}=req.body;
  //根据username和password去数据库查询得到user
  UserModel.findOne({username,password:md5(password)},filter,function (err,user) {
    if(user){
      res.cookie('userid',user._id,{maxAge:1000*60*60*24*7});//持久化cookie,浏览器会保存到本地文件
      res.send({code:0,data:user})
    }else{
      res.send({code:1,msg:'用户名或密码不正确'})
    }
  })
})


module.exports = router;
