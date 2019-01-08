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
    render() {
        const listHeader='请选择头像';
        return (
            <List renderHeader={()=>listHeader}>
                <Grid columnNum={5} data={this.headerList}/>
            </List>
        );
    }
}

export default HeaderSelector;