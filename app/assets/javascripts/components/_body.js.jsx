// app/assets/javascripts/components/_main.js.jsx 
/* global React */
/* global $ */

class Body extends React.Component{ 
  constructor() {
    super();

    this.state = {
      locations: []
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.removeLocationClient = this.removeLocationClient.bind(this);
  }
  
  componentDidMount(){
    $.getJSON('/api/v1/locations.json', (response) => { this.setState({ locations: response }) });
  }
  
  render() { 
    return ( 
      <div> 
        <NewLocation handleSubmit={this.handleSubmit} />
        <AllLocations locations={this.state.locations} 
                      handleDelete={this.handleDelete}
                      onUpdate={this.handleUpdate} />
      </div> 
    ) 
  } 
  
  handleSubmit(location){
    const newState = this.state.locations.concat(location);
    this.setState({locations: newState});
  }
  
  handleDelete(id){
    $.ajax(
      { 
        url: `/api/v1/locations/${id}`, 
        type: 'DELETE', 
        success:() => { 
          this.removeLocationClient(id); 
        },
        error: (msg) => {
          console.log(msg.responseText);
        }
      });
  }
  
  handleUpdate(location){
    console.log(location);
    $.ajax(
      { 
        url: `/api/v1/locations/${location.id}`, 
        type: 'PUT', 
        data: { location },
        success:() => { 
          this.updateLocations(location);
        }, 
        error: (msg) => {
          console.log(msg.responseText);
        }
      });
  }
  
  updateLocations(location) { 
    const locations = this.state.locations.filter(
      (loc) => { 
        return loc.id != location.id 
      }
    ); 
      
    locations.push(location); 
    this.setState({locations: locations }); 
  }

  removeLocationClient(id) { 
    var newLocations = this.state.locations.filter((location) => { 
      return location.id != id; 
    }); 
    this.setState({ locations: newLocations }); 
  }
};