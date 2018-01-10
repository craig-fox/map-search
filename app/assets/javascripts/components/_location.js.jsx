// app/assets/javascripts/components/_location.js.jsx 
/* global React */

class Location extends React.Component {
  constructor(){
    super();
    this.state = {editable: false};
    this.handleEdit= this.handleEdit.bind(this);
  }
  
  handleEdit(){
    console.log('edit location clicked'); 
    const location = {id: this.props.location.id};
    console.log(location);
    if(this.state.editable) {
      const name = this.refs.name.value;
      console.log(name);
      const description = this.refs.description.value;
      console.log(description);
      const id = this.props.location.id;
      const location = { id, name, description };
      console.log(location);
      this.props.handleUpdate(location); 
    }
 
    this.setState({ editable: !this.state.editable });
  }
  
  render() { 
    const name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.location.name} /> : <h3>{this.props.location.name}</h3>; 
    const description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.location.description} />: <p>{this.props.location.description}</p>; 

    return ( 
      <div> 
        <div>{name}</div> 
        <div>{description}</div> 
        <button onClick={this.props.handleDelete} >Delete</button> 
        <button onClick={this.handleEdit}> {this.state.editable ? 'Submit': 'Edit'} </button> 
      </div> ) 
  }
}