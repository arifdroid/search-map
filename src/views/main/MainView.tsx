import { Autocomplete } from '@react-google-maps/api'
import React, { useState } from 'react'
import MapView from './MapView'

const center = {
    lat: 3.140853,
    lng: 101.693207
}

export default function MainView() {

    const [thisautoComplete , setThisAutoComplete]= useState<any>(null)
    const [thisCenter , setThisCenter]= useState<any>(center)
    const [thisZoom , setThisZoom]= useState<any>(5)

    const onLoad = (autocomplete) => {        
        setThisAutoComplete(autocomplete)

    }

    const onPlaceChanged = () => {
        
        if (thisautoComplete !== null) {            
            setThisCenter({
                lat: thisautoComplete.getPlace().geometry.location.lat(),
                lng: thisautoComplete.getPlace().geometry.location.lng()
            })
            setThisZoom(17)            
        } else {
            // console.log('Autocomplete is not loaded yet!')
        }
    }

    return (
        <MapView
        id="searchbox-example"                
        zoom={thisZoom? thisZoom:3}
        center={thisCenter? thisCenter:center}
        
    >
        <Autocomplete
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
        >
            <input
                type="text"
                placeholder="Customized your placeholder"
                style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `240px`,
                    height: `32px`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                    position: "absolute",
                    left: "50%",
                    marginLeft: "-120px"
                }}
            />
        </Autocomplete>
    </MapView>   
    )
}
