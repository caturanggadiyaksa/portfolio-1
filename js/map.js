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



const map = new mapboxgl.Map({

    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: defaultLocation,
    zoom: 9
});

map.addControl(new mapboxgl.NavigationControl())
