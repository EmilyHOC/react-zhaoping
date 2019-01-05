import React, {Component} from 'react';
import Logopic from './1.jpg'
import './logo.less'

class Logo extends Component {
    render() {
        return (
            <div className="logo-container">
                <img src={Logopic} alt="logo" className='logo-img'></img>
            </div>
        );
    }
}

export default Logo;