import L from 'leaflet';

// Factory for map icon building
export class IconMapFactory{
  /** Create a custom icon for map markers
   *
   * @param width
   * @param height
   * @param url
   *
   * @return L.Icon
   */
    public static buildForIcon(width, height, url){
        return new L.Icon({
            iconUrl: url,
            iconRetinaUrl:url,
            iconSize: new L.Point(width, height),
            className: 'leaflet-div-icon'
        });
    }
}