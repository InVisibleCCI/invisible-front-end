import React from 'react';
import Main from 'pages/Main';
import { BrowserRouter, Route, Routes as DOMRoutes } from 'react-router-dom';
import NotFound from 'pages/NotFound';

const Routes: React.FunctionComponent = () =>
    <DOMRoutes>
      <Route path="/" element={<Main />}>
      </Route>
      <Route path="*" element={<NotFound />} />
    </DOMRoutes>

export default Routes;
