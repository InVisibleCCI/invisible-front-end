import React from 'react';
import { ActivityContentWrapper, ActivityInfo, ActivityWrapper, CommentWrapper } from './styles';
import GalleriaItem from 'pages/Activity/component/GalleriaItem';
import Galleria from 'pages/Activity/component/Galleria';
import SearchInput from 'components/SearchInput';
import { ScrollTop } from 'primereact/scrolltop';
import { ScrollPanel } from 'primereact/scrollpanel';
import Card from 'components/Card';
import { useTranslation } from 'react-i18next';
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
import { colors } from 'utils/styles';
import ActivityCard from 'pages/Activity/component/ActivityCard';

interface Props {
}

const Activity: React.FunctionComponent<Props> = ({}) => {

  const { t } = useTranslation();

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