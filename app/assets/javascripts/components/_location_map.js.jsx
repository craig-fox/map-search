// app/assets/javascripts/components/_location_map.js.jsx 
/* global React */
/* global google */

class LocationMap extends React.Component{ 
  constructor(){
    super();
    this.setupMap = this.setupMap.bind(this);
  }
  
  setupMap(){
    const home = {lat: -36.848460, lng: 174.763332};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: home
    });
    let infowindow = new google.maps.InfoWindow();
    let service = new google.maps.places.PlacesService(map);
    const request = {
      location: map.getCenter(),
      radius: '500',
      query: 'Google Auckland'
    };
    service.textSearch(request, (results, status)=>{
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for(let place of results){
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          });
          google.maps.event.addListener(marker, 'click', () => {
            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
              'Place ID: ' + place.place_id + '<br>' +
              place.formatted_address + '</div>');
            infowindow.open(map, marker);
            this.props.handleMapClick(place.name, place.formatted_address.split(',')[0]);
          });
        }
      }  
    });
    
  }
  
  componentDidMount(){
    this.setupMap();
  }
  
  render() { 
    const divStyle = {
      width: '100%',
      height: '400px'
    };
    return ( 
      <div id='map' style={divStyle}></div> 
    ) 
  } 
};