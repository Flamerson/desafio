import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Services/Router';
import './Styled/Style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)