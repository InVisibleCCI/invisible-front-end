import { Merchant } from 'classes/Merchant';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { MerchantApiService } from 'services/MerchantApiService';
import { MerchantLogoWrapper, MerchantLogo, MerchantCardWrapper } from './styles';
import {Openings} from "./Openings"
  




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
  return <div>
    <MerchantCardWrapper>
      <MerchantLogoWrapper>
        <MerchantLogo src={merchant && merchant.logo.src} />
      </MerchantLogoWrapper>
      {merchant && <p>{merchant.name}</p>}
    </MerchantCardWrapper>
    {merchant && <div>
      <Openings openings={merchant.regular_openings}/>
      </div>
      }
    {merchant && <p>{merchant.facebook_url}</p>}
    {merchant && <p>{merchant.instagram_url}</p>}
    {merchant && <p>{merchant.twitter_url}</p>}
    {merchant && <p>{merchant.phone_number}</p>}
    {merchant && <p>{merchant.address.line1}</p>}
    {merchant && <p>{merchant.address.line2}</p>}
    {merchant && <p>{merchant.address.city}</p>}
    {merchant && <p>{merchant.address.zipcode}</p>}
  </div>
}
