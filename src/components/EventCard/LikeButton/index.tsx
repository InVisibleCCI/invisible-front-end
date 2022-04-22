import { ToastService } from "components/Generics/GenericToast/ToastService";
import { LikeFilled, LikeOutlined } from "components/Svg/Like";
import React, { useEffect, useState } from "react";
import { UserFavoritesService } from "services/UserFavoritesService";
import { useSessionContext } from 'utils/types/contexts/SessionContext';

export interface LikeButtonProps {
    eventId: string,
}

/** Like button for an activity
 *
 * @param props
 * @constructor
 */
export const LikeButton: React.FunctionComponent<LikeButtonProps> = ({ eventId }) => {

    const [isLiked, setIsLiked] = useState<boolean>(false);
    const userFavoritesService = new UserFavoritesService();
    const { currentUser } = useSessionContext();


    const onClickLikeButton = () => {
        if (currentUser) {
            if (!isLiked) {
                userFavoritesService.create({ eventId }).then(e => setIsLiked(true)).catch(e => ToastService.displayToast("error", "Une erreur est survenue", ""))
                return
            }
            userFavoritesService.delete({ eventId }).then(e => setIsLiked(false)).catch(e => ToastService.displayToast("error", "Une erreur est survenue", ""))

        } else {
            ToastService.displayToast("error", "Connexion demandée", "Vous devez être connecté pour ajouter une activité à vos favoris")
        }
    }

    useEffect(() => {
        if (currentUser && currentUser.favorites.find(event => event.id === eventId)) {
            setIsLiked(true)
            return
        }
        setIsLiked(false)

    }, [currentUser])


    return <React.Fragment>
        {
            isLiked ? <LikeFilled onClick={e => onClickLikeButton()} /> :
                <LikeOutlined onClick={e => onClickLikeButton()} />
        }
    </React.Fragment>;
}

export default LikeButton
