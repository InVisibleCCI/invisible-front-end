import React, { useEffect, useState } from 'react';
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
import { GenericFormService } from 'components/Generics/GenericForm/GenericFormService';
import { ProfilImageWrapper } from 'pages/Profil/InformationsUser/style';

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
  useEffect(() => {
    GenericFormService.onSubmit$.subscribe(form => {
      if(form && form.IsSubmitted && form?.formServiceName == "addComment"){
        setIsVisible(false)
      }
    })
  }, [])

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
            <ProfilImageWrapper 
                url={review.user.avatar ? review.user.avatar.src : "https://i.stack.imgur.com/l60Hf.png"}
                alt={review.user.avatar ? review.user.avatar.alt_text : "Avatar par défaut de l'utilisateur"}
                size="small"
                />
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