// app/assets/javascripts/components/_location.js.jsx 
/* global React */

class Location extends React.Component {
  constructor(){
    super();
    this.state = {editable: false};
    this.handleEdit= this.handleEdit.bind(this);
  }
  
  handleEdit(){
    const location = {id: this.props.location.id};
    if(this.state.editable) {
      const name = this.refs.name.value;
      const description = this.refs.description.value;
      const id = this.props.location.id;
      const location = { id, name, description };
      this.props.handleUpdate(location); 
    }
 
    this.setState({ editable: !this.state.editable });
  }
  
  render() { 
    const name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.location.name} /> : <h3>{this.props.location.name}</h3>; 
    const description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.location.description} />: <p>{this.props.location.description}</p>; 

    return ( 
      <tr> 
        <td>{name}</td> 
        <td>{description}</td> 
        <td><button onClick={this.props.handleDelete} >Delete</button></td>
        <td><button onClick={this.handleEdit}> {this.state.editable ? 'Submit': 'Edit'} </button></td>
      </tr> ) 
  }
}