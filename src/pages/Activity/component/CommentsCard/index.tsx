import React, { useState } from 'react';
import { Review } from '../../../../classes/Review';
import {
  AvatarWrapper,
  CommentBodyWrapper,
  CommentHeadWrapper,
  CommentSectionWrapper,
  CommentWrapper,
  ReviewMarkWrapper
} from './styles'
import { StarReviewBlack } from '../../../../components/Svg/Star';
import { GenericButton } from '../../../../components/Generics/GenericButton';
import { GenericModal } from '../../../../components/Generics/GenericModal';
import AddCommentForm from '../AddCommentForm';
import { useSessionContext } from '../../../../utils/types/contexts/SessionContext';
import { ToastService } from '../../../../components/Generics/GenericToast/ToastService';

interface Props {
  reviews: Review[];
}

const CommentsCard: React.FunctionComponent<Props> = ({ reviews }) => {

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {currentUser} = useSessionContext()

  const onClickAddComment = (e) => {
    if (!currentUser) {
      ToastService.displayToast("error", "Connexion demandée", "Vous devez être connecté pour laisser un avis")
      return;
    }
    setIsVisible(true)
  }

  const listReviews = (reviews) => {
    return reviews.map(review => {
        return (
          <CommentWrapper>
            <CommentHeadWrapper>
              <h6>{review.user.public_name}</h6>
              <p>{review.title}</p>
            </CommentHeadWrapper>
            <hr />
            <CommentBodyWrapper>
              <AvatarWrapper>
                { review.user.avatar &&
                  <img src={review.user.avatar.src}></img>
                }
                { !review.user.avatar &&
                  <img src={"https://images.assetsdelivery.com/compings_v2/yupiramos/yupiramos1706/yupiramos170614990.jpg"}></img>
                }
              </AvatarWrapper>
              <p>{review.description}</p>
            </CommentBodyWrapper>
            <ReviewMarkWrapper>
              <StarReviewBlack />
              {review.mark}
            </ReviewMarkWrapper>
          </CommentWrapper>
        );
    })
  }

  return (
    <CommentSectionWrapper>
      <h3>Ce que nos utilisateurs en ont pensé :</h3>
      {/* Button */}
      <div id={"add-comment"}>
        <GenericButton type="button" label={"Ajouter un avis"} onClick={e => onClickAddComment(e)} />
      </div>
      <GenericModal header=" Ajouter un avis " isVisible={isVisible} footer={null} onHide={() => setIsVisible(false)} content={<AddCommentForm />} />
      { reviews.length >= 1 && <>
        { listReviews(reviews) }
      </>
      }
    </CommentSectionWrapper>
  );
}

export default CommentsCard;