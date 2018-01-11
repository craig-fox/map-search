// app/assets/javascripts/components/_search_location.js.jsx 
/* global React */
/* global $ */

class SearchLocation extends React.Component{ 
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() { 
    return ( 
      <div> 
        <h3>Search Location</h3>
        <input ref='name' placeholder='Enter the name to search for' />
        <button onClick={this.handleClick}>Submit</button>
      </div> 
    ) 
  } 
  
  handleClick() {
    const name = this.refs.name.value;
    this.props.handleSearch(name); 
  }
  
};