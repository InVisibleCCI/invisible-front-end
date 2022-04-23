import Connection from "pages/Connection";
import Main from 'pages/Main';
import NotFound from 'pages/NotFound';
import Register from "pages/Register";
import ResetPassword from "pages/ResetPassword";
import Search from 'pages/Search';
import React from 'react';
import { Route, Routes as DOMRoutes } from 'react-router-dom';
import Activity from 'pages/Activity';
import { LegalNotice } from "pages/Legal/LegalNotices";
import { PrivacyPolicy } from "pages/Legal/PrivacyPolicy";

const Routes: React.FunctionComponent = () => {

  return <DOMRoutes>
   <Route path="/activity/:id" element={<Activity />} />
    <Route path="/reset-password/:temporaryPassword/:securityMailToken" element={<ResetPassword />}></Route>
    <Route path="/connection" element={<Connection />}></Route>
    <Route path="/register" element={<Register />}></Route>
    <Route path="/search" element={<Search />}></Route>
    <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route> 
    <Route path="/legal-notices" element={<LegalNotice/>}></Route> 
    <Route path="/" element={<Main />}>
    </Route>
    <Route path="*" element={<NotFound />} />
  </DOMRoutes>
     
}




export default Routes;
