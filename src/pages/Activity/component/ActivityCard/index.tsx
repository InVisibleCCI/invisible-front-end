import React from 'react';
import Card from 'components/Card';
import { AiOutlineHeart } from '@react-icons/all-files/ai/AiOutlineHeart';
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
import { useTranslation } from 'react-i18next';
import { ActivityCardWrapper, CommentNumberWrapper, Description, ReviewWrapper } from './styles';

interface Props {
  title: string,
  distance: number,
  description: string,
  review: number,
  commentNumber: number,
}

const ActivityCard: React.FunctionComponent<Props> = ({
  title,
  distance,
  description,
  review,
  commentNumber
}) => {
  const { t } = useTranslation();

  return (
    <ActivityCardWrapper>
      <Card
        size={"medium"}

        title={
          <>
            <h4>{title}</h4>
            <AiOutlineHeart />
          </>
        }

        children={
          <>
            <p>{t('card.distance', {distance: distance})}</p>
            <Description>
              {description}
            </Description>
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
    </ActivityCardWrapper>
  );
}


export default ActivityCard;