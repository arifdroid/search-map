import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useCallback, useState } from 'react'
import config from 'src/config';

const containerStyle = {
    height: '100vh', width: '100%'
};

const darkMode: any = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
    },
    {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
    },
    {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
    },
    {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
    },
];

const lightMode: any = null;


interface MapViewProps {
    id: string,
    center: {lat:number, lng:number},
    children: any,
    zoom: number
}

export default function MapView(props: MapViewProps) {
    
    const { id, center, children, zoom } = props;

    const { isLoaded } = useJsApiLoader({
        id: id ? id : 'google-map-script',
        googleMapsApiKey: config.google_map_api_key,
        libraries: ["places",],


    })

    const [map, setMap] = useState(null);
    const [location, setLocation] = useState<any>(center);
    const [isDarkMode, setIsDarkmode] = useState<any>(darkMode);

    const onLoad = useCallback(function callback(map) {

        const bounds: any = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)


    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
        setLocation(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                styles: isDarkMode,
                disableDefaultUI: true,
            }}
            
        >
            {children}
        </GoogleMap>
    ) : <></>
}
