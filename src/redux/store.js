//向外暴露store对象

import {createStore,applyMiddleware} from "redux";
import reducers from './reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));