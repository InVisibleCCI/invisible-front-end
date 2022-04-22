import React, { useState, useEffect } from "react";
import  { Map, TileLayer, Tooltip } from 'react-leaflet';
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { LeafletMapWrapper } from "./styles";
import { Event} from "../../classes/Event";

export interface EventProps {
  events: Event[],
}
export const LeafletMap: React.FunctionComponent<EventProps> = ({ events }) => {
  const [position, setPosition] = useState([48.5734053, 7.7521113])
  const [bounds, setBounds] = useState<any[]>();
  // const [currentStoreHover, setCurrentStoreHover] = useState<string>();

  useEffect(() => {
    if (!(events && events.length > 0)) { return }
    let boundsTmp: any[] = []
    events.forEach(event => {
      if (event.address.latitude != undefined && event.address.longitude != undefined) {
        boundsTmp.push([event.address.latitude, event.address.longitude])
      }
    })
    setBounds(boundsTmp)
    setPosition(boundsTmp[0])
  }, [events])
  //
  // const whichMarker = (storeId) => {
  //   return storeId === currentStoreHover
  // }
  // const iconSelected = IconMapFactory.buildForIcon(60, 70, process.env.REACT_APP_IMAGES_FOLDER_URL + 'pinTicadySelect.png')
  // const iconTicady = IconMapFactory.buildForIcon(60, 70, process.env.REACT_APP_IMAGES_FOLDER_URL + 'pinTicady.png')
  //
  const ListMarkers = () => {
    return events.map(event => {
      if (!event.address.latitude || !event.address.longitude) { return }
      return (
        <Marker key={event.objectID} position={[event.address.latitude, event.address.longitude]}>
          <Tooltip className="tooltip-map">{event.name}</Tooltip>
        </Marker>
      )
    })
  }


  return (
    <LeafletMapWrapper>
      {/*{stores && bounds &&*/}
      {/*  <Map bounds={bounds} center={position} zoom={13}>*/}
      {/*    <TileLayer*/}
      {/*      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
      {/*      attribution="<a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>"*/}
      {/*    />*/}
          {/*<MarkerClusterGroup maxClusterRadius={60} >*/}
          {/*  {ListMarkers()}*/}
          {/*</MarkerClusterGroup>*/}
      {/*  </Map>*/}
      {/*}*/}
      <Map bounds={bounds} center={[48.5734053, 7.7521113]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <MarkerClusterGroup maxClusterRadius={60} >
            {ListMarkers()}
          </MarkerClusterGroup>
        {/*<Marker position={[48.5734053, 7.7521113]}>*/}
        {/*  <Popup>*/}
        {/*    A pretty CSS3 popup. <br /> Easily customizable.*/}
        {/*  </Popup>*/}
        {/*</Marker>*/}
      </Map>
    </LeafletMapWrapper>
  )
}