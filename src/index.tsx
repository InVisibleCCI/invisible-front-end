import App from 'App';
import 'primeicons/primeicons.css';
import PrimeReact from 'primereact/api';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/fluent-light/theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import reportWebVitals from './reportWebVitals';

PrimeReact.ripple = true;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

reportWebVitals();
