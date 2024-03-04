import css from './GoogleMap.module.css'
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';





const containerStyle = {
    width: '100vw',
    height: '600px',
    filter: 'grayscale(100%)'
};

const center = {
    lat: 52.3742541,
    lng: 16.8633401
};


function MyMap() {

    const { isLoaded } = useJsApiLoader({
        id: import.meta.env.VITE_KEY,
        googleMapsApiKey: import.meta.env.VITE_KEY
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
        let marker = new google.maps.Marker({ position: center, map: map })
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={4}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default MyMap