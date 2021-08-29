import { takeLatest, put , fork,all} from "@redux-saga/core/effects";
import { baseFailedAction, baseSuccessAction, BASE_REQUEST } from "src/modules/redux/base/baseAction";

//define Saga : worker 

function* baseRequest(){
    try {

        yield put(baseSuccessAction('success'))
        
    } catch (error) {
        
        yield put(baseFailedAction(error))
    }
}


//define Saga : watcher

function* watchRequest (){
    yield takeLatest(BASE_REQUEST, baseRequest )
}

export default function* baseSagaRoot(){
    yield all([
        fork(watchRequest),            
            ])
}