/*
* 包含n个reducer函数，根据老的state和指定的action返回一个新的state
* */
/*产生一个新的状态*/
import {combineReducers} from "redux";
import {AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER} from "./action-types";
import {getRedirectPath} from "../utils";
/*产生user状态的reducer*/
const initUser={
    username:'',/*后台是不会返回密码的*/
    type:'',
    msg:'', //错误提示信息
    redirectTo:''//需要重定向的路由路径
}
//产生user状态的reducer
function user(state = initUser,action){
    switch(action.type){//data是user
        case AUTH_SUCCESS:
            const redirectTo=getRedirectPath(action.data.type,action.data.header)
            return {...action.data,redirectTo: redirectTo}
        case ERROR_MSG://data是msg
            return {...state,msg:action.data}
        case RECEIVE_USER:
            return action.data;
        case RESET_USER:
            return {...initUser,msg:action.data}//必然会导致进入登陆界面
        default:
            return state
    }
}

export default combineReducers({
    user
})

//向外暴露的状态的结构:{user:{}}

