import React from 'react';
import {
  AccordionWrapper,
  BodyWrapper,
  FooterWrapper,
  MerchantCardWrapper,
  SocialNetworkWrapper,
  TitleWrapper
} from './styles';
import Card from 'components/Card';
import { colors } from 'utils/styles';
import { Image } from 'classes/Image';
import { RegularOpening } from 'classes/RegularOpening';
import { Openings } from 'pages/Merchant/Openings';
import { ProfilImageWrapper } from 'pages/Profil/InformationsUser/style';
import { SocialButton } from 'pages/Merchant/SocialButton';

interface Props {
  title: string,
  picture: Image,
  address: string,
  phone: string,
  openingHours?: RegularOpening[],
  instagram: string,
  twitter: string,
  facebook: string,
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
              <SocialButton link={instagram} icon={<i className="pi pi-instagram"></i>} />
              <SocialButton link={twitter} icon={<i className="pi pi-twitter"></i>} />
              <SocialButton link={facebook} icon={<i className="pi pi-facebook"></i>} />
            </SocialNetworkWrapper>
          </FooterWrapper>
          </>
        }
        />
    </MerchantCardWrapper>
  );
}

export default MerchantCard;