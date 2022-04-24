import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
import { NavigationTrackerTypeEnum } from 'classes/enums/NavigationTrackerTypeEnum';
import Card from 'components/Card';
import SearchInput from 'components/SearchInput';
import ActivityCard from 'pages/Activity/component/ActivityCard';
import Galleria from 'pages/Activity/component/Galleria';
import GalleriaItem from 'pages/Activity/component/GalleriaItem';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ScrollTop } from 'primereact/scrolltop';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { NavigationTrackerApiService } from 'services/NavigationTrackerApiService';
import { colors } from 'utils/styles';
import { ActivityContentWrapper, ActivityInfo, ActivityWrapper, CommentWrapper } from './styles';

interface Props {
}

const Activity: React.FunctionComponent<Props> = ({ }) => {

  const { t } = useTranslation();
  const { id } = useParams();
  const trackerService = new NavigationTrackerApiService();

  useEffect(() => {
    trackerService.create({ type: NavigationTrackerTypeEnum.Event, event: id, merchant:null})
  }, [])

  return (
    <ActivityWrapper>
      <SearchInput />
      <ActivityContentWrapper>
        <Galleria>
          <GalleriaItem
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt="Image tirée de wikipédia"
          />

          <GalleriaItem
            src="https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js="
            alt="Image tirée de google image"
          />
        </Galleria>
        <ScrollPanel>
          <ActivityInfo>
            <ActivityCard
              title={"Journée au Spa"}
              distance={23}
              description={"Integer tincidunt ligula vel libero dictum egestas. Aenean eget diam a turpis tincidunt dictum. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra."}
              review={4.3}
              commentNumber={243}
            />

            <Card
              size={'medium'}
              color={colors.grey}
              title={
                <>
                  <h4>{"Spa & coton"}</h4>
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
            </CommentWrapper>
          </ActivityInfo>
          <ScrollTop target="parent" icon="pi pi-arrow-up" />
        </ScrollPanel>
      </ActivityContentWrapper>
    </ActivityWrapper>
  );
}

export default Activity;