import { LikeFilled, LikeOutlined } from "components/Svg/Like";
import React, { useState } from "react";
import {EventLikeWrapper} from "./styles";

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

    return <EventLikeWrapper>
        {
            isLiked ? <LikeFilled onClick={() => setIsLiked(false)} /> :
                <LikeOutlined onClick={() => setIsLiked(true)} />
        }
    </EventLikeWrapper>;
}

export default LikeButton
