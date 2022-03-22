import React from 'react';
import { NotFoundText, NotFoundTextWrapper, NotFoundTitle, NotFoundWrapper } from './styles';
import { useTranslation } from 'react-i18next';

const NotFound: React.FunctionComponent = () => {
  const { t } = useTranslation();

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
