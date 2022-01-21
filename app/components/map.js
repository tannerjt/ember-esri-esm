import Component from '@glimmer/component';
import esriLoader from 'esri-loader';

export default class MapComponent extends Component {
  async renderMap() {
    const [Map, MapView] = await esriLoader.loadModules([
      'esri/Map',
      'esri/views/MapView',
    ]);
    const map = new Map({
      basemap: 'hybrid',
    });
    const view = new MapView({
      map: map,
      center: [-118, 34],
      zoom: 13,
      container: 'esri-loader-map',
    });
    console.log('View', view);
  }
}
