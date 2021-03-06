import React from "react"
import {DifficultyNull, DifficultyOne, DifficultyTwo, DifficultyThree} from "../../Svg/Difficulty";
import { EventDifficultyWrapper } from "./styles"

export interface DifficultyProps {
    difficulty?: number,
}

/** Difficulty icon for an activity
 *
 * @param props only using props.difficulty [string] to determine wich svg to display
 * @constructor
 */
const Difficulty: React.FunctionComponent<DifficultyProps> = ({ difficulty }) => {


    return <EventDifficultyWrapper>
        {
            difficulty == null && <DifficultyNull />
        }
        {
            difficulty == 1 && <DifficultyOne />
        }
        {
            difficulty == 2 && <DifficultyTwo />
        }
        {
            difficulty == 3 && <DifficultyThree />
        }

    </EventDifficultyWrapper>
}

export default Difficulty