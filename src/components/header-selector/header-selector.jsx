import React, {Component} from 'react';
import {Grid, List} from 'antd-mobile';

class HeaderSelector extends Component {
    constructor(props){
        super(props)
        this.headerList=[];
        for(let i=0;i<20;i++){
            const text=`头像${i+1}`;
            this.headerList.push({text,icon:require(`../../assets/images/${text}.png`)})
        }
    }
    state={
        icon:null
    }
    selectHeader=({icon,text})=>{
        //更新当前组件的状态
        this.setState({icon});
        //更新父组件的状态
        this.props.setHeader(text)
    }
    render() {
        const {icon}=this.state;
        const gridHeader=icon?<p>已选择头像：<img src={icon} alt="header"/></p>:'请选择头像';
        return (
            <List renderHeader={()=>gridHeader}>
                <Grid columnNum={5} data={this.headerList} onClick={this.selectHeader}/>
            </List>
        );
    }
}

export default HeaderSelector;