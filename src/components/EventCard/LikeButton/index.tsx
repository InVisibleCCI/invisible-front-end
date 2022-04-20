import { LikeFilled, LikeOutlined } from "components/Svg/Like";
import React, { useState } from "react";

export interface LikeButtonProps {
    isLiked: boolean,
}

/** Like button for an activity
 *
 * @param props
 * @constructor
 */
export const LikeButton: React.FunctionComponent<LikeButtonProps> = (props) => {

    const [isLiked, setIsLiked] = useState<boolean>(props.isLiked);

    return <React.Fragment>
        {
            isLiked ? <LikeFilled onClick={e => setIsLiked(false)} /> :
                <LikeOutlined onClick={e => setIsLiked(true)} />
        }
    </React.Fragment>;
}

export default LikeButton
