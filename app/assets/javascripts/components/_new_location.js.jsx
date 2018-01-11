// app/assets/javascripts/components/_new_location.js.jsx 
// app/assets/javascripts/components/_new_location.js.jsx 
/* global React */
/* global $ */

class NewLocation extends React.Component{ 
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
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
        <input ref='name' value={this.state.name} onChange={this.handleNameChange} placeholder='Enter the name of the location' />
        <input ref='description' value={this.state.description} onChange={this.handleDescriptionChange}  placeholder='Enter the description of the location' />
        <button onClick={this.handleClick}>Submit</button>
      </div> 
    ) 
  } 
  
  handleNameChange(event){
    this.setState({name: event.target.value});
  }
  
  handleDescriptionChange(event){
    this.setState({description: event.target.value});
  }
  
  handleClick() {
    const name = this.refs.name.value;
    const description = this.refs.description.value;
    this.props.handleSaveNewLocation(name, description);
  }  
  
  
  
};