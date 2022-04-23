import React from 'react';
import { NotFoundText, NotFoundTextWrapper, NotFoundTitle, NotFoundWrapper } from './styles';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {
}

const NotFound: React.FunctionComponent<Props> = ({}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <NotFoundWrapper>
      <NotFoundTextWrapper>
        <NotFoundTitle>
          404
        </NotFoundTitle>

        <NotFoundText>
          {t('notFound.title')}
        </NotFoundText>
      </NotFoundTextWrapper>
    </NotFoundWrapper>
  );
}

export default NotFound;
