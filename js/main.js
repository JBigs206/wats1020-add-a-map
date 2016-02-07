/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/
$( document ).ready(function() {
	
// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)
	
	
$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
});
	
	
	

	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var mapLayers = {
  	"Satellite": satLayer,
    "Map View": drawLayer,
    "Open Street Maps": osm
};

var map = L.map('map-container').setView([46.852, -121.760], 10);

L.control.layers(mapLayers).addTo(map);
drawLayer.addTo(map);
	
	//pop-up for Mt. Rainier peak
var peak = L.marker([46.852, -121.760]).addTo(map);
peak.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");

	//adds visual of Cougar Rock campsite area
	var polygon = L.polygon([
	[46.764467,-121.799734],
	[46.769258,-121.793339],
	[46.765702,-121.793725]
	]).addTo(map);
	
	//makes pop-up for Cougar Rock appear 
$('#CougarBtn').click(function () {
 	var CougarRock = L.marker([46.766819,-121.794884], 8).addTo(map);
    CougarRock.bindPopup("<b>Cougar Rock</b><br>Campground for Cougar Rock area.");	
	});

	//makes pop-up for Goat Island appear 
$('#GoatBtn').click(function(){
	var Goat = L.marker([46.880288, -121.660795]).addTo(map);
	Goat.bindPopup("<b>Goat Island Mountain</b><br>Neighboring Mountain Goat Island.");
	});
	
	//makes pop-up for Observation Rock appear 
$('#ObRockBtn').click(function(){
	var obRock = L.marker([46.901603, -121.806685]).addTo(map);
	obRock.bindPopup("<b>Observation Rock</b><br>Remnant vent on the north side of Mt. Rainier.");
	});
	
});

	

