import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Entry point for the application
// Responsible for rendering the main `App` component
// Into the root DOM element specified in `public/index.html`
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);