import React from "react"

export interface DifficultyProps {
    difficulty?: number,
}

/** Difficulty icon for an activity
 *
 * @param props only using props.difficulty [string] to determine wich svg to display
 * @constructor
 */
const Difficulty: React.FunctionComponent<DifficultyProps> = ({ difficulty }) => {


    return <React.Fragment>
        {
            difficulty == null && <span>
                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http:www.w3.org/2000/svg">
                    <rect x="0.5" y="15.5" width="5" height="9" rx="1.5" stroke="white" />
                    <rect x="8.5" y="8.5" width="5" height="16" rx="1.5" stroke="white" />
                    <rect x="16.5" y="0.5" width="5" height="24" rx="1.5" stroke="white" />
                </svg>
            </span>

        }
        {
            difficulty == 1 && <span>
                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http:www.w3.org/2000/svg">
                    <rect x="0.5" y="15.5" width="5" height="9" rx="1.5" fill="white" />
                    <rect x="8.5" y="8.5" width="5" height="16" rx="1.5" stroke="white" />
                    <rect x="16.5" y="0.5" width="5" height="24" rx="1.5" stroke="white" />
                </svg>
            </span>
        }
        {
            difficulty == 2 && <span>
                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http:www.w3.org/2000/svg">
                    <rect x="0.5" y="15.5" width="5" height="9" rx="1.5" fill="white" />
                    <rect x="8.5" y="8.5" width="5" height="16" rx="1.5" fill="white" stroke="white" />
                    <rect x="16.5" y="0.5" width="5" height="24" rx="1.5" stroke="white" />
                </svg>
            </span>
        }
        {
            difficulty == 3 && <span>
                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http:www.w3.org/2000/svg">
                    <rect x="0.5" y="15.5" width="5" height="9" rx="1.5" fill="white" />
                    <rect x="8.5" y="8.5" width="5" height="16" rx="1.5" fill="white" />
                    <rect x="16.5" y="0.5" width="5" height="24" rx="1.5" fill="white" />
                </svg>
            </span>

        }

    </React.Fragment>
}

export default Difficulty