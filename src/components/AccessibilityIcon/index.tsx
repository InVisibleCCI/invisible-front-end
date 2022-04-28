import { Blind } from "components/Svg/Blind"
import { WheelChair } from "components/Svg/WheelChair"
import React from "react"
import { AccessibilityIconWrapper } from "./style"

export const AccessibilityIcon = ({ category }) => {
    const getIcon = () => {
        switch (category) {
            case "Fauteuil roulant":
                return <WheelChair />
            case "BlindFriendly":
                return <Blind/>
            default: 
                return null
        }
    }
    return <AccessibilityIconWrapper>
        <a href={`search?term=${category}`}>{getIcon()}</a>
    </AccessibilityIconWrapper>
}