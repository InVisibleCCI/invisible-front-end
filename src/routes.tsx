import Main from 'pages/Main';
import NotFound from 'pages/NotFound';
import Search from 'pages/Search';
import React, { useState } from 'react';
import { Route, Routes as DOMRoutes } from 'react-router-dom';
import { SessionContext } from 'utils/types/contexts/SessionContext';
import Activity from 'pages/Activity';

const Routes: React.FunctionComponent = () => {

  const [lastSearch, setLastSearch] = useState<string>('');

  return <SessionContext.Provider value={{ lastSearch, setLastSearch }}>
    <DOMRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/search" element={<Search />} />
      <Route path="/activity/:id" element={<Activity />} />
      <Route path="*" element={<NotFound />} />
    </DOMRoutes>
  </SessionContext.Provider>
}




export default Routes;
