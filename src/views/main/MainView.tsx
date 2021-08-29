import { Autocomplete } from '@react-google-maps/api'
import React, { useState } from 'react'
import ButtonIcon from '../shared/button/ButtonIcon'
import Cardview from '../shared/card/Cardview'
import InputCustom from '../shared/input/Input'
import Listview from '../shared/list/Listview'
import MapView from './MapView'

const center = {
    lat: 3.140853,
    lng: 101.693207
}


const sample_search = [
    'seksyen 7',
    'melaka',
    'ipoh'
]

export default function MainView() {

    const [thisautoComplete, setThisAutoComplete] = useState<any>(null)
    const [thisCenter, setThisCenter] = useState<any>(center)
    const [thisZoom, setThisZoom] = useState<any>(5)

    const onLoad = (autocomplete) => {
        setThisAutoComplete(autocomplete)

    }

    const onPlaceChanged = () => {

        if (thisautoComplete !== null) {
            setThisCenter({
                lat: thisautoComplete?.getPlace().geometry?.location.lat(),
                lng: thisautoComplete?.getPlace().geometry?.location.lng()
            })
            setThisZoom(17)
        } else {
            
        }
    }

    const renderList = () => {
        let rend = sample_search.map(el => {
            return <Cardview text={el}></Cardview>
        })

        return rend;
    }

    return (
        <MapView
            id="searchbox-example"
            zoom={thisZoom ? thisZoom : 3}
            center={thisCenter ? thisCenter : center}

        >
            <Autocomplete
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
            >
                <div style={{ flex: 1, marginTop:150, marginLeft:60}}>
                    <InputCustom />
                    <ButtonIcon type={'DELETE'}/>
                    <div style={{ position: 'absolute' }}>{renderList()}</div>
                </div>
            </Autocomplete>
        </MapView>
    )
}
