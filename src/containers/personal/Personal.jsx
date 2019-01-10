import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button, List, Modal, Result, WhiteSpace} from "antd-mobile";
import Cookies from 'js-cookie';
import {resetUser} from '../../redux/actions'
const Item=List.Item;
const Brief=Item.Brief;

class Personal extends Component {
    handleLogout=()=>{
        Modal.alert('退出','确认退出吗？',[{
            text:'取消',
            onPress:()=>console.log('cancel')
        },{
            text:'确认',
            onPress:()=>{
                //清除Cookie中的userid
                Cookies.remove('userid');
                //重置redux中的user状态
                this.props.resetUser();

            }
        }])
    }
    render() {
        const {username,header,post,info,salary,company}=this.props.user;
        return (
            <div style={{marginTop:50}}>
                <Result img={<img src={require(`../../assets/images/${header}.png`)} alt="personal"></img>}
                title={username} message={company}/>
                <List renderHeader={()=>'相关信息'}>
                    <Item multipleLine>
                        <Brief>职位:{post}</Brief>
                        <Brief>简介：{info}</Brief>
                        <Brief>薪资：{salary}</Brief>
                    </Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Button onClick={this.handleLogout} type='warning'>退出登陆</Button>
                </List>
            </div>
        );
    }
}

export default connect(state=>({user:state.user}),{resetUser})(Personal);