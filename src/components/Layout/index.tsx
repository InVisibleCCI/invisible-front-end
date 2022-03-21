import React from 'react';
import { ContentWrapper, LayoutWrapper } from './styles';
import NavBar from '../NavBar';
import { BrowserRouter } from 'react-router-dom';
import Footer from 'components/Footer';

interface Props {
}

const Layout: React.FunctionComponent<Props> = ({ children }) =>
  <LayoutWrapper>
    <BrowserRouter>
        <ContentWrapper>
          <NavBar />
          {children}
          <Footer />
        </ContentWrapper>
    </BrowserRouter>
  </LayoutWrapper>

export default Layout;
