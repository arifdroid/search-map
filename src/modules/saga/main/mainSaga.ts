import { takeLatest, put , fork,all, select} from "@redux-saga/core/effects";
import { addToHistoryRequestAction, addToHistorySuccessAction } from "src/modules/redux/history/historyAction";
import { CENTER_SET_REQUEST, setCenterFailedAction, setCenterRequestAction, setCenterSuccessAction } from "src/modules/redux/main/mainAction";
import mainSelectors from 'src/modules/redux/main/mainSelector'
//define Saga : worker 

function* centerMainRequest(action){
    try {
        
        const selectSearchAddress = yield select(mainSelectors.selectSearchAddress)
        
        yield put(setCenterSuccessAction(action?.payload))
        yield put(addToHistoryRequestAction(selectSearchAddress))
        
    } catch (error) {
        
        yield put(setCenterFailedAction(error))
    }
}


//define Saga : watcher

function* watchsetCenterRequest (){
    yield takeLatest(CENTER_SET_REQUEST, centerMainRequest )
}

export default function* mainSagaRoot(){
    yield all([
        fork(watchsetCenterRequest),            
            ])
}