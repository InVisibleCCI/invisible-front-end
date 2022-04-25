import React from 'react';
import {
  AccordionWrapper,
  BodyWrapper,
  FooterWrapper,
  MerchantCardWrapper,
  SocialNetwork,
  SocialNetworkWrapper,
  TitleWrapper
} from './styles';
import Card from 'components/Card';
import { useTranslation } from 'react-i18next';
import { colors } from 'utils/styles';
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram';
import { RiTwitterFill } from '@react-icons/all-files/ri/RiTwitterFill';
import { RiFacebookBoxFill } from '@react-icons/all-files/ri/RiFacebookBoxFill';
import Accordion from 'components/Accordion';

interface Props {
  title: string,
  picture: string,
  address: string,
  phone: string,
  openingHours?: JSON,
}

const MerchantCard: React.FunctionComponent<Props> = ({
  title,
  address,
  phone,
  openingHours,
}) => {
  return (
    <MerchantCardWrapper>
      <Card
        color={colors.grey}
        size={"medium"}

        title={
          <TitleWrapper>
            <h4>{title}</h4>
          </TitleWrapper>
        }

        children={
          <BodyWrapper>
            <p><b>Adresse :</b> {address} </p>
            <p><b>Telephone :</b> {phone} </p>
            <AccordionWrapper>
              <b>Horaires :</b>
              <Accordion header={"Ouvert jusqu'à 18h30"} >
                {'openingHours'}
              </Accordion>
            </AccordionWrapper>
          </BodyWrapper>
        }

        footer={
          <>
          <FooterWrapper>
            <SocialNetworkWrapper>
              <SocialNetwork>
                {<FiInstagram />}
              </SocialNetwork>
              <SocialNetwork>
                {<RiTwitterFill />}
              </SocialNetwork>
              <SocialNetwork>
                {<RiFacebookBoxFill />}
              </SocialNetwork>
            </SocialNetworkWrapper>
          </FooterWrapper>
          </>
        }
        />
    </MerchantCardWrapper>
);
}
export default MerchantCard;