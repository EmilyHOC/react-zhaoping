import React, {Component} from 'react';
import {connect} from 'react-redux'
import {InputItem, NavBar, TextareaItem} from "antd-mobile";
import HeaderSelector from "../../components/header-selector/header-selector"

class DashenInfo extends Component {
    render() {
        return (
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelector/>
                <InputItem placeholder='请输入求职岗位' onChange={this.handleChange}>求职岗位</InputItem>
                <TextareaItem title="个人介绍" rows={5}></TextareaItem>
                <NavBar>保存</NavBar>
            </div>
        );
    }
}

export default connect(state =>({}),{})(DashenInfo);