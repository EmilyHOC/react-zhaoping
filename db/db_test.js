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
/*得到对应特定集合的Model*/
/*2.1定义Schema*/
const userSchema= mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required: true},
    type:{type:String,required:true}
});
/*定义Model*/
const UserModel=mongoose.model('user',userSchema)//集合名：users

/*通过Model实例的save方法添加数据*/
// function testSave(){
//     const user={
//         username: 'yangxinjing',
//         password: md5('234'),
//         type:'laoban'
//     }
//     const userModel=new UserModel(user);
//     userModel.save(function (err,user) {
//         console.log('save',err,user)
//     })
// }
// testSave();

/*3.2查询数据*/
// function  testfind() {
//     UserModel.find(function (err,users) {
//         console.log('find()',err,users)
//     })
// }
// testfind();
/*更新某个数据*/
// function testUpdate(){
//     UserModel.findByIdAndUpdate({_id:'5c3305733c5ea61cec55c118'},{username: '小明'},function (err,user) {
//         console.log('findByIdAnd',err,user)
//     })
// }
// testUpdate();

/*删除*/
function testDelete(){
    UserModel.remove({_id:'5c3307743f183e0c04a8941f'},function (err,result) {
        console.log('remove',err,result)
    })
}
testDelete(); 