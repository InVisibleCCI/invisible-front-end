import { Merchant } from 'classes/Merchant';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { MerchantApiService } from 'services/MerchantApiService';




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
    { merchant && <p>{ merchant.name }</p>}
    
  </div>
}
