import styled from 'styled-components';
import { colors } from 'utils/styles';

export const AccordionWrapper = styled.div`
  & > .p-accordion {

    .p-accordion-tab > .p-accordion-header {
      & > a {
        border: none;
        background: none;

        &:focus {
          border: none;
          box-shadow: none;
        }

        display: flex;
        flex-direction: row-reverse;

        & > .p-accordion-toggle-icon {
          padding-left: 20px;
          color: ${colors.pink}
        }
      }
    }
    
    .p-accordion-tab.p-accordion-tab-active > .p-accordion-header {
      & > a {
        border: none;
        background: none;

        &:focus {
          border: none;
          box-shadow: none;
        }

        display: flex;
        flex-direction: row-reverse;

        & > .p-accordion-toggle-icon {
          padding-left: 20px;
          color: ${colors.pink}
        }
      }
    }
    
    .p-accordion-content {
      border: 1px solid ${colors.black};
      background: ${colors.grey};
    }
  }
`;