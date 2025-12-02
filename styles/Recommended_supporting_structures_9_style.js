var size = 0;
var placement = 'point';
function categories_Recommended_supporting_structures_9(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Removal':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.8 + size,
                                          points: 4,
                                          radius2: 0,
                                          angle: Math.PI / 4,
                                          displacement: [0, 0],
                                          stroke: new ol.style.Stroke({color: 'rgba(255,26,28,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),
                                          fill: new ol.style.Fill({color: 'rgba(228,148,106,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bat box':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [15, 15],
                  scale: 1.0,
                  anchor: [7.5, 7.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/embedded_3.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bird box':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [15, 15],
                  scale: 1.0,
                  anchor: [7.5, 7.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/embedded_4.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Individual planter':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.6 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,233,34,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(139,167,37,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Insect-hotel':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [15, 15],
                  scale: 1.0,
                  anchor: [7.5, 7.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/embedded_5.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Log pile':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [15, 15],
                  scale: 1.0,
                  anchor: [7.5, 7.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/embedded_6.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tree planting':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(140,255,209,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(69,116,40,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Recommended_supporting_structures_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("type");
    var labelFont = "11.700000000000001px \'HelveticaNeueLT Pro 55 Roman\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Nestbox") !== null) {
        labelText = String(feature.get("Nestbox"));
    }
    
    var style = categories_Recommended_supporting_structures_9(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
