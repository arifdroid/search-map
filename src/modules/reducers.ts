import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import base from 'src/modules/redux/base/baseReducer';
import main from 'src/modules/redux/main/mainReducer';
import historyReducer from 'src/modules/redux/history/historyReducer';
export default (history?) =>
    combineReducers({
        router: connectRouter(history),
        base,
        main,
        historyReducer
        
    });
