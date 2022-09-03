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
