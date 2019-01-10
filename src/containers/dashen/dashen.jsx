/**/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserList from "../laoban/laoban";
import {getUserList} from "../../redux/actions";

class Dashen extends Component {
    componentDidMount() {
        this.props.getUserList('dashen')
    }

    render() {
        return (
            <div>
                <UserList userList={this.props.userList}/>
            </div>
        );
    }
}

export default connect(state=>({userList:state.userList}),{getUserList})(Dashen);