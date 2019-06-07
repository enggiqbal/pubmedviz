/* jshint esversion: 6 */
import clusterData from '../map-data/cluster.geojson';
import clusterBoundaryData from '../map-data/cluster_boundary.geojson';
import edgeData from '../map-data/edges.geojson';
import nodeData from '../map-data/nodes.geojson';

var blankStyle = {
  "version": 8,
  "name": "Blank",
  "center": [
    0,
    0
  ],
  "zoom": 0,
  "sources": {},
  "sprite": "file://roblabs.com/sprite",
  "glyphs": "file://roblabs.com/fonts/mapbox/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "rgba(255,255,255,1)"
      }
    }
  ],
  "id": "blank"
};

// mapboxgl.accessToken = 'pk.eyJ1IjoiYmhlcnIyIiwiYSI6ImNqdm1wcmlhaTFmem80OGw2d3I3a2tnZGsifQ.ALfxSV65d_YJTGH5sVO4UA';
var map = new mapboxgl.Map({
    container: 'map',
    style: blankStyle,
    center: [-0, 0],
    zoom: 1,
    renderWorldCopies: false
});

map.on('load', function () {
    map.addLayer({
        "id": "cluster",
        "type": "fill",
        "source": { "type": "geojson", "data": clusterData },
        "layout": { },
        "paint": {
          "fill-color": ['get', 'fill'],
          "fill-opacity": 0.7,
          "fill-outline-color": ['get', 'stroke'],
        },
    });

    map.addLayer({
        "id": "cluster_boundary",
        "type": "line",
        "minzoom": 3,
        "source": { "type": "geojson", "data": clusterBoundaryData },
        "layout": { },
        "paint": {
          "line-color": ['get', 'stroke'],
          "line-width": 0.5,
          "line-opacity": 0.8
        },
    });

    map.addLayer({
        "id": "edges",
        "type": "line",
        "minzoom": 4,
        "source": { "type": "geojson", "data": edgeData },
        "layout": { },
        "paint": { 
          "line-color": ['get', 'stroke'],
          "line-width": 1,
          "line-opacity": 0.9
        },
    });

    map.addLayer({
        "id": "nodes",
        "type": "circle",
        "minzoom": 6,
        "source": { "type": "geojson", "data": nodeData },
        "layout": { },
        "paint": {
          "circle-color": "black",
          "circle-radius": 2
        },
    });
});