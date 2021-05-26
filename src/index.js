import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

handleClick = () => {
  return "1+1=2"
}
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.handleClick} />
  </div>,
  document.getElementById('root')
);