// app/assets/javascripts/components/_location_map.js.jsx 
/* global React */


class LocationMap extends React.Component{ 
  constructor(){
    super();
  }
  
  componentDidMount(){
    const home = {lat: -36.938182, lng: 174.654076};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: home
    });
    const marker = new google.maps.Marker({
      position: home,
      map: map
    }); 
  }
  
  render() { 
    const divStyle = {
      width: '100%',
      height: '300px'
    };
    return ( 
      <div id='map' style={divStyle}></div> 
    ) 
  } 
};