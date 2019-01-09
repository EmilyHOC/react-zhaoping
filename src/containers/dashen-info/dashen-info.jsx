import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button, InputItem, NavBar, TextareaItem} from "antd-mobile";
import HeaderSelector from "../../components/header-selector/header-selector"
import {Redirect} from "react-router-dom";
import {updateUser} from "../../redux/actions";

class DashenInfo extends Component {
    state={
        header:'',
        info:'',
        post:''
    }
    setHeader=(header)=>{
        this.setState({header})
    };
    handleChange=(name,value)=>{
       this.setState({[name]:value})
    };
    render() {
        const {user}=this.props;
        if(user.header){
            return <Redirect to='/dashen'/>
        }
        return (
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <InputItem placeholder='请输入求职岗位' onChange={val=>this.handleChange('post',val)}>求职岗位</InputItem>
                <TextareaItem title="个人介绍" rows={5} onChange={val=>this.handleChange('info',val)}></TextareaItem>
                <Button type="primary" onClick={()=>this.props.updateUser(this.state)}>保存</Button>
            </div>
        );
    }
}

export default connect(state =>({user:state.user}),{updateUser})(DashenInfo);