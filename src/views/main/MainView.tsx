import { Autocomplete } from '@react-google-maps/api'
import React, { useState } from 'react'
import HistoryView from '../history/HistoryView'
import InputCustom from '../shared/input/Input'
import ToggleSwitch from '../shared/toggle-switch/ToggleSwitch'
import MapView from './MapView'
import { useDispatch } from 'react-redux'
import * as actions from 'src/modules/redux/main/mainAction';

const center = {
    lat: 3.140853,
    lng: 101.693207
}



export default function MainView() {

    const dispatch = useDispatch()

    const [thisautoComplete, setThisAutoComplete] = useState<any>(null)
    const [thisCenter, setThisCenter] = useState<any>(center)
    const [thisZoom, setThisZoom] = useState<any>(5)

    
    const onLoad = (autocomplete) => {                
        // setThisAutoComplete(autocomplete)
        dispatch(actions.setAutoCompleteInstanceAction(autocomplete))
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



    return (
        <MapView
            id="searchbox-example"
            zoom={thisZoom ? thisZoom : 3}
            center={thisCenter ? thisCenter : center}

        >
            <ToggleSwitch />
            <Autocomplete
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
                
            >
                <div style={{ flex: 1, marginTop: 150, marginLeft: 60 }}>

                    <InputCustom />
                    <HistoryView />
                </div>
            </Autocomplete>
        </MapView>
    )
}
