// app/assets/javascripts/components/_all_locations.js.jsx 
/* global React */
/* global $ */

class AllLocations extends React.Component{
  constructor() {
    super();

    this.state = {
      locations: []
    }
  }
  
  componentDidMount(){
    $.getJSON('/api/v1/locations.json', (response) => { this.setState({ locations: response }) });
  }
  
  render(){
    var locations= this.state.locations.map(
      (location) => { 
        return ( 
          <div key={location.id}> 
            <h3>{location.name}</h3> 
            <p>{location.description}</p> 
          </div> 
        ) 
      });
      
      return( 
        <div> 
          {locations} 
        </div> 
      )

  }
}