import React, {Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from "../dashen-info/dashen-info";
import {connect} from 'react-redux';
import Cookies from 'js-cookie';
import {getRedirectPath} from '../../utils/index'
import {getUser} from "../../redux/actions";
class Main extends Component {
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
        return (
            <div>
                <Switch>
                    <Route path='/laobaninfo' component={LaobanInfo}></Route>
                    <Route path='/dasheninfo' component={DashenInfo}></Route>
                </Switch>
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
