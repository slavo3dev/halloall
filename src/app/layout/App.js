import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello Slavo</p>
        <p>First App</p>
        <button className='ui icon button'>
          <i className="smile icon"></i>CSS Button</button>
        <Button/>
      </div>
    );
  }
}

export default App;
