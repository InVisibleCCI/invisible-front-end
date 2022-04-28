import React, { useEffect, useState } from "react";
import  { Map, TileLayer, Tooltip } from 'react-leaflet';
import { Marker } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { Event } from "../../classes/Event";
import { IconMapFactory } from './IconMapFactory';
import { MapService } from "./MapService";
import { LeafletMapWrapper } from "./styles";

export interface EventProps {
  events: Event[],
}

/** Construct an Open street map with every marker at the position of the events
 *
 * @param events a list of events
 * @constructor
 */
export const LeafletMap: React.FunctionComponent<EventProps> = ({ events }) => {
  const [position, setPosition] = useState([48.5734053, 7.7521113])
  const [bounds, setBounds] = useState<any[]>();
  const [currentEventHover, setCurrentEventHover] = useState<string>();

  // Refresh the current event useState on render
  useEffect(() => { }, [currentEventHover])

  // Updated  by the current hovered event
  useEffect(() => {
    MapService.currentEventHoverSubject$.subscribe({
      next: (eventID) => setCurrentEventHover(eventID)
    })

  }, [])

  //  Count every event that doesn't have a lat and a lon and add them on the boundsTmp array
  useEffect(() => {
    if (!(events && events.length > 0)) { return }
    let boundsTmp: any[] = []
    events.forEach(event => {
      if (event.address.latitude != undefined && event.address.longitude != undefined) {
        boundsTmp.push([event.address.latitude, event.address.longitude]);
      }
    })
    setBounds(boundsTmp);
    setPosition(boundsTmp[0]);
  }, [events])

  // Update the icon of the marker on the map, from semi transparent to opaque
  const whichMarker = (eventID) => {
    return eventID === currentEventHover;
  }

  const iconSelected = IconMapFactory.buildForIcon(40, 70, "https://cdn.aquarius.irish/apps/files_sharing/publicpreview/zcMxttTxCGJwmf7?x=1905&y=393&a=true&file=pin_active.png&scalingup=0");
  const iconInVisible = IconMapFactory.buildForIcon(40, 70, "https://cdn.aquarius.irish/apps/files_sharing/publicpreview/FD28PGECmy2b7Dg?x=1905&y=393&a=true&file=pin.png&scalingup=0");

  // Return a list of Markers with
  const ListMarkers = () => {
    return events.map(event => {
      if (!event.address.latitude || !event.address.longitude) { return }
      return (
        <Marker key={event.objectID} icon={whichMarker(event.objectID) ? iconSelected : iconInVisible} position={[event.address.latitude, event.address.longitude]}>
          <Tooltip className="tooltip-map">{event.name}</Tooltip>
        </Marker>
      );
    });
  }


  return (
    <LeafletMapWrapper>
      <Map bounds={bounds} center={[48.5734053, 7.7521113]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup maxClusterRadius={60} >
          {ListMarkers()}
        </MarkerClusterGroup>
      </Map>
    </LeafletMapWrapper>
  );
  }