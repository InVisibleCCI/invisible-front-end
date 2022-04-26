import { Merchant } from 'classes/Merchant';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { MerchantApiService } from 'services/MerchantApiService';
import { MerchantLogoWrapper, MerchantLogo, MerchantCardWrapper, MerchantCardBottomWrapper } from './styles';
import { Openings } from "./Openings"
import { SocialButton } from './SocialButton';





export const MerchantPage: React.FunctionComponent = () => {


  const { t } = useTranslation();
  const { id } = useParams();
  const merchantService = new MerchantApiService()
  const [merchant, setMerchant] = useState<Merchant>();
  useEffect(() => {
    if (!id) {
      return
    }
    merchantService.read(id).then(res => setMerchant(res));

  }, [])
  return <React.Fragment> 
  {merchant && <div>
    <MerchantCardWrapper>
      <MerchantLogoWrapper>
        <MerchantLogo src={merchant && merchant.logo.src} />
      </MerchantLogoWrapper>
      {merchant && <p>{merchant.name}</p>}
    <SocialButton link={merchant.facebook_url} icon={<i className="pi pi-facebook"></i>}/>
    </MerchantCardWrapper>


    <MerchantCardBottomWrapper>

      {merchant && <div>
        <Openings openings={merchant.regular_openings} />
      </div>
      }
      <div>
        {merchant && <p>{merchant.phone_number}</p>}
        {merchant && <p>{merchant.address.line1}</p>}
        {merchant && <p>{merchant.address.line2}</p>}
        {merchant && <p>{merchant.address.city}</p>}
        {merchant && <p>{merchant.address.zipcode}</p>}
      </div>
    </MerchantCardBottomWrapper>

  </div>}
  </React.Fragment>
}
