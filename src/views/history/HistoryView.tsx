import React from 'react'
import ButtonIcon from '../shared/button/ButtonIcon'
import Cardview from '../shared/card/Cardview'


const sample_search = [
    'seksyen 7',
    'melaka',
    'ipoh'
]

export default function HistoryView() {
    const renderList = () => {
        let rend = sample_search.map(el => {
            return <Cardview text={el}></Cardview>
        })

        return rend;
    }
    return (
        <React.Fragment>
            <ButtonIcon type={'DELETE'} />
            <div style={{ position: 'absolute' }}>{renderList()}</div>

        </React.Fragment>
    )
}
