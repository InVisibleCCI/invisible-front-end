import React from 'react';
import { NavWrapper } from './styles';
import MenuBar from 'components/MenuBar';
import MenuItem from 'components/MenuItem';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
}

const NavBar: React.FunctionComponent = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <NavWrapper>
      <MenuBar>
        <MenuItem
          label={t('activity.title')}
          onClick={() => navigate('/activities')}
          active={useLocation().pathname === '/activities'}
        />

        <MenuItem
          label={t('activity.category.hotel.title')}
          onClick={() => navigate('/hotels')}
          active={useLocation().pathname === '/hotels'}
        />

        <MenuItem
          label={t('activity.category.restaurant.title')}
          onClick={() => navigate('/restaurants')}
          active={useLocation().pathname === '/restaurants'}
        />

      </MenuBar>

    </NavWrapper>
  );
}

export default NavBar;
