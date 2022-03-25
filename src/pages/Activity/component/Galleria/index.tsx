import React, { useState } from 'react';
import { GalleriaWrapper, Image } from './styles';
import { Galleria as PRGalleria } from 'primereact/galleria';
import { GalleriaItemProps, galleriaItemsFromElements } from 'pages/Activity/component/GalleriaItem';

interface Props {
  children: Array<React.ReactElement<GalleriaItemProps>>
}

const Galleria: React.FunctionComponent<Props> = ({ children }) => {

  const [images, setImages] = useState(
    children
  );

  return (
    <GalleriaWrapper>
      <PRGalleria
        value={galleriaItemsFromElements(images)}
        showIndicators
        showThumbnails={false}
        circular
        autoPlay
        item={itemTemplate}
      />
    </GalleriaWrapper>
  );
}

const itemTemplate = (item) =>
  <Image src={item.src} alt={item.alt} />


export default Galleria;