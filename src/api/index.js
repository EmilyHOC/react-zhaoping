import ajax from './ajax'
/*
* 包含n个接口请求的函数，返回值为Promise
* */
export const reqRegister=(user) =>ajax('/register',user,'POST');

export const reqLogin =(user)=>ajax('/login',user,'POST');

export const reqUpdateUser=(user)=>ajax('/update',user,'POST');

export const reqUser =()=>ajax('/user');

//获取用户列表
export const  reqUserList=(type)=>ajax('/userlist',{type});