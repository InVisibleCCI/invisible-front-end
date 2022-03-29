import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar';
import { ContentWrapper, LayoutWrapper } from './styles';

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
