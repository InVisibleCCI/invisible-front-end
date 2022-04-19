import { Props } from "react"
import React, { CSSProperties } from "react"

export interface LikeButtonProps {
  isLiked?: boolean,
}

/** Like button for an activity
 *
 * @param props only using props.isLiked [bool] to determine wich state is the component and wich heart is displayed
 * @constructor
 */
const LikeButton: React.FunctionComponent<LikeButtonProps> = (props) => {

    let isLiked = props.isLiked

    let buttonLiked = <path d="M18.9979 2.50895C18.442 1.94039 17.7811 1.48903 17.0529 1.18082C16.3248 0.872609 15.5439 0.713627 14.7551 0.713013C13.263 0.71326 11.8254 1.28259 10.727 2.30826C9.62865 1.28241 8.19102 0.71306 6.69893 0.713013C5.90918 0.713848 5.12739 0.873316 4.39855 1.18224C3.66971 1.49116 3.00821 1.94344 2.45211 2.51305C0.080227 4.93255 0.0812349 8.71692 2.45413 11.1262L10.727 19.5294L18.9999 11.1262C21.3728 8.71692 21.3738 4.93255 18.9979 2.50895Z" fill="white"/>;
    let buttonNotLiked = <path d="M18.9979 2.50895C18.442 1.94039 17.7811 1.48903 17.0529 1.18082C16.3248 0.872609 15.5439 0.713627 14.7551 0.713013C13.263 0.71326 11.8254 1.28259 10.727 2.30826C9.62865 1.28241 8.19102 0.71306 6.69893 0.713013C5.90918 0.713848 5.12739 0.873316 4.39855 1.18224C3.66971 1.49116 3.00821 1.94344 2.45211 2.51305C0.080227 4.93255 0.0812349 8.71692 2.45413 11.1262L10.727 19.5294L18.9999 11.1262C21.3728 8.71692 21.3738 4.93255 18.9979 2.50895Z" stroke="white"/>;

    let style = {
      displayed: {
          display: "block",
      },
      notDisplayed: {
          display: "none" ,
      },
    }

    return <>
        <svg className="liked" style={ isLiked ? style.displayed : style.notDisplayed} onClick={((e) => clicked(e))} width="21" height="20" viewBox="0 0 21 20" fill="none">
            {buttonLiked}
        </svg>
        <svg className="not-liked" style={ isLiked ? style.notDisplayed : style.displayed} onClick={(e) => clicked(e)} width="21" height="20" viewBox="0 0 21 20" fill="none">
            {buttonNotLiked}
        </svg>
    </>;

    /** Function that change the liked state
     *
     * @param e event
     */
    function clicked(e) {
        isLiked = !isLiked;

        // TODO add here the API call to add the event to the liked list

        changeIcon(e.target)
        return;
    }

  /** Function that change the like buttons style to switch from liked to not liked
   *
   * @param element element from event target
   */
    function changeIcon(element) {
        let neighborSvg;
        let thisSvg;

        // get the neighbourg SVG
        if (element.parentElement.nodeName == "SPAN") {
            neighborSvg = element.parentElement.getElementsByClassName(isLiked ? "liked" : "not-liked")[0];
            thisSvg = element;
        } else if (element.parentElement.nodeName == "svg"){
            if (element.parentElement.parentElement.nodeName == "SPAN") {
                thisSvg = element.parentElement;
                if (thisSvg.className == "liked") {
                    neighborSvg = element.parentElement.parentElement.parentElement.getElementsByClassName(isLiked ? "liked" : "not-liked")[1];
                } else {
                    neighborSvg = element.parentElement.parentElement.parentElement.getElementsByClassName(isLiked ? "liked" : "not-liked")[0];
                }
            } else {return;}
        } else {return;}

        thisSvg.style.display = "none";
        neighborSvg.style.display = "block";
    }
}

export default LikeButton
