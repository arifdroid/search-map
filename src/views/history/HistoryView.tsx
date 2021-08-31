import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import ButtonIcon from '../shared/button/ButtonIcon'
import Cardview from '../shared/card/Cardview'
import * as actions from 'src/modules/redux/history/historyAction'

const renderList = (historyList) => {
    let rend = historyList.map(el => {
        return <Cardview text={el}></Cardview>
    })

    return rend;
}

export default function HistoryView() {
    const dispatch = useDispatch()
    const historyList = useSelector((state: RootStateOrAny) => state?.historyReducer?.historyList)
    
    return (
        <React.Fragment>
            <ButtonIcon type={'DELETE'} onclick={()=>{
                dispatch(actions.deleteRecentRequestAction())
            }}/>
            <div style={{ position: 'absolute' }}>{renderList(historyList)}</div>

        </React.Fragment>
    )
}
