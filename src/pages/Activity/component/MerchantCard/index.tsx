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
import { colors } from 'utils/styles';
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram';
import { RiTwitterFill } from '@react-icons/all-files/ri/RiTwitterFill';
import { RiFacebookBoxFill } from '@react-icons/all-files/ri/RiFacebookBoxFill';
import Accordion from 'components/Accordion';
import { Image } from 'classes/Image';

interface Props {
  title: string,
  picture: Image,
  address: string,
  phone: string,
  instagram?: string,
  twitter?: string,
  facebook?: string,
}

const MerchantCard: React.FunctionComponent<Props> = ({
  title,
  address,
  phone,
  instagram,
  twitter,
  facebook,
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
              {instagram &&
                <SocialNetwork href={instagram}>
                  {<FiInstagram />}
                </SocialNetwork>
              }

              {twitter &&
              <SocialNetwork href={twitter}>
                {<RiTwitterFill />}
              </SocialNetwork>
              }

              {facebook &&
              <SocialNetwork href={facebook}>
                {<RiFacebookBoxFill />}
              </SocialNetwork>
              }
            </SocialNetworkWrapper>
          </FooterWrapper>
          </>
        }
        />
    </MerchantCardWrapper>
);
}
export default MerchantCard;