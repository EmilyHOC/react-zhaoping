import React, {Component} from 'react';
import Logo from "../../components/logo/logo";
import {Button, InputItem, List, NavBar, WhiteSpace, WingBlank} from "antd-mobile";
import {login} from '../../redux/actions';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

class Login extends Component {
    state={
      username:'', 
      password:''
    };
    toRegister =()=>{
      this.props.history.replace('/register')
    };
    handleChange = (name,value)=>{
        this.setState({
            [name]:value
        })
    };
    login = ()=>{
        this.props.login(this.state)
    }
    render() {
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
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.login}>注册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>还没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        );
    }
}

export default connect(state=>({user:state.user}),{login})(Login);