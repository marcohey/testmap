var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.250000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UALSiteALL_1 = new ol.format.GeoJSON();
var features_UALSiteALL_1 = format_UALSiteALL_1.readFeatures(json_UALSiteALL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UALSiteALL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UALSiteALL_1.addFeatures(features_UALSiteALL_1);
var lyr_UALSiteALL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UALSiteALL_1, 
                style: style_UALSiteALL_1,
                popuplayertitle: 'UAL Site - ALL',
                interactive: true,
                title: '<img src="styles/legend/UALSiteALL_1.png" /> UAL Site - ALL'
            });
var format_UAL_Habitat_2 = new ol.format.GeoJSON();
var features_UAL_Habitat_2 = format_UAL_Habitat_2.readFeatures(json_UAL_Habitat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UAL_Habitat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UAL_Habitat_2.addFeatures(features_UAL_Habitat_2);
var lyr_UAL_Habitat_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UAL_Habitat_2, 
                style: style_UAL_Habitat_2,
                popuplayertitle: 'UAL_Habitat',
                interactive: true,
    title: 'UAL_Habitat<br />\
    <img src="styles/legend/UAL_Habitat_2_0.png" /> Urban - Developed land; sealed surface<br />\
    <img src="styles/legend/UAL_Habitat_2_1.png" /> Urban - Other green roof<br />\
    <img src="styles/legend/UAL_Habitat_2_2.png" /> Urban - Vegetated garden<br />\
    <img src="styles/legend/UAL_Habitat_2_3.png" /> Urban - Intensive green roof<br />\
    <img src="styles/legend/UAL_Habitat_2_4.png" /> Urban - Introduced shrub<br />\
    <img src="styles/legend/UAL_Habitat_2_5.png" /> Urban - Ground level planters<br />\
    <img src="styles/legend/UAL_Habitat_2_6.png" /> Other woodland; broadleaved<br />\
    <img src="styles/legend/UAL_Habitat_2_7.png" /> Modified grassland<br />\
    <img src="styles/legend/UAL_Habitat_2_8.png" /> <br />\
    <img src="styles/legend/UAL_Habitat_2_9.png" /> Sparsely vegetated land - Ruderal/Ephemeral<br />\
    <img src="styles/legend/UAL_Habitat_2_10.png" /> Urban - Artificial unvegetated, unsealed surface<br />' });
var format_UAL_HabitatBuildingFootprint_3 = new ol.format.GeoJSON();
var features_UAL_HabitatBuildingFootprint_3 = format_UAL_HabitatBuildingFootprint_3.readFeatures(json_UAL_HabitatBuildingFootprint_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UAL_HabitatBuildingFootprint_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UAL_HabitatBuildingFootprint_3.addFeatures(features_UAL_HabitatBuildingFootprint_3);
var lyr_UAL_HabitatBuildingFootprint_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UAL_HabitatBuildingFootprint_3, 
                style: style_UAL_HabitatBuildingFootprint_3,
                popuplayertitle: 'UAL_Habitat - Building Footprint',
                interactive: true,
                title: 'UAL_Habitat - Building Footprint'
            });
var format_UAL_Habitat_Supporting_Structures_4 = new ol.format.GeoJSON();
var features_UAL_Habitat_Supporting_Structures_4 = format_UAL_Habitat_Supporting_Structures_4.readFeatures(json_UAL_Habitat_Supporting_Structures_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UAL_Habitat_Supporting_Structures_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UAL_Habitat_Supporting_Structures_4.addFeatures(features_UAL_Habitat_Supporting_Structures_4);
var lyr_UAL_Habitat_Supporting_Structures_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UAL_Habitat_Supporting_Structures_4, 
                style: style_UAL_Habitat_Supporting_Structures_4,
                popuplayertitle: 'UAL_Habitat_Supporting_Structures',
                interactive: true,
    title: 'UAL_Habitat_Supporting_Structures<br />\
    <img src="styles/legend/UAL_Habitat_Supporting_Structures_4_0.png" /> Birdbox<br />\
    <img src="styles/legend/UAL_Habitat_Supporting_Structures_4_1.png" /> Bug Hotel<br />\
    <img src="styles/legend/UAL_Habitat_Supporting_Structures_4_2.png" /> Log Pile<br />' });
var format_UAL_Line_Habitat_5 = new ol.format.GeoJSON();
var features_UAL_Line_Habitat_5 = format_UAL_Line_Habitat_5.readFeatures(json_UAL_Line_Habitat_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UAL_Line_Habitat_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UAL_Line_Habitat_5.addFeatures(features_UAL_Line_Habitat_5);
var lyr_UAL_Line_Habitat_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UAL_Line_Habitat_5, 
                style: style_UAL_Line_Habitat_5,
                popuplayertitle: 'UAL_Line_Habitat',
                interactive: true,
    title: 'UAL_Line_Habitat<br />\
    <img src="styles/legend/UAL_Line_Habitat_5_0.png" /> Non-native and ornamental hedgerow<br />\
    <img src="styles/legend/UAL_Line_Habitat_5_1.png" /> Urban - Ground based green wall<br />\
    <img src="styles/legend/UAL_Line_Habitat_5_2.png" /> <br />\
    <img src="styles/legend/UAL_Line_Habitat_5_3.png" /> Urban - Ground level planters<br />' });
var format_Recommended_line_habitats_6 = new ol.format.GeoJSON();
var features_Recommended_line_habitats_6 = format_Recommended_line_habitats_6.readFeatures(json_Recommended_line_habitats_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recommended_line_habitats_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recommended_line_habitats_6.addFeatures(features_Recommended_line_habitats_6);
var lyr_Recommended_line_habitats_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Recommended_line_habitats_6, 
                style: style_Recommended_line_habitats_6,
                popuplayertitle: 'Recommended_line_habitats',
                interactive: true,
    title: 'Recommended_line_habitats<br />\
    <img src="styles/legend/Recommended_line_habitats_6_0.png" /> <br />\
    <img src="styles/legend/Recommended_line_habitats_6_1.png" /> Refreshed planter<br />\
    <img src="styles/legend/Recommended_line_habitats_6_2.png" /> Urban - ground based green wall<br />' });
var format_Recommended_area_habitats_7 = new ol.format.GeoJSON();
var features_Recommended_area_habitats_7 = format_Recommended_area_habitats_7.readFeatures(json_Recommended_area_habitats_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recommended_area_habitats_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recommended_area_habitats_7.addFeatures(features_Recommended_area_habitats_7);
var lyr_Recommended_area_habitats_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Recommended_area_habitats_7, 
                style: style_Recommended_area_habitats_7,
                popuplayertitle: 'Recommended_area_habitats',
                interactive: true,
    title: 'Recommended_area_habitats<br />\
    <img src="styles/legend/Recommended_area_habitats_7_0.png" /> <br />\
    <img src="styles/legend/Recommended_area_habitats_7_1.png" /> Ground level planter (refreshed)<br />\
    <img src="styles/legend/Recommended_area_habitats_7_2.png" /> Other green roof<br />\
    <img src="styles/legend/Recommended_area_habitats_7_3.png" /> Other neutral grassland (g3c)<br />\
    <img src="styles/legend/Recommended_area_habitats_7_4.png" /> Vegetated garden (refreshed)<br />\
    <img src="styles/legend/Recommended_area_habitats_7_5.png" /> Vegetated garden (new)<br />\
    <img src="styles/legend/Recommended_area_habitats_7_6.png" /> Other woodland; broadleaved<br />\
    <img src="styles/legend/Recommended_area_habitats_7_7.png" /> Mixed scrub<br />' });
var format_UAL_Trees_8 = new ol.format.GeoJSON();
var features_UAL_Trees_8 = format_UAL_Trees_8.readFeatures(json_UAL_Trees_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UAL_Trees_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UAL_Trees_8.addFeatures(features_UAL_Trees_8);
var lyr_UAL_Trees_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UAL_Trees_8, 
                style: style_UAL_Trees_8,
                popuplayertitle: 'UAL_Trees',
                interactive: true,
    title: 'UAL_Trees<br />\
    <img src="styles/legend/UAL_Trees_8_0.png" /> Large<br />\
    <img src="styles/legend/UAL_Trees_8_1.png" /> Medium<br />\
    <img src="styles/legend/UAL_Trees_8_2.png" /> Small<br />\
    <img src="styles/legend/UAL_Trees_8_3.png" /> Very Large<br />\
    <img src="styles/legend/UAL_Trees_8_4.png" /> <br />' });
var format_Recommended_supporting_structures_9 = new ol.format.GeoJSON();
var features_Recommended_supporting_structures_9 = format_Recommended_supporting_structures_9.readFeatures(json_Recommended_supporting_structures_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recommended_supporting_structures_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recommended_supporting_structures_9.addFeatures(features_Recommended_supporting_structures_9);
var lyr_Recommended_supporting_structures_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Recommended_supporting_structures_9, 
                style: style_Recommended_supporting_structures_9,
                popuplayertitle: 'Recommended_supporting_structures',
                interactive: true,
    title: 'Recommended_supporting_structures<br />\
    <img src="styles/legend/Recommended_supporting_structures_9_0.png" /> Removal<br />\
    <img src="styles/legend/Recommended_supporting_structures_9_1.png" /> Bat box<br />\
    <img src="styles/legend/Recommended_supporting_structures_9_2.png" /> Bird box<br />\
    <img src="styles/legend/Recommended_supporting_structures_9_3.png" /> Individual planter<br />\
    <img src="styles/legend/Recommended_supporting_structures_9_4.png" /> Insect-hotel<br />\
    <img src="styles/legend/Recommended_supporting_structures_9_5.png" /> Log pile<br />\
    <img src="styles/legend/Recommended_supporting_structures_9_6.png" /> Tree planting<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_UALSiteALL_1.setVisible(true);lyr_UAL_Habitat_2.setVisible(true);lyr_UAL_HabitatBuildingFootprint_3.setVisible(true);lyr_UAL_Habitat_Supporting_Structures_4.setVisible(true);lyr_UAL_Line_Habitat_5.setVisible(true);lyr_Recommended_line_habitats_6.setVisible(true);lyr_Recommended_area_habitats_7.setVisible(true);lyr_UAL_Trees_8.setVisible(true);lyr_Recommended_supporting_structures_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_UALSiteALL_1,lyr_UAL_Habitat_2,lyr_UAL_HabitatBuildingFootprint_3,lyr_UAL_Habitat_Supporting_Structures_4,lyr_UAL_Line_Habitat_5,lyr_Recommended_line_habitats_6,lyr_Recommended_area_habitats_7,lyr_UAL_Trees_8,lyr_Recommended_supporting_structures_9];
lyr_UALSiteALL_1.set('fieldAliases', {'id': 'id', 'site_name': 'site_name', 'school': 'school', 'type': 'type', 'Area': 'Area', });
lyr_UAL_Habitat_2.set('fieldAliases', {'BNG_Hab': 'BNG_Hab', 'Plant_stat': 'Plant_stat', 'Type_Name': 'Type_Name', 'Site': 'Site', 'Bldg_Ftprt': 'Bldg_Ftprt', 'UK_Hab_Cod': 'UK_Hab_Cod', 'Notes': 'Notes', 'Sec_Code': 'Sec_Code', 'Sec_Hab': 'Sec_Hab', 'UKHab_Hab': 'UKHab_Hab', 'Condition': 'Condition', 'area_m2': 'area_m2', 'area_ha': 'area_ha', });
lyr_UAL_HabitatBuildingFootprint_3.set('fieldAliases', {'BNG_Hab': 'BNG_Hab', 'Plant_stat': 'Plant_stat', 'Type_Name': 'Type_Name', 'Site': 'Site', 'Bldg_Ftprt': 'Bldg_Ftprt', 'UK_Hab_Cod': 'UK_Hab_Cod', 'Notes': 'Notes', 'Sec_Code': 'Sec_Code', 'Sec_Hab': 'Sec_Hab', 'UKHab_Hab': 'UKHab_Hab', 'Condition': 'Condition', 'area_m2': 'area_m2', 'area_ha': 'area_ha', });
lyr_UAL_Habitat_Supporting_Structures_4.set('fieldAliases', {'id': 'id', 'type': 'type', 'target_sp': 'target_sp', 'site': 'site', 'int_date': 'int_date', 'condition': 'condition', 'notes': 'notes', });
lyr_UAL_Line_Habitat_5.set('fieldAliases', {'BNG_Hab': 'BNG_Hab', 'UKHab_Code': 'UKHab_Code', 'UKHab_Name': 'UKHab_Name', 'Sec_Code': 'Sec_Code', 'Sec_Hab': 'Sec_Hab', 'Type_Name': 'Type_Name', 'Site': 'Site', 'Vert_Area': 'Vert_Area', 'Notes': 'Notes', 'Length_m': 'Length_m', });
lyr_Recommended_line_habitats_6.set('fieldAliases', {'id': 'id', 'BNG_Hab': 'BNG_Hab', 'UKHab_code': 'UKHab_code', 'UKHab_name': 'UKHab_name', 'Sec_code': 'Sec_code', 'Sec_hab': 'Sec_hab', 'Type_name': 'Type_name', 'Site': 'Site', 'Vert_area': 'Vert_area', 'Length-(m)': 'Length-(m)', 'Notes': 'Notes', 'New_UKHab': 'New_UKHab', 'New_code': 'New_code', 'N_sec_code': 'N_sec_code', });
lyr_Recommended_area_habitats_7.set('fieldAliases', {'id': 'id', 'BNG_Hab': 'BNG_Hab', 'UKHab_code': 'UKHab_code', 'UKHab_Hab': 'UKHab_Hab', 'Sec_code': 'Sec_code', 'Sec_Hab': 'Sec_Hab', 'Type_name': 'Type_name', 'Site': 'Site', 'Notes': 'Notes', 'New_UKHab': 'New_UKHab', 'New_code': 'New_code', 'N_sec_code': 'N_sec_code', 'area_m2': 'area_m2', 'area_ha': 'area_ha', });
lyr_UAL_Trees_8.set('fieldAliases', {'Type': 'Type', 'Site': 'Site', 'Trunk_Cir': 'Trunk_Cir', 'Cond_2025': 'Cond_2025', 'Species': 'Species', 'TPO': 'TPO', 'BNG_Size': 'BNG_Size', 'Tree_ID': 'Tree_ID', 'Notes': 'Notes', 'DBH': 'DBH', });
lyr_Recommended_supporting_structures_9.set('fieldAliases', {'id': 'id', 'type': 'type', 'target_spp': 'target_spp', 'site': 'site', 'Height-(m)': 'Height-(m)', 'Notes': 'Notes', 'Nestbox': 'Nestbox', });
lyr_UALSiteALL_1.set('fieldImages', {'id': 'TextEdit', 'site_name': 'TextEdit', 'school': 'TextEdit', 'type': 'TextEdit', 'Area': 'TextEdit', });
lyr_UAL_Habitat_2.set('fieldImages', {'BNG_Hab': 'TextEdit', 'Plant_stat': 'TextEdit', 'Type_Name': 'TextEdit', 'Site': 'TextEdit', 'Bldg_Ftprt': 'TextEdit', 'UK_Hab_Cod': 'TextEdit', 'Notes': 'TextEdit', 'Sec_Code': 'TextEdit', 'Sec_Hab': 'TextEdit', 'UKHab_Hab': 'TextEdit', 'Condition': 'TextEdit', 'area_m2': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_UAL_HabitatBuildingFootprint_3.set('fieldImages', {'BNG_Hab': 'TextEdit', 'Plant_stat': 'TextEdit', 'Type_Name': '', 'Site': 'TextEdit', 'Bldg_Ftprt': 'TextEdit', 'UK_Hab_Cod': '', 'Notes': '', 'Sec_Code': '', 'Sec_Hab': '', 'UKHab_Hab': '', 'Condition': '', 'area_m2': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_UAL_Habitat_Supporting_Structures_4.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'target_sp': 'TextEdit', 'site': 'TextEdit', 'int_date': 'TextEdit', 'condition': 'TextEdit', 'notes': 'TextEdit', });
lyr_UAL_Line_Habitat_5.set('fieldImages', {'BNG_Hab': 'TextEdit', 'UKHab_Code': 'TextEdit', 'UKHab_Name': 'TextEdit', 'Sec_Code': 'TextEdit', 'Sec_Hab': 'TextEdit', 'Type_Name': 'TextEdit', 'Site': 'TextEdit', 'Vert_Area': 'TextEdit', 'Notes': 'TextEdit', 'Length_m': 'TextEdit', });
lyr_Recommended_line_habitats_6.set('fieldImages', {'id': 'TextEdit', 'BNG_Hab': 'TextEdit', 'UKHab_code': 'TextEdit', 'UKHab_name': 'TextEdit', 'Sec_code': 'TextEdit', 'Sec_hab': 'TextEdit', 'Type_name': 'TextEdit', 'Site': 'TextEdit', 'Vert_area': 'TextEdit', 'Length-(m)': 'TextEdit', 'Notes': 'TextEdit', 'New_UKHab': 'TextEdit', 'New_code': 'TextEdit', 'N_sec_code': 'TextEdit', });
lyr_Recommended_area_habitats_7.set('fieldImages', {'id': 'TextEdit', 'BNG_Hab': 'TextEdit', 'UKHab_code': 'TextEdit', 'UKHab_Hab': 'TextEdit', 'Sec_code': 'TextEdit', 'Sec_Hab': 'TextEdit', 'Type_name': 'TextEdit', 'Site': 'TextEdit', 'Notes': 'TextEdit', 'New_UKHab': 'TextEdit', 'New_code': 'TextEdit', 'N_sec_code': 'TextEdit', 'area_m2': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_UAL_Trees_8.set('fieldImages', {'Type': 'TextEdit', 'Site': 'TextEdit', 'Trunk_Cir': 'TextEdit', 'Cond_2025': 'TextEdit', 'Species': 'TextEdit', 'TPO': 'TextEdit', 'BNG_Size': 'TextEdit', 'Tree_ID': 'TextEdit', 'Notes': 'TextEdit', 'DBH': 'TextEdit', });
lyr_Recommended_supporting_structures_9.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'target_spp': 'TextEdit', 'site': 'TextEdit', 'Height-(m)': 'TextEdit', 'Notes': 'TextEdit', 'Nestbox': 'TextEdit', });
lyr_UALSiteALL_1.set('fieldLabels', {'id': 'no label', 'site_name': 'no label', 'school': 'no label', 'type': 'no label', 'Area': 'no label', });
lyr_UAL_Habitat_2.set('fieldLabels', {'BNG_Hab': 'no label', 'Plant_stat': 'no label', 'Type_Name': 'no label', 'Site': 'no label', 'Bldg_Ftprt': 'no label', 'UK_Hab_Cod': 'no label', 'Notes': 'no label', 'Sec_Code': 'no label', 'Sec_Hab': 'no label', 'UKHab_Hab': 'no label', 'Condition': 'no label', 'area_m2': 'no label', 'area_ha': 'no label', });
lyr_UAL_HabitatBuildingFootprint_3.set('fieldLabels', {'BNG_Hab': 'no label', 'Plant_stat': 'no label', 'Type_Name': 'no label', 'Site': 'no label', 'Bldg_Ftprt': 'no label', 'UK_Hab_Cod': 'no label', 'Notes': 'no label', 'Sec_Code': 'no label', 'Sec_Hab': 'no label', 'UKHab_Hab': 'no label', 'Condition': 'no label', 'area_m2': 'no label', 'area_ha': 'no label', });
lyr_UAL_Habitat_Supporting_Structures_4.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'target_sp': 'no label', 'site': 'no label', 'int_date': 'no label', 'condition': 'no label', 'notes': 'no label', });
lyr_UAL_Line_Habitat_5.set('fieldLabels', {'BNG_Hab': 'no label', 'UKHab_Code': 'no label', 'UKHab_Name': 'no label', 'Sec_Code': 'no label', 'Sec_Hab': 'no label', 'Type_Name': 'no label', 'Site': 'no label', 'Vert_Area': 'no label', 'Notes': 'no label', 'Length_m': 'no label', });
lyr_Recommended_line_habitats_6.set('fieldLabels', {'id': 'no label', 'BNG_Hab': 'no label', 'UKHab_code': 'no label', 'UKHab_name': 'no label', 'Sec_code': 'no label', 'Sec_hab': 'no label', 'Type_name': 'no label', 'Site': 'no label', 'Vert_area': 'no label', 'Length-(m)': 'no label', 'Notes': 'no label', 'New_UKHab': 'no label', 'New_code': 'no label', 'N_sec_code': 'no label', });
lyr_Recommended_area_habitats_7.set('fieldLabels', {'id': 'no label', 'BNG_Hab': 'no label', 'UKHab_code': 'no label', 'UKHab_Hab': 'no label', 'Sec_code': 'no label', 'Sec_Hab': 'no label', 'Type_name': 'no label', 'Site': 'no label', 'Notes': 'no label', 'New_UKHab': 'no label', 'New_code': 'no label', 'N_sec_code': 'no label', 'area_m2': 'no label', 'area_ha': 'no label', });
lyr_UAL_Trees_8.set('fieldLabels', {'Type': 'no label', 'Site': 'no label', 'Trunk_Cir': 'no label', 'Cond_2025': 'no label', 'Species': 'no label', 'TPO': 'no label', 'BNG_Size': 'no label', 'Tree_ID': 'no label', 'Notes': 'no label', 'DBH': 'no label', });
lyr_Recommended_supporting_structures_9.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'target_spp': 'no label', 'site': 'no label', 'Height-(m)': 'no label', 'Notes': 'no label', 'Nestbox': 'no label', });
lyr_Recommended_supporting_structures_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});