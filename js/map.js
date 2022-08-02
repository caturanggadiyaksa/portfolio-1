//pk.eyJ1IjoiY2F0dXJhbmdnYSIsImEiOiJjbDR5N3JrZW0wMzJhM2JxdmFyaWdtb3AxIn0.jBPID5RxfBeVaR0bC-vTuQ

//-6.820239434933569

//long
//110.85476130657685


//pin
//lat
//-6.662171940994739

//long
//111.10720552236717


//add map

mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0dXJhbmdnYSIsImEiOiJjbDR5N3JrZW0wMzJhM2JxdmFyaWdtb3AxIn0.jBPID5RxfBeVaR0bC-vTuQ';


const defaultLocation = [110.85476130657685, -6.820239434933569]


//data pin
const geojson = {
    'type': 'FeatureCollection',
    'features': [
    {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [111.10720552236717, -6.662171940994739]
        },
    
        'properties': {
            'title': 'Rumah',
            'description': 'Desa Tlogoharum '
        }
    },
        

    ]
};


const map = new mapboxgl.Map({

    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: defaultLocation,
    zoom: 9
});

map.addControl(new mapboxgl.NavigationControl())


// add pin to map
for (const feature of geojson.features) {

    //create html element
    const el = document.createElement('div');
    el.className = 'marker';

    //make a marker
    new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(

        new mapboxgl.Popup({ offset: 25 })

        .setHTML(
            `<h3>${feature.properties.title}<p>${feature.properties.description}</p>`
    )
    )

    .addTo(map);
}



//add control map
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));




map.on('style.load', () => {
    map.setFog({}); //set default atmosphere

});

//add geolocate control
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true

        },
        //when active the map will receive 
        trackUserLocation: true,

        showUserHeading: true
    })
);


map.on('click', (e) => {
    const longtitude = e.lngLat.lng
    const lattidude = e.lngLat.lat
    console.log({longtitude, lattidude})
})


/*
map.on('load', () => {
    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    //110.9902983654751, lattidude: -6.778806977469188
                    //111.00155304236984, lattidude: -6.770087191544121
                    [-6.75221554699155, 111.0443915674374],
                    [-6.750402555131956, 111.05143147100864]
                ]
            }
        }
    });

    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },

        'paint': {
            'line-color': '#888',
            'line-width': 8
        }
    });
});
*/
