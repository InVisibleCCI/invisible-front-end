import React from 'react';
import { NotFoundText, NotFoundTextWrapper, NotFoundTitle, NotFoundWrapper } from './styles';

const NotFound: React.FunctionComponent = () => {

  return (
    <NotFoundWrapper>
      <NotFoundTextWrapper>
        <NotFoundTitle>
          404
        </NotFoundTitle>

        <NotFoundText>
          {'La page que vous cherchez n\'existe pas.'}
        </NotFoundText>
      </NotFoundTextWrapper>
    </NotFoundWrapper>
  );
}

export default NotFound;
