import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './themes/dark.css'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <link id='theme-link' rel="stylesheet" href='/src/themes/light.css'/>
  <App />
  </>
);
