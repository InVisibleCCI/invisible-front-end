import SearchInput from 'components/SearchInput';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionContext } from 'types/contexts/SessionContext';

interface Props {
}

const Main: React.FunctionComponent<Props> = () => {



  return <div>
    <SearchInput/>
  </div>

}


export default Main;