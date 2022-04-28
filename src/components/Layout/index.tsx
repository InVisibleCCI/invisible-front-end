import Footer from 'components/Footer';
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
         <Footer/>
      </ContentWrapper>
    </BrowserRouter>
  </LayoutWrapper>

export default Layout;
