import React from 'react';
import Card from 'components/Card';
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
import { ActivityCardWrapper, CommentNumberWrapper, Description, FooterWrapper, Review, ReviewWrapper } from './styles';
import Difficulty from 'components/EventCard/Difficulty';
import LikeButton from 'components/EventCard/LikeButton';
import ReadMoreReact from 'read-more-react';
import { AccessIconContainer } from 'components/EventCard/AccessIconContainer';
import { AccessibilityCategory } from 'classes/AccessibilityCategory';

interface Props {
  title: string,
  distance?: string,
  description: string,
  review: number,
  commentNumber: number,
  difficulty: number
  eventId: string, 
  accessCategories : AccessibilityCategory[]
}

const ActivityCard: React.FunctionComponent<Props> = ({
  title,
  distance,
  description,
  review,
  commentNumber,
  difficulty,
  eventId, 
  accessCategories
}) => {

  return (
    <ActivityCardWrapper>
      <Card
        size={"medium"}

        title={
          <>
            <h4>{title}</h4>
            <LikeButton eventId={eventId} />
          </>
        }

        children={
          <>
            <p>{`A ${distance}`}</p>
            <Description>
              <ReadMoreReact
                text={description} readMoreText={"Lire plus"} min={160}
                ideal={170}
                max={180}
              />
            </Description>
          </>
        }

        footer={
          <FooterWrapper>
            <Difficulty difficulty={difficulty} />
            <AccessIconContainer categories={accessCategories}/>
            <ReviewWrapper>
              <Review>
                <AiFillStar/>
                {review}
              </Review>              
              <CommentNumberWrapper>
                {`(${commentNumber} commentaires)`}
              </CommentNumberWrapper>
            </ReviewWrapper>
          </FooterWrapper>
        }
      />
    </ActivityCardWrapper>
  );
}


export default ActivityCard;