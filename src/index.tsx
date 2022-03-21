import 'primeicons/primeicons.css';
import PrimeReact from 'primereact/api';
import { ProgressSpinner } from 'primereact/progressspinner';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/fluent-light/theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import { GlobalStyles } from 'utils/styles';
import Layout from './components/Layout';
import './i18n';
import reportWebVitals from './reportWebVitals';




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
