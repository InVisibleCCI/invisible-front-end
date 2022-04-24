import React from 'react';
import { MerchantCardWrapper } from './styles';
import Card from 'components/Card';
import { CommentNumberWrapper, Description, ReviewWrapper } from 'pages/Activity/component/ActivityCard/styles';
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string,
  picture: string,
  address: string,
  phone: string,
  openingHours: JSON,
  socialNetwork: string[],
}

const MerchantCard: React.FunctionComponent<Props> = ({
  title,
  address,
  phone,
  openingHours,
  socialNetwork
}) => {
  const { t } = useTranslation();
  return (
    <MerchantCardWrapper>
      <Card
        size={"medium"}

        title={
          <>
            <h4>{title}</h4>
          </>
        }

        children={
          <>
            <p><b>{t('card.address')}</b> {address} </p>
            <p><b>{t('card.phone')}</b> {phone} </p>
            <p><b>{t('card.openingHours')}</b> {openingHours} </p>
          </>
        }

        footer={
          <>
            <ReviewWrapper>
              <AiFillStar/>
              {review}
            </ReviewWrapper>
            <CommentNumberWrapper>
              {t('card.comment', {commentNumber: commentNumber})}
            </CommentNumberWrapper>
          </>
        }
      />
    </MerchantCardWrapper>
);
}
export default MerchantCard;