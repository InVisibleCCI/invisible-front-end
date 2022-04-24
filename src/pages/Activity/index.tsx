import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
import { NavigationTrackerTypeEnum } from 'classes/enums/NavigationTrackerTypeEnum';
import Card from 'components/Card';
import SearchInput from 'components/SearchInput';
import ActivityCard from 'pages/Activity/component/ActivityCard';
import Galleria from 'pages/Activity/component/Galleria';
import GalleriaItem, {GalleriaItemProps} from 'pages/Activity/component/GalleriaItem';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ScrollTop } from 'primereact/scrolltop';
import React, {JSXElementConstructor, ReactElement, useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { NavigationTrackerApiService } from 'services/NavigationTrackerApiService';
import { colors } from 'utils/styles';
import { ActivityContentWrapper, ActivityInfo, ActivityWrapper, CommentWrapper } from './styles';
import {EventApiService} from "../../services/EventApiService";
import { Event } from "../../classes/Event"
import CommentsCard from "./component/CommentsCard";

interface Props {
}

const Activity: React.FunctionComponent<Props> = ({ }) => {
  const eventService = new EventApiService()
  const [event, setEvent ] = useState<Event>();

  const { t } = useTranslation();
  const { id } = useParams();
  const trackerService = new NavigationTrackerApiService();

  useEffect(() => {
    if (!id) {
      return;
    }
    eventService.read(id).then(event => setEvent(event))
    trackerService.create({ type: NavigationTrackerTypeEnum.Event, event: id, merchant:null})
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
    <ActivityWrapper>
      <SearchInput />
      { event &&
      <ActivityContentWrapper>
        <Galleria>
          { ListGalleria(event) }
        </Galleria>
        <ScrollPanel>
          <ActivityInfo>
            <ActivityCard
              title={event.name}
              distance={event.address.city}
              description={event.description}
              review={event.average_mark}
              commentNumber={event.reviews_count}
            />

            <Card
              size={'medium'}
              color={colors.grey}
              title={
                <>
                  <h4>{event.merchant.name}</h4>
                </>
              }
              children={
                <>
                </>
              }
              footer={
                <AiFillStar />
              }
            />
            <CommentWrapper>
              {/*c'est pour moi ici*/}
              <CommentsCard reviews={event.reviews ?? []}/>
            </CommentWrapper>
          </ActivityInfo>
          <ScrollTop target="parent" icon="pi pi-arrow-up" />
        </ScrollPanel>
      </ActivityContentWrapper>
      }
    </ActivityWrapper>
  );
}

export default Activity;
