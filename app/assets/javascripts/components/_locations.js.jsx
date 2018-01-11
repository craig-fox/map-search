// app/assets/javascripts/components/_locations.js.jsx 
/* global React */


class Locations extends React.Component{
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
            <Location key={location.id} location={location}
                      handleDelete={this.handleDelete.bind(this, location.id)}
                      handleUpdate={this.onUpdate}
                      />
        ) 
      });
      
      return( 
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
               {locations} 
            </tbody>
          </table>
      )
  }
}