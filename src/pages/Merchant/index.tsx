import { Merchant } from 'classes/Merchant';
import SearchInput from 'components/SearchInput';
import { MapDivider } from 'pages/Search/components/DesktopResult/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GenericApiService } from 'services/GenericApiService';
import { MerchantApiService } from 'services/MerchantApiService';
import { MapAndEventsMerchant } from './MapAndEventsMerchant';
import { MerchantInfoCard } from './MerchantInfoCard';
import { MerchantPageWrapper } from './styles';

export const MerchantPage: React.FunctionComponent = () => {

  const { id } = useParams();
  const merchantService = new MerchantApiService()
  const [merchant, setMerchant] = useState<Merchant>();
  useEffect(() => {
    if (!id) {
      return
    }
    GenericApiService.setupAxios$.subscribe(setupOk => {
      if (setupOk) {
        merchantService.read(id).then(res => setMerchant(res));
      }
    })

  }, [])
  return <MerchantPageWrapper>
    <SearchInput />

    {merchant && <div className="container">
      <MerchantInfoCard merchant={merchant} />
      <MapDivider/>
      <MapAndEventsMerchant merchant={merchant}/>
    </div>}
  </MerchantPageWrapper>
}
