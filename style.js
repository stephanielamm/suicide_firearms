var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": "light",
  "path": "http://www.amcharts.com/lib/3/",
    "addClassNames": true,
  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "balloon": {
    "borderThickness": 0,
    "borderAlpha": 0,
    "fillAlpha": 0,
    "horizontalPadding": 0,
    "verticalPadding": 0,
    "shadowAlpha": 0
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#CC0000"
    "rollOverOutlineColor": "#FFFFFF",
    "rollOverColor": "#CC0000",
    "alpha": 0.8,
    "unlistedAreasAlpha": 0.1,
    "balloonText": "[[title]] joined EU at [[customData]]"
  },
  }
} );
