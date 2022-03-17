import React from 'react';
import reportWebVitals from './reportWebVitals';
import './i18n';
import Layout from './components/Layout';
import Routes from 'routes';
import { GlobalStyles } from 'styles';
import ReactDOM from 'react-dom';
import { ProgressSpinner } from 'primereact/progressspinner';

import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


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
