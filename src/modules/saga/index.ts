import { all, fork } from "@redux-saga/core/effects";
import baseSaga from "src/modules/saga/base/baseSaga";
import mainSaga from "./main/mainSaga";
import historySaga from "./history/historySaga";
export default function* rootSaga(){
    yield all([
        fork(baseSaga),
        fork(mainSaga),
        fork(historySaga)
    ])
}