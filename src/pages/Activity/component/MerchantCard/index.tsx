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
import { Image } from 'classes/Image';
import { RegularOpening } from 'classes/RegularOpening';
import { Openings } from 'pages/Merchant/Openings';
import { ProfilImageWrapper } from 'pages/Profil/InformationsUser/style';

interface Props {
  title: string,
  picture: Image,
  address: string,
  phone: string,
  openingHours?: RegularOpening[],
  instagram?: string,
  twitter?: string,
  facebook?: string,
  onClick?: (event: any) => void
}

const MerchantCard: React.FunctionComponent<Props> = ({
  title,
  picture,
  address,
  phone,
  openingHours,
  instagram,
  twitter,
  facebook,
  onClick
}) => {
  return (
    <MerchantCardWrapper onClick={onClick}>
      <Card
        color={colors.grey}
        size={"medium"}

        title={
          <TitleWrapper>
            <h4>{title}</h4>
            <ProfilImageWrapper
              url={picture ? picture.src : "https://i.stack.imgur.com/l60Hf.png"}
              alt={picture ? picture.alt_text : "Logo par defaut d'un commerçant"}
              size="medium"
            />
          </TitleWrapper>
        }

        children={
          <BodyWrapper>
            <p><b>Adresse :</b> {address} </p>
            <p><b>Telephone :</b> {phone} </p>
            {openingHours &&
            <AccordionWrapper>
              <b>Horaires :</b>
              <Openings openings={openingHours}/>
            </AccordionWrapper>
            }
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