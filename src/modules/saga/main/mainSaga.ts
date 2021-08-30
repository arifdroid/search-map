import { takeLatest, put , fork,all} from "@redux-saga/core/effects";
import { CENTER_SET_REQUEST, setCenterFailedAction, setCenterRequestAction, setCenterSuccessAction } from "src/modules/redux/main/mainAction";

//define Saga : worker 

function* centerMainRequest(action){
    try {

        yield put(setCenterSuccessAction(action?.payload))
        
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