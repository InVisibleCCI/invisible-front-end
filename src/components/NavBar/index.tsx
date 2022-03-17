import React from 'react';
import { NavWrapper } from './styles';
import MenuBar from 'components/MenuBar';
import MenuItem from 'components/MenuItem';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

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
        />

        <MenuItem
          label={t('activity.category.hotel.title')}
          onClick={() => navigate('/hotels')}
        />

        <MenuItem
          label={t('activity.category.restaurant.title')}
          onClick={() => navigate('/restaurants')}
        />

      </MenuBar>

    </NavWrapper>
  );
}

export default NavBar;