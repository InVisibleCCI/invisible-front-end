import { AccessibilityIcon } from "components/AccessibilityIcon"
import React from "react"
import { AccessIconWrapper } from "./style"

export const AccessIconContainer = ({ categories }) => {
    return <AccessIconWrapper>
        {categories.map(category => <AccessibilityIcon category={category.name} />)}

    </AccessIconWrapper>
}