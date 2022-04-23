import { HeaderInVisible } from 'components/HeaderInVisible';
import React, { useEffect, useState } from 'react';
import { EventApiService, IHomePageEvent } from 'services/EventApiService';
import { GenericApiService } from 'services/GenericApiService';
import { tagsNameIcon } from 'utils/tags';
import { useSessionContext } from 'utils/types/contexts/SessionContext';
import { ButtonTag } from './ButtonTag';
import { EventBand } from './EventBand';
import { MainWrapper } from './styles';

interface Props {
}

const Main: React.FunctionComponent<Props> = () => {
  const { currentGeolocation, currentUser } = useSessionContext();
  const eventService = new EventApiService()

  const [eventsHomePage, setEventsHomePage] = useState<IHomePageEvent>();


  useEffect(() => {
    GenericApiService.setupAxios$.subscribe(state => {
      if (state) {
        eventService.getEventForHomePage(currentGeolocation).then(res => setEventsHomePage(res))
      }
    })
  }, [currentGeolocation])

  return <MainWrapper>
    <div>
      <HeaderInVisible />
      <section className='container'>
        <div id="button-tags-container">
          {tagsNameIcon.map(tag => <ButtonTag name={tag.name} icon={tag.icon} />)}
        </div>
      </section>
      {eventsHomePage && <section className='container'>
        {currentUser && eventsHomePage.user_favorites.length > 0 && <EventBand title='Vous avez mis en favori' events={eventsHomePage.user_favorites} />}
        {eventsHomePage.near_location.length > 0 && <EventBand title='Les mieux notés près de chez vous' events={eventsHomePage.near_location} />}
        {/* TODO : implements trackers to populate homepage when no user and no location */}
        {/* <EventBand title='Les plus visités' events={eventsHomePage.user_favorites}/> */}
        {eventsHomePage.exclusives.length > 0 && <EventBand eventCardSize='large' title="Découvrez nos expériences exclusives" events={eventsHomePage.exclusives}/>}
      </section>}
    </div>
  </MainWrapper>

}


export default Main;