import React, { Component } from 'react';

import App1 from './components/demo-app2/src/app';

class App extends Component {

  render() {
        let templates = [];
        templates.push(
          <div style={{'padding-top': '100px', height: '900px', border: 'solid black 1px'}}>
            <div style={{height: '100px', width: '20px', border: 'solid black 1px'}}>
              <App1 style={{height: '100px', width: '20px', border: 'solid black 1px'}}/>
            </div>
          </div>

        );
    return (
      <div className="App">
        {templates}
      </div>
    );
  }
}

export default App;
