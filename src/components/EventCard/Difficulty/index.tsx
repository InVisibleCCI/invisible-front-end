import { Props } from "react"
import React, { CSSProperties } from "react"

export interface DifficultyProps {
  difficulty?: string,
}

/** Difficulty icon for an activity
 *
 * @param props only using props.difficulty [string] to determine wich svg to display
 * @constructor
 */
const Difficulty: React.FunctionComponent<DifficultyProps> = (props) => {

    const difficulty = props.difficulty

    const styles = {
        difficulty: {

        },
    }

    if (difficulty == "0" || difficulty == "" || difficulty == null) {
      return <span style={styles.difficulty}>
            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="15.5" width="5" height="9" rx="1.5" stroke="white"/>
                <rect x="8.5" y="8.5" width="5" height="16" rx="1.5" stroke="white"/>
                <rect x="16.5" y="0.5" width="5" height="24" rx="1.5" stroke="white"/>
            </svg>
        </span>;
    } else if (difficulty == "1") {
        return <span style={styles.difficulty}>
              <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="15.5" width="5" height="9" rx="1.5" fill="white"/>
                  <rect x="8.5" y="8.5" width="5" height="16" rx="1.5" stroke="white"/>
                  <rect x="16.5" y="0.5" width="5" height="24" rx="1.5" stroke="white"/>
              </svg>
          </span>;
    } else if (difficulty == "2") {
        return <span style={styles.difficulty}>
            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="15.5" width="5" height="9" rx="1.5" fill="white"/>
                <rect x="8.5" y="8.5" width="5" height="16" rx="1.5" fill="white" stroke="white"/>
                <rect x="16.5" y="0.5" width="5" height="24" rx="1.5" stroke="white"/>
            </svg>
        </span>;
    } else if (difficulty == "3") {
        return <span style={styles.difficulty}>
            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="15.5" width="5" height="9" rx="1.5" fill="white"/>
                <rect x="8.5" y="8.5" width="5" height="16" rx="1.5" fill="white" />
                <rect x="16.5" y="0.5" width="5" height="24" rx="1.5" fill="white"/>
            </svg>
        </span>;
    }

    return <></>;
}

export default Difficulty