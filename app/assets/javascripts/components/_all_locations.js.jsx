// app/assets/javascripts/components/_all_locations.js.jsx 
/* global React */


class AllLocations extends React.Component{
  render(){
    var locations= this.props.locations.map(
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