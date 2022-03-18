import React from 'react';
import reportWebVitals from './reportWebVitals';
import PrimeReact from 'primereact/api';
import Layout from './components/Layout';
import Routes from 'routes';
import { GlobalStyles } from 'utils/styles';
import ReactDOM from 'react-dom';
import { ProgressSpinner } from 'primereact/progressspinner';

import './i18n';

import 'primereact/resources/themes/fluent-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


PrimeReact.ripple = true;


ReactDOM.render(
  <React.Suspense fallback={< ProgressSpinner />}>
    <GlobalStyles />
    <Layout>
      <Routes />
    </Layout>
  </React.Suspense>,
  document.getElementById('root')
);

reportWebVitals();
