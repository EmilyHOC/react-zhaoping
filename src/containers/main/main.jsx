import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom'
import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from "../dashen-info/dashen-info";
class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/laobaninfo' component={LaobanInfo}></Route>
                    <Route path='/dasheninfo' component={DashenInfo}></Route>
                </Switch>
            </div>
        );
    }
}

export default Main;