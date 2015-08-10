(function() {
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Group({
                'title': 'Base maps',
                layers: [
                    new ol.layer.Tile({
                        title: 'OSM',
                        type: 'base',
                        visible: true,
                        source: new ol.source.OSM()
                    }),
                    new ol.layer.Tile({
                        title: 'Satellite',
                        type: 'base',
                        visible: false,
                        source: new ol.source.MapQuest({layer: 'sat'})
                    })
                ]
            }),
            new ol.layer.Group({
                title: 'Layers',
                layers: [
                    new ol.layer.Tile({
                        title: 'Clothing',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:clothing", 'TILED':true,},
                            serverType: 'geoserver'
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Places of Worship',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:worship", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),						
                    new ol.layer.Tile({
                        title: 'Museums',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:museums", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Libraries',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:libraries", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),		
                    new ol.layer.Tile({
                        title: 'Post Offices',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:post", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),		
                    new ol.layer.Tile({
                        title: 'Police Stations',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:police", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'English Classes',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:english", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),	 
                    new ol.layer.Tile({
                        title: 'Food Assistance',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:food_assistance", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),	    
                    new ol.layer.Tile({
                        title: 'General Assistance',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:general_assistance", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),	 
                    new ol.layer.Tile({
                        title: 'Hospitals',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:hospitals", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),	                                                                          
                    new ol.layer.Tile({
                        title: 'Grocery Stores',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:grocery_stores", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),	
                    new ol.layer.Tile({
                        title: 'Parks',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:parks", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),	
                     new ol.layer.Tile({
                        title: 'School Districts',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:school_districts", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),	    
                     new ol.layer.Tile({
                        title: 'Town Hall',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:townhalls", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),	    
                      new ol.layer.Tile({
                        title: 'Voting Districts',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:voting_precincts", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),	
                     new ol.layer.Tile({
                        title: 'Employment Assistance',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:work", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),	    
                     new ol.layer.Tile({
                        title: 'Zip Code',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:zip_code", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    }),	                                                                                                  					
                    new ol.layer.Tile({
                        title: 'Schools',
						visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://cedar-valley-pathfinder.org/geoserver/Pathfinder/wms',
                            params: {'LAYERS':"Pathfinder:schools", 'TILED':true},
                            serverType: 'geoserver'
                        })
                    })					
                ]
            })
        ],
        view: new ol.View({
            center: ol.proj.transform([-92.33, 42.50], 'EPSG:4326', 'EPSG:3857'),
            zoom: 12
        })
    });
	


    var layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Legend' // Optional label for button
    });
    map.addControl(layerSwitcher);

 map.on('singleclick', function(evt){
	var coord = evt.coordinate;
	spawnPopup(coord);
});

 function spawnPopup(coord){
   var popup = $("<div class='popup'></div>");
   
    var overlay = new ol.Overlay({
       element:popup
  });
    
 map.addOverlay(overlay);
 overlay.setPosition(coord);


var viewProjection = map.getView().getProjection();
var viewResolution = map.getView().getResolution();
var url = vectorLayer.getSource().getGetFeatureInfoUrl(coord, viewResolution, viewProjection, {
	'INFO_FORMAT' : 'application/json'
});
if (url) {
	console.log(url)
    $.getJSON(url, function(d) {
        console.log(d);
	})
} else {
    console.log("Uh Oh, something went wrong.");
}
}	
})();
