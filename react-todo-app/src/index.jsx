import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/reset.css';
import './assets/css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
