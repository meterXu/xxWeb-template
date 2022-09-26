<template>
  <div class="map-container">
    <div id="map"></div>
  </div>
</template>
<script>
import mapmost from '@mapmost/mapmost-webgl';
import {util} from '@dpark/s2-utils'
export default {
    name: 'TenantFileList',
    data() {
        return {
            map:{}
        }
    },
    mounted() {
      setTimeout(() => {
        this.init()
      }, 100);
    },
    methods: {
      init() {
        this.map = new mapmost.Map({
          container: 'map', // container id
          style: "http://58.210.9.134:8077/vt_style/china_blue.json",// style URL
          center: [118.84067183513423,32.019669420286],// starting position [lng, lat]
          zoom: 15.310035105070947,// starting zoom
          pitch: 59.48725112156901,// starting pitch
          bearing: -54.10626584095007,// starting bearing
        });
        let that = this
        this.map.on('load',function (){
          let models_obj = [{
            type: 'glb',
            url: "http://58.210.9.133/iplatform/files/NJ.glb"
          }]
          let options = {
            id: 'model_id',
            type: 'model',
            models: models_obj,
            center: [118.79271313933833+118.78353978759702  - 118.87136198703149,  32.03719066424799+32.06858044203- 32.034597466847714],
          };
          that.map.addLayer(options)
        })
      },
      mapZoomOut() {
        this.map.zoomOut()
      },
      mapZoomIn() {
        this.map.zoomIn()
      }
    },
    computed: {
    }
}
</script>
<style scoped>
  .map-container{
    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
  }
  .map-button {
    margin-right: 20px;
    margin-bottom: 20px;
  }
  #map {
    width: 100%;
    height: 100%;
  }
</style>
