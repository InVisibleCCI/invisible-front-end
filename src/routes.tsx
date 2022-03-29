import Connection from "pages/Connection";
import Main from 'pages/Main';
import NotFound from 'pages/NotFound';
import Register from "pages/Register";
import Search from 'pages/Search';
import React from 'react';
import { Route, Routes as DOMRoutes } from 'react-router-dom';

const Routes: React.FunctionComponent = () => {

  return <DOMRoutes>
    <Route path="/connection" element={<Connection />}></Route>
    <Route path="/register" element={<Register />}></Route>
    <Route path="/search" element={<Search />}></Route>
    <Route path="/" element={<Main />}>
    </Route>
    <Route path="*" element={<NotFound />} />
  </DOMRoutes>
}




export default Routes;
