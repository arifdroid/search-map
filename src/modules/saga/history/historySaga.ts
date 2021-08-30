import { takeLatest, put , fork,all, select} from "@redux-saga/core/effects";
import { addToHistoryFailedAction, addToHistorySuccessAction, ADD_TO_HISTORY_REQUEST } from "src/modules/redux/history/historyAction";
//define Saga : worker 

function* addHistoryRequest(action){
    try {
                
        yield put(addToHistorySuccessAction(action?.payload))

        
    } catch (error) {
        
        yield put(addToHistoryFailedAction(error))
    }
}


//define Saga : watcher

function* watchAddHistoryRequest (){
    yield takeLatest(ADD_TO_HISTORY_REQUEST, addHistoryRequest )
}

export default function* historySagaRoot(){
    yield all([
        fork(watchAddHistoryRequest),            
            ])
}