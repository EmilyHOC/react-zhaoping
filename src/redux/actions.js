import {reqRegister,reqLogin} from "../api";
import {AUTH_SUCCESS,ERROR_MSG} from './action-types';

//授权成功的同步action
const authSuccess=(user)=>({type:AUTH_SUCCESS,data:user});

//错误提示信息的同步action
const errorMsg=(msg)=>({type:ERROR_MSG,data:msg});

//注册异步action
export const register=(user)=>{
    /*表单的前台验证*/
    const {username,password,password2,type}=user;
    if(password!==password2){
        return errorMsg('密码和确认密码不一样');
    }
    if(!username||!password||!type){
        return errorMsg('用户名和密码必须输入')
    }
    return async dispatch =>{
        //发送注册的请求，异步ajax请求
        const response=await reqRegister({username,password,type});
        const result=response.data
        if(result.code===0){
            //成功,分发成功的action
            dispatch(authSuccess(result.data))
        }else{
            //失败
            dispatch(errorMsg(result.msg))
        }
    }
}
//登陆异步action
export const login=({username,password})=>{
    if(!username||!password){
        return errorMsg('用户名和密码必须输入')
    }
    return async dispatch =>{
        //发送注册的请求，异步ajax请求
        const response=await reqLogin({username,password});
        const result=response.data
        if(result.code===0){
            //成功
            dispatch(authSuccess(result.data))
        }else{
            //失败
            dispatch(errorMsg(result.msg))
        }
    }
}