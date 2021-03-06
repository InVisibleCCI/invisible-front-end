import Activity from 'pages/Activity';
import Connection from "pages/Connection";
import { ConnectionFormService } from "pages/Connection/ConnectionForm/ConnectionFormService";
import { LegalNotice } from "pages/Legal/LegalNotices";
import { PrivacyPolicy } from "pages/Legal/PrivacyPolicy";
import Main from 'pages/Main';
import NotFound from 'pages/NotFound';
import { Profil } from "pages/Profil";
import Register from "pages/Register";
import ResetPassword from "pages/ResetPassword";
import Search from 'pages/Search';
import { MerchantPage } from "pages/Merchant";
import { useSessionContext } from "utils/types/contexts/SessionContext";
import { Route, Routes as DOMRoutes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';

const Routes: React.FunctionComponent = () => {

  const { currentUser, lastLocation } = useSessionContext();
  const navigate = useNavigate();

  useEffect(() => {
    ConnectionFormService.redirectTo$.subscribe(isOk => {
      if (isOk) {
        navigate(lastLocation)
      }
    })

  }, [lastLocation])


  return <DOMRoutes>
    <Route path="/merchant/:id" element={<MerchantPage />} />
    {currentUser && <Route path="/profile" element={<Profil />} />}
    <Route path="/activity/:id" element={<Activity />} />
    <Route path="/reset-password/:temporaryPassword/:securityMailToken" element={<ResetPassword />}></Route>
    <Route path="/connection" element={<Connection />}></Route>
    <Route path="/register" element={<Register />}></Route>
    <Route path="/search" element={<Search />}></Route>
    <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
    <Route path="/legal-notices" element={<LegalNotice />}></Route>
    <Route path="/" element={<Main />}>
    </Route>
    <Route path="*" element={<NotFound />} />
  </DOMRoutes>

}




export default Routes;
