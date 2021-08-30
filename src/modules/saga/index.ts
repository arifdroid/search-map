import { all, fork } from "@redux-saga/core/effects";
import baseSaga from "src/modules/saga/base/baseSaga";
import mainSaga from "./main/mainSaga";
export default function* rootSaga(){
    yield all([
        fork(baseSaga),
        fork(mainSaga)
    ])
}