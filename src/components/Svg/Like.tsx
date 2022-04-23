import React from "react";

/** Return the like button
 * filled
 *
 * @param onClick
 * @constructor
 */
export const LikeFilled = ({ onClick }) => {

    return <svg onClick={onClick} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http:www.w3.org/2000/svg">
        <path d="M18.9979 2.50895C18.442 1.94039 17.7811 1.48903 17.0529 1.18082C16.3248 0.872609 15.5439 0.713627 14.7551 0.713013C13.263 0.71326 11.8254 1.28259 10.727 2.30826C9.62865 1.28241 8.19102 0.71306 6.69893 0.713013C5.90918 0.713848 5.12739 0.873316 4.39855 1.18224C3.66971 1.49116 3.00821 1.94344 2.45211 2.51305C0.080227 4.93255 0.0812349 8.71692 2.45413 11.1262L10.727 19.5294L18.9999 11.1262C21.3728 8.71692 21.3738 4.93255 18.9979 2.50895Z" fill="white">
            <title>Bouton retirer des favoris</title>
        </path>
    </svg>

}

/** Return the like button unfilled
 *
 * @param onClick
 * @constructor
 */
export const LikeOutlined = ({ onClick }) => {

    return <svg onClick={onClick} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http:www.w3.org/2000/svg">
        <path d="M18.9979 2.50895C18.442 1.94039 17.7811 1.48903 17.0529 1.18082C16.3248 0.872609 15.5439 0.713627 14.7551 0.713013C13.263 0.71326 11.8254 1.28259 10.727 2.30826C9.62865 1.28241 8.19102 0.71306 6.69893 0.713013C5.90918 0.713848 5.12739 0.873316 4.39855 1.18224C3.66971 1.49116 3.00821 1.94344 2.45211 2.51305C0.080227 4.93255 0.0812349 8.71692 2.45413 11.1262L10.727 19.5294L18.9999 11.1262C21.3728 8.71692 21.3738 4.93255 18.9979 2.50895Z" stroke="white">
            <title>Bouton ajouter aux favoris</title>
        </path>
    </svg>

}