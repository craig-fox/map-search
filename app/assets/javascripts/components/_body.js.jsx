// app/assets/javascripts/components/_main.js.jsx 
/* global React */
/* global $ */

class Body extends React.Component{ 
  constructor() {
    super();

    this.state = {
      locations: [],
      mapName: '',
      mapDescription: ''
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.updateLocations = this.updateLocations.bind(this);
    this.filterLocations = this.filterLocations.bind(this);
    this.removeLocationClient = this.removeLocationClient.bind(this);
  }
  
  componentDidMount(){
    $.getJSON('/api/v1/locations.json', (response) => { this.setState({ locations: response }) });
  }
  
  render() { 
    return ( 
      <div> 
        <SearchLocation handleSearch={this.handleSearch} />
        <NewLocation name={this.state.mapName} description={this.state.mapDescription} 
                     handleSubmit={this.handleSubmit}
                     />
        <h3>List of Locations</h3>
        <Locations locations={this.state.locations} 
                   handleDelete={this.handleDelete}
                   onUpdate={this.handleUpdate} />
        <LocationMap handleMapClick={this.handleMapClick} />           
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
  
  handleSearch(name){
    $.ajax(
      { 
        url: `/api/v1/locations/`, 
        type: 'GET', 
        success:() => { 
          this.filterLocations(name);
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
  
  handleMapClick(name, description){
    console.log(name);
    console.log(description);
    this.setState({mapName: name, mapDescription: description});
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
  
  filterLocations(name){
    const locations = this.state.locations.filter(
      (loc) => { 
        return loc.name.toLowerCase().startsWith(name.toLowerCase())
      }
    ); 
    
    this.setState({locations: locations})
  }

  removeLocationClient(id) { 
    var newLocations = this.state.locations.filter((location) => { 
      return location.id != id; 
    }); 
    this.setState({ locations: newLocations }); 
  }
};