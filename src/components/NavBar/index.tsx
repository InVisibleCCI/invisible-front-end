import React from 'react';
import { NavWrapper } from './styles';
import MenuBar from 'components/MenuBar';
import MenuItem from 'components/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSessionContext } from 'utils/types/contexts/SessionContext';

const NavBar: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const {setLastSearch} = useSessionContext(); 

  const search = (label) => {
    setLastSearch(label)
    navigate(`/search?term=${label}`);
}

  return (
    <NavWrapper>
      <MenuBar>
        <MenuItem
          label={'Cours'}
          onClick={() => search("Cours")}
          active={useLocation().pathname === '/activities'}
        />

        <MenuItem
          label={'Hôtels'}
          onClick={() => search("hotels")}
          active={useLocation().pathname === '/hotels'}
        />

        <MenuItem
          label={'Restaurants'}
          onClick={() => search("restaurants")}
          active={useLocation().pathname === '/restaurants'}
        />
      </MenuBar>
    </NavWrapper>
  );
}

export default NavBar;
