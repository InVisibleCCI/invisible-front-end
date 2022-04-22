import React from 'react'
import { Dialog } from 'primereact/dialog';

interface Props {
    header:string, 
    isVisible: boolean | undefined
    footer:any, 
    onHide(): void
    content:any
}

export const GenericModal:React.FunctionComponent<Props> = ({header, isVisible, footer, onHide, content}) => {
    return <Dialog header={header} visible={isVisible} footer={footer} onHide={() => onHide()} >
        {content}
    </Dialog>
}