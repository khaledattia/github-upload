import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store  from './store';
import '@assets/styles/layout.css';
import '@assets/styles/readyMadeDesigns.css';
import '@assets/styles/typography.css';
import './index.css';
import App from '@/App'; 

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
