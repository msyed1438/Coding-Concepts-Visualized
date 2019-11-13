//This is the entry point of our app
import App from './components/App'
import './bootstrap.min.css';
import './styles.css';
import ReactDOM from 'react-dom';
import React from 'react';


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default App;
