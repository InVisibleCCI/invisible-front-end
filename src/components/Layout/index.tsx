import React from 'react';
import { ContentWrapper, LayoutWrapper } from './styles';
import NavBar from '../NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from 'routes';

interface Props {
}

const Layout: React.FunctionComponent<Props> = ({ children }) =>
  <LayoutWrapper>
    <BrowserRouter>
        <ContentWrapper>
          <NavBar />
          {children}
        </ContentWrapper>
    </BrowserRouter>
  </LayoutWrapper>

export default Layout;
