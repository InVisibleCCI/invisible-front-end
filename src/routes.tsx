import Main from 'pages/Main';
import NotFound from 'pages/NotFound';
import Search from 'pages/Search';
import React, { useState } from 'react';
import { Route, Routes as DOMRoutes } from 'react-router-dom';
import { SessionContext } from 'utils/types/contexts/SessionContext';

const Routes: React.FunctionComponent = () => {

  const [lastSearch, setLastSearch] = useState<string>('');

  return <SessionContext.Provider value={{ lastSearch, setLastSearch }}>
    <DOMRoutes>
      <Route path="/search" element={<Search />}>
      </Route>
      <Route path="/" element={<Main />}>
      </Route>
      <Route path="*" element={<NotFound />} />
    </DOMRoutes>
  </SessionContext.Provider>
}




export default Routes;
