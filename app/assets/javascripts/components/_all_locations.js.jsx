// app/assets/javascripts/components/_all_locations.js.jsx 
/* global React */


class AllLocations extends React.Component{
  constructor(){
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }
  
  handleDelete(id){
    this.props.handleDelete(id);
  }
  
  onUpdate(location){
    this.props.onUpdate(location);
  }
  
  render(){
    const locations= this.props.locations.map(
      (location) => { 
        return ( 
          <div key={location.id}> 
            <Location location={location}
                      handleDelete={this.handleDelete.bind(this, location.id)}
                      handleUpdate={this.onUpdate}
                      />
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