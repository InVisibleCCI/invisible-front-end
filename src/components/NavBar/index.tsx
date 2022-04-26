import React from 'react';
import { NavWrapper } from './styles';
import MenuBar from 'components/MenuBar';
import MenuItem from 'components/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <NavWrapper>
      <MenuBar>
        <MenuItem
          label={'Activités'}
          onClick={() => navigate('/activities')}
          active={useLocation().pathname === '/activities'}
        />

        <MenuItem
          label={'Hôtels'}
          onClick={() => navigate('/hotels')}
          active={useLocation().pathname === '/hotels'}
        />

        <MenuItem
          label={'Restaurants'}
          onClick={() => navigate('/restaurants')}
          active={useLocation().pathname === '/restaurants'}
        />
      </MenuBar>
    </NavWrapper>
  );
}

export default NavBar;
