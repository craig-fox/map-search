/*global React*/
/* global expect */

const TestUtils = React.addons.TestUtils;

describe('Body', ()=>{
  it('filters the locations by name', ()=>{
    
    const locations = [{name: 'Seagull Cafe', description: '123 Bird St'}, 
                       {name: 'Sea Shanty Lodge', description: '456 Fish Rd'}, 
                       {name: 'Morning Tavern', description: '789 Beer Crescent'}];
    
    let body = TestUtils.renderIntoDocument(
      <Body labelOn="On" labelOff="Off" />
    );
    body.setState({locations: locations});
    body.filterLocations('sea');
    
    expect(body.state.locations.length).toEqual(2);
  })
})

