import { NavigationTrackerTypeEnum } from 'classes/enums/NavigationTrackerTypeEnum';
import SearchInput from 'components/SearchInput';
import ActivityCard from 'pages/Activity/component/ActivityCard';
import Galleria from 'pages/Activity/component/Galleria';
import GalleriaItem, { GalleriaItemProps } from 'pages/Activity/component/GalleriaItem';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ScrollTop } from 'primereact/scrolltop';
import React, { JSXElementConstructor, ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavigationTrackerApiService } from 'services/NavigationTrackerApiService';
import {
  ActivityContentWrapper,
  ActivityInfo,
  ActivityPageWrapper,
  ActivityWrapper,
  CommentWrapper,
  SearchBarWrapper
} from './styles';
import { EventApiService } from '../../services/EventApiService';
import { Event } from '../../classes/Event'
import CommentsCard from './component/CommentsCard';
import MerchantCard from 'pages/Activity/component/MerchantCard';
import { GenericApiService } from 'services/GenericApiService';


interface Props {
}

const Activity: React.FunctionComponent<Props> = ({ }) => {
  const eventService = new EventApiService()
  const [event, setEvent] = useState<Event>();

  const { id } = useParams();
  const trackerService = new NavigationTrackerApiService();

  const roundAverageMark = (mark) => {
    return mark.toFixed(2)
  }

  useEffect(() => {
    if (!id) {
      return;
    }
    GenericApiService.setupAxios$.subscribe(res => {
      eventService.read(id).then(event => setEvent(event))
      trackerService.create({ type: NavigationTrackerTypeEnum.Event, event: id, merchant:null})
    })
  }, [])

  const ListGalleria = (event):ReactElement<GalleriaItemProps, string | JSXElementConstructor<any>>[] => {
      return event.images.map(image => {
        return (
          <GalleriaItem
            src={image.src}
            alt={image.alt_text}
          />
        )
      })

  }

  return (
    <ActivityPageWrapper>
      <SearchBarWrapper>
        <SearchInput />
      </SearchBarWrapper>
      <ActivityWrapper>
      { event &&
      <ActivityContentWrapper>
        <Galleria>
          { ListGalleria(event) }
        </Galleria>
        <ScrollPanel>
          <ActivityInfo>
            <ActivityCard
              title={event.name}
              distance={'XX'}
              description={event.description}
              review={roundAverageMark(event.average_mark)}
              commentNumber={event.reviews_count}
              difficulty={event.difficult}
              eventId={event.objectID}
            />
            <MerchantCard
              title={event.merchant.name}
              phone={event.merchant.phone_number}
              address={`
              ${event.merchant.address.line1}
              ${event.merchant.address.line2 ?? ''}
              `}
              picture={event.merchant.logo}
              instagram={event.merchant.instagram_url}
              twitter={event.merchant.twitter_url}
              facebook={event.merchant.facebook_url}
            />
            <CommentWrapper>
              <CommentsCard reviews={event.reviews ?? []}/>
            </CommentWrapper>
          </ActivityInfo>
          <ScrollTop target="parent" icon="pi pi-arrow-up" />
        </ScrollPanel>
      </ActivityContentWrapper>
      }
    </ActivityWrapper>
    </ActivityPageWrapper>
  );
}

export default Activity;
