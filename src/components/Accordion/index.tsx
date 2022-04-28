import React from 'react';
import { AccordionTab } from 'primereact/accordion';
import { AccordionWrapper } from './styles';
import {Accordion as PRAccordion}  from 'primereact/accordion';

interface Props {
  header: string
  children
}

const Accordion: React.FunctionComponent<Props> = ({header, children}) =>
  <AccordionWrapper>
    <PRAccordion>
      <AccordionTab header={header}>
        {children}
      </AccordionTab>
    </PRAccordion>
  </AccordionWrapper>

export default Accordion;