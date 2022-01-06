import Component from '@glimmer/component';
import { action } from '@ember/object';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

export default class MapComponent extends Component {
  renderMap() {
    const map = new Map({
      basemap: 'hybrid',
    });
    const view = new MapView({
      map: map,
      center: [-118, 34],
      zoom: 13,
      container: 'map',
    });
    console.log('View', view);
  }
}
