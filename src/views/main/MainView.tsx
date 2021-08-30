import { Autocomplete } from '@react-google-maps/api'
import React, { useEffect, useState } from 'react'
import HistoryView from '../history/HistoryView'
import InputCustom from '../shared/input/Input'
import ToggleSwitch from '../shared/toggle-switch/ToggleSwitch'
import MapView from './MapView'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import * as actions from 'src/modules/redux/main/mainAction';

// import { connect, ConnectedProps } from 'react-redux'



const MainView = () => {

    const dispatch = useDispatch()
    const stateAutoComplete = useSelector((state: RootStateOrAny) => state?.main?.autoCompleteInstance)
    const center = useSelector((state: RootStateOrAny) => state?.main?.center)
    const zoomhere = useSelector((state:RootStateOrAny)=>state.main.zoom)
    

    const onLoad = (autocomplete) => {
        dispatch(actions.setAutoCompleteInstanceAction(autocomplete))
    }

    const onPlaceChanged = () => {

        if (stateAutoComplete !== null) {

            dispatch(actions.setCenterRequestAction({
                lat: stateAutoComplete?.getPlace().geometry?.location.lat(),
                lng: stateAutoComplete?.getPlace().geometry?.location.lng()
            }))

        } else {
            dispatch(actions.setCenterFailedAction({ error: 'error dispatch set center' }))
        }
    }

    

    return (
        <MapView
            id="searchbox-example"
            zoom={zoomhere}
            center={center}

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

export default MainView;



