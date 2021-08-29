import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import base from 'src/modules/redux/base/baseReducer';
export default (history?) =>
    combineReducers({
        router: connectRouter(history),
        base,
        
    });
