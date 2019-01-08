import React, {Component} from 'react';
import {Button, InputItem, List, NavBar, Radio, WhiteSpace, WingBlank} from "antd-mobile";
import Logo from "../../components/logo/logo";
import ListItem from "antd-mobile/es/list/ListItem";
import {connect} from 'react-redux';
import {register} from "../../redux/actions";
import {Redirect} from "react-router-dom";

class Register extends Component {
    state={
        username:'',
        password:'',
        password2:'',
        type:'dashen'
    };
    register = ()=>{
        this.props.register(this.state)
    };
    handleChange =(name,value)=>{
        this.setState({
            [name]:value
        })
    };
    toLogin =()=>{
        this.props.history.replace('/login')
    };
    render() {
        const {type}=this.state;
        const {msg,redirectTo}=this.props.user;
        //有值需要重定向到指定的路由
        if(redirectTo){
            return <Redirect to={redirectTo}></Redirect>
        }
        return (
            <div>
                <NavBar>招&nbsp;聘</NavBar>
                <Logo/>
                <WingBlank size="md">
                    <List>
                        {msg?<div className='error-msg'>{msg}</div>:null}
                        <InputItem placeholder='输入用户名' onChange={val=>this.handleChange('username',val)}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder='输入密码' type="password" onChange={val=>this.handleChange('password',val)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder='确认密码' type="password" onChange={val=>this.handleChange('password2',val)}>确认密码:</InputItem>
                        <WhiteSpace/>
                        <ListItem>
                            <span style={{marginRight:30}}>用户类型:</span>
                            <Radio onClick={()=>this.handleChange('type','dashen')} checked={type==='dashen'}>大神&nbsp;&nbsp;&nbsp;&nbsp;</Radio>
                            <Radio onClick={()=>this.handleChange('type','laoban')} checked={type==='laoban'}>老板</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.register}>注册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>已经有账户</Button>
                    </List>
                </WingBlank>
            </div>
        );
    }
}

export default connect(state=>({user:state.user}),{register})(Register);