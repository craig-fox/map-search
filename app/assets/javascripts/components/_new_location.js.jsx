// app/assets/javascripts/components/_new_location.js.jsx 
// app/assets/javascripts/components/_new_location.js.jsx 
/* global React */
/* global $ */

class NewLocation extends React.Component{ 
  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this);
    const name = this.props.name;
    const description = this.props.description;
    this.state = {name: name, description: description};
  }
  
  componentWillReceiveProps(newProps) {
   this.setState({name: newProps.name, description: newProps.description});
  }
  
  render() { 
   
    return ( 
      <div> 
        <h3>New Location</h3>
        <input ref='name' value={this.state.name} placeholder='Enter the name of the location' />
        <input ref='description' value={this.state.description}  placeholder='Enter the description of the location' />
        <button onClick={this._handleClick}>Submit</button>
      </div> 
    ) 
  } 
  
  _handleClick() {
    const name = this.refs.name.value;
    const description = this.refs.description.value;
    
    $.ajax(
      { 
        url: '/api/v1/locations', 
        type: 'POST', 
        data: { location: { name: name, description: description } }, 
        success: (location) => { 
          this.props.handleSubmit(location);
        },
        error: (msg) => {
          console.log(msg.responseText);
        }
        
      });
  
    console.log('The name value is ' + name + ', the description value is ' + description); 
  }
  
  
};