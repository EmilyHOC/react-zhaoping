import React, {Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'

import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from "../dashen-info/dashen-info";
import Dashen from '../dashen/dashen';
import Laoban from '../laoban/laoban';
import Message from '../message/Message';
import Personal from '../personal/Personal';
import NavFooter from '../../components/nav-footer/nav-footer.jsx';

import {connect} from 'react-redux';
import Cookies from 'js-cookie';
import {NavBar} from "antd-mobile";
import {getRedirectPath} from '../../utils/index'
import {getUser} from "../../redux/actions";
import NotFound from "../../components/not-found/not-found";


class Main extends Component {
    //包含所有组建的信息
    navList=[{
        path:'/laoban',
        component:Laoban,
        title:'大神列表',
        icon:'dashen',
        text:'大神'
    },{
        path:'/dashen',
        component:Dashen,
        title:'老板列表',
        icon:'laoban',
        text:'老板'

    },{
        path:'/message',
        component:Message,
        title:'消息列表',
        icon:'message',
        text:'消息'
    },
        {
            path:'/personal',
            component:Personal,
            title:'用户中心',
            icon:'personal',
            text:'个人'
        }
    ];
    componentDidMount() {
        //登陆过（cookie中有userid）,但没有登陆（redux管理的user中没有_id）发请求获取对应的user
        const userid=Cookies.get('userid');
        const {_id}=this.props.user;
        if(userid&&!_id){
            //发送异步请求获取user信息
           this.props.getUser();
        }

    }

    render() {
        //读取cookie中的userid
        const userid=Cookies.get('userid');
        //如果没有，自动重定向到登陆页面
        if(!userid){
            return <Redirect to='/login'/>
        }
        //如果有，读取redux中的user状态
        const {user}=this.props;
            //如果user没有_id，返回null(不做任何显示)
        if(!user._id){
            return null;
        }else{
            //如果有_id，显示对应的界面
            //如果请求根路径，根据user的type和header计算出新的路由
            let path=this.props.location.pathname;//取出来path
            if(path==='/'){
                path=getRedirectPath(user.type,user.header);
                return <Redirect to={path}/>
            }
        }
        const {navList} =this;
        const path=this.props.location.pathname;//请求的路径
        const currentNav=navList.find(nav=>nav.path===path);//得到当前的nav，可能没有
        if(currentNav){
            if(user.type==='laoban'){
                navList[1].hide=true
            }else{
                //隐藏数组的第一个
               navList[0].hide=true
            }
        }

        return (
            <div>
                {currentNav?<NavBar className='sticky-header'>{currentNav.title}</NavBar>:null}
                <Switch>
                    {
                        navList.map(nav=><Route path={nav.path} component={nav.component} key={nav.path}/>)
                    }
                    <Route path='/laobaninfo' component={LaobanInfo}></Route>
                    <Route path='/dasheninfo' component={DashenInfo}></Route>
                    <Route component={NotFound}/>
                </Switch>
                {
                    currentNav?<NavFooter navList={this.navList}/>:null
                }
            </div>
        );
    }
}

export default connect(state=>({user:state.user}),{getUser})(Main);

/*实现自动登陆
* 1) 登陆过（cookie中有userid）,但没有登陆（redux管理的user中没有_id）发请求获取对应的user
* 2)如果cookie中没有userid，自动进入login界面
* 2.如果已经登陆，根据type和header来计算出一个重定向的路径并且自动重定向
* */
