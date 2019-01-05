import React, {Component} from 'react';
import Logo from "../../components/logo/logo";
import {Button, InputItem, List, NavBar, WhiteSpace, WingBlank} from "antd-mobile";

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
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <NavBar>招&nbsp;聘</NavBar>
                <Logo/>
                <WingBlank size="md">
                    <List>
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

export default Login;