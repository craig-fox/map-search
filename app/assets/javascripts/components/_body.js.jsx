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
  }
  
  componentDidMount(){
    $.getJSON('/api/v1/locations.json', (response) => { this.setState({ locations: response }) });
  }
  
  render() { 
    return ( 
      <div> 
        <NewLocation handleSubmit={this.handleSubmit} />
        <AllLocations locations={this.state.locations} />
      </div> 
    ) 
  } 
  
  handleSubmit(location){
    const newState = this.state.locations.concat(location);
    this.setState({locations: newState});
  }
  
  
};