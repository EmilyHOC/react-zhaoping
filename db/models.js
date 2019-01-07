/*1.连接数据库*/
/*1.1引入moogoose*/
const mongoose=require('mongoose');
const md5=require('blueimp-md5');
/*1.2连接指定数据库*/
mongoose.connect('mongodb://localhost:27017/zhaopin_test')
/*1.3获取连接对象*/
const conn=mongoose.connection;
/*1.4绑定连接完成的监听*/
conn.on('connected',function () {
    console.log('数据库连接成功')
});
/*2.得到对应特定集合的Model*/
/*2.1定义Schema*/
const userSchema= mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required: true},
    type:{type:String,required:true},
    header:{type:String},
    post:{type:String},
    info:{type:String},
    company:{type:String},
    salary:{type:String},
});
/*2.2定义Model*/
const UserModel=mongoose.model('user',userSchema)//集合名：users

//2.3向外暴露Model
exports.UserModel=UserModel;