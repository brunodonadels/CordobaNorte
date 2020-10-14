var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_ViviendaruralINDEC_3 = new ol.format.GeoJSON();
var features_ViviendaruralINDEC_3 = format_ViviendaruralINDEC_3.readFeatures(json_ViviendaruralINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendaruralINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendaruralINDEC_3.addFeatures(features_ViviendaruralINDEC_3);
var lyr_ViviendaruralINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendaruralINDEC_3, 
                style: style_ViviendaruralINDEC_3,
                interactive: true,
    title: 'Vivienda rural (INDEC)<br />\
    <img src="styles/legend/ViviendaruralINDEC_3_0.png" /> 900 - 2.500<br />\
    <img src="styles/legend/ViviendaruralINDEC_3_1.png" /> 2.501 - 4.000<br />\
    <img src="styles/legend/ViviendaruralINDEC_3_2.png" /> 4.001 - 6.500<br />\
    <img src="styles/legend/ViviendaruralINDEC_3_3.png" /> 6.501 - 9.000<br />\
    <img src="styles/legend/ViviendaruralINDEC_3_4.png" /> 9.001 - 15.000<br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> 2.800 - 12.000<br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 12.001 - 35.000<br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 35.001 - 70.000<br />\
    <img src="styles/legend/PEAINDEC_4_3.png" /> 70.001 - 150.000<br />\
    <img src="styles/legend/PEAINDEC_4_4.png" /> 150.001 o más<br />'
        });
var format_HectreasManMAGyP_5 = new ol.format.GeoJSON();
var features_HectreasManMAGyP_5 = format_HectreasManMAGyP_5.readFeatures(json_HectreasManMAGyP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasManMAGyP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasManMAGyP_5.addFeatures(features_HectreasManMAGyP_5);
var lyr_HectreasManMAGyP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasManMAGyP_5, 
                style: style_HectreasManMAGyP_5,
                interactive: true,
    title: 'Hectáreas Maní (MAGyP)<br />\
    <img src="styles/legend/HectreasManMAGyP_5_0.png" /> 0<br />\
    <img src="styles/legend/HectreasManMAGyP_5_1.png" /> 1 - 1.000<br />\
    <img src="styles/legend/HectreasManMAGyP_5_2.png" /> 1.001 - 3.500<br />\
    <img src="styles/legend/HectreasManMAGyP_5_3.png" /> 3.501 - 10.000<br />\
    <img src="styles/legend/HectreasManMAGyP_5_4.png" /> 10.001 o más<br />'
        });
var format_HectreasHortalizasINDEC_6 = new ol.format.GeoJSON();
var features_HectreasHortalizasINDEC_6 = format_HectreasHortalizasINDEC_6.readFeatures(json_HectreasHortalizasINDEC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasHortalizasINDEC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasHortalizasINDEC_6.addFeatures(features_HectreasHortalizasINDEC_6);
var lyr_HectreasHortalizasINDEC_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasHortalizasINDEC_6, 
                style: style_HectreasHortalizasINDEC_6,
                interactive: true,
    title: 'Hectáreas Hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_6_0.png" /> 0<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_6_1.png" /> 1 - 445<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_6_2.png" /> 446 - 1.400<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_6_3.png" /> 1.401 - 2.500<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_6_4.png" /> 2.501 o más<br />'
        });
var format_HectreasLegumbresINDEC_7 = new ol.format.GeoJSON();
var features_HectreasLegumbresINDEC_7 = format_HectreasLegumbresINDEC_7.readFeatures(json_HectreasLegumbresINDEC_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasLegumbresINDEC_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasLegumbresINDEC_7.addFeatures(features_HectreasLegumbresINDEC_7);
var lyr_HectreasLegumbresINDEC_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasLegumbresINDEC_7, 
                style: style_HectreasLegumbresINDEC_7,
                interactive: true,
    title: 'Hectáreas Legumbres (INDEC)<br />\
    <img src="styles/legend/HectreasLegumbresINDEC_7_0.png" /> 0<br />\
    <img src="styles/legend/HectreasLegumbresINDEC_7_1.png" /> 1 - 70<br />\
    <img src="styles/legend/HectreasLegumbresINDEC_7_2.png" /> 71 - 200<br />\
    <img src="styles/legend/HectreasLegumbresINDEC_7_3.png" /> 201 - 380<br />'
        });
var format_HectreasOlivosINDEC_8 = new ol.format.GeoJSON();
var features_HectreasOlivosINDEC_8 = format_HectreasOlivosINDEC_8.readFeatures(json_HectreasOlivosINDEC_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasOlivosINDEC_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasOlivosINDEC_8.addFeatures(features_HectreasOlivosINDEC_8);
var lyr_HectreasOlivosINDEC_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasOlivosINDEC_8, 
                style: style_HectreasOlivosINDEC_8,
                interactive: true,
    title: 'Hectáreas Olivos (INDEC)<br />\
    <img src="styles/legend/HectreasOlivosINDEC_8_0.png" /> 0<br />\
    <img src="styles/legend/HectreasOlivosINDEC_8_1.png" /> 1 - 30<br />\
    <img src="styles/legend/HectreasOlivosINDEC_8_2.png" /> 31 - 250<br />\
    <img src="styles/legend/HectreasOlivosINDEC_8_3.png" /> 251 - 2.000<br />'
        });
var format_HectreasmazMAGyP_9 = new ol.format.GeoJSON();
var features_HectreasmazMAGyP_9 = format_HectreasmazMAGyP_9.readFeatures(json_HectreasmazMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasmazMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasmazMAGyP_9.addFeatures(features_HectreasmazMAGyP_9);
var lyr_HectreasmazMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasmazMAGyP_9, 
                style: style_HectreasmazMAGyP_9,
                interactive: true,
    title: 'Hectáreas maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasmazMAGyP_9_0.png" /> 0<br />\
    <img src="styles/legend/HectreasmazMAGyP_9_1.png" /> 1.200 - 45.000<br />\
    <img src="styles/legend/HectreasmazMAGyP_9_2.png" /> 45.001 - 125.000<br />\
    <img src="styles/legend/HectreasmazMAGyP_9_3.png" /> 125.001 - 300.000<br />\
    <img src="styles/legend/HectreasmazMAGyP_9_4.png" /> 300.001 o más<br />'
        });
var format_HectreastrigoMAGyP_10 = new ol.format.GeoJSON();
var features_HectreastrigoMAGyP_10 = format_HectreastrigoMAGyP_10.readFeatures(json_HectreastrigoMAGyP_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreastrigoMAGyP_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreastrigoMAGyP_10.addFeatures(features_HectreastrigoMAGyP_10);
var lyr_HectreastrigoMAGyP_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreastrigoMAGyP_10, 
                style: style_HectreastrigoMAGyP_10,
                interactive: true,
    title: 'Hectáreas trigo (MAGyP)<br />\
    <img src="styles/legend/HectreastrigoMAGyP_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreastrigoMAGyP_10_1.png" /> 1 - 25.000<br />\
    <img src="styles/legend/HectreastrigoMAGyP_10_2.png" /> 25.001 - 85.000<br />\
    <img src="styles/legend/HectreastrigoMAGyP_10_3.png" /> 85.001 - 200.000<br />\
    <img src="styles/legend/HectreastrigoMAGyP_10_4.png" /> 200.001 o más<br />'
        });
var format_HectreasGirasolMAGyP_11 = new ol.format.GeoJSON();
var features_HectreasGirasolMAGyP_11 = format_HectreasGirasolMAGyP_11.readFeatures(json_HectreasGirasolMAGyP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasGirasolMAGyP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasGirasolMAGyP_11.addFeatures(features_HectreasGirasolMAGyP_11);
var lyr_HectreasGirasolMAGyP_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasGirasolMAGyP_11, 
                style: style_HectreasGirasolMAGyP_11,
                interactive: true,
    title: 'Hectáreas Girasol (MAGyP)<br />\
    <img src="styles/legend/HectreasGirasolMAGyP_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasGirasolMAGyP_11_1.png" /> 1 - 500<br />\
    <img src="styles/legend/HectreasGirasolMAGyP_11_2.png" /> 501 - 3.500<br />\
    <img src="styles/legend/HectreasGirasolMAGyP_11_3.png" /> 3.501 o más<br />'
        });
var format_HectreassojaMAGyP_12 = new ol.format.GeoJSON();
var features_HectreassojaMAGyP_12 = format_HectreassojaMAGyP_12.readFeatures(json_HectreassojaMAGyP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassojaMAGyP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassojaMAGyP_12.addFeatures(features_HectreassojaMAGyP_12);
var lyr_HectreassojaMAGyP_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassojaMAGyP_12, 
                style: style_HectreassojaMAGyP_12,
                interactive: true,
    title: 'Hectáreas soja (MAGyP)<br />\
    <img src="styles/legend/HectreassojaMAGyP_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreassojaMAGyP_12_1.png" /> 1.500 - 100.000<br />\
    <img src="styles/legend/HectreassojaMAGyP_12_2.png" /> 100.001 - 250.000<br />\
    <img src="styles/legend/HectreassojaMAGyP_12_3.png" /> 250.001 - 450.000<br />\
    <img src="styles/legend/HectreassojaMAGyP_12_4.png" /> 450.001 o más<br />'
        });
var format_CabezasporcinosMAGyP_13 = new ol.format.GeoJSON();
var features_CabezasporcinosMAGyP_13 = format_CabezasporcinosMAGyP_13.readFeatures(json_CabezasporcinosMAGyP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasporcinosMAGyP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasporcinosMAGyP_13.addFeatures(features_CabezasporcinosMAGyP_13);
var lyr_CabezasporcinosMAGyP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasporcinosMAGyP_13, 
                style: style_CabezasporcinosMAGyP_13,
                interactive: true,
    title: 'Cabezas porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_13_0.png" /> 800 - 7.000<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_13_1.png" /> 7.001 - 27.500<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_13_2.png" /> 27.501 - 62.500<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_13_3.png" /> 62.501 o más<br />'
        });
var format_CabezasdeovinosMAGyP_14 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_14 = format_CabezasdeovinosMAGyP_14.readFeatures(json_CabezasdeovinosMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_14.addFeatures(features_CabezasdeovinosMAGyP_14);
var lyr_CabezasdeovinosMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_14, 
                style: style_CabezasdeovinosMAGyP_14,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_14_0.png" /> 250 - 8.500<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_14_1.png" /> 8.501 - 16.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_14_2.png" /> 16.001 o más<br />'
        });
var format_CabezasdecaprinosMAGyP_15 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_15 = format_CabezasdecaprinosMAGyP_15.readFeatures(json_CabezasdecaprinosMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_15.addFeatures(features_CabezasdecaprinosMAGyP_15);
var lyr_CabezasdecaprinosMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_15, 
                style: style_CabezasdecaprinosMAGyP_15,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_15_0.png" /> 800 - 4.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_15_1.png" /> 4.501 - 10.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_15_2.png" /> 10.001 - 22.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_15_3.png" /> 22.501 o más<br />'
        });
var format_CabezasdebovinosMAGyP_16 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_16 = format_CabezasdebovinosMAGyP_16.readFeatures(json_CabezasdebovinosMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_16.addFeatures(features_CabezasdebovinosMAGyP_16);
var lyr_CabezasdebovinosMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_16, 
                style: style_CabezasdebovinosMAGyP_16,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_16_0.png" /> 100 - 50.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_16_1.png" /> 50.001 - 150.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_16_2.png" /> 150.001 - 300.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_16_3.png" /> 300.001 o más<br />'
        });
var format_LocalidadesCrdobaNorte_17 = new ol.format.GeoJSON();
var features_LocalidadesCrdobaNorte_17 = format_LocalidadesCrdobaNorte_17.readFeatures(json_LocalidadesCrdobaNorte_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesCrdobaNorte_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesCrdobaNorte_17.addFeatures(features_LocalidadesCrdobaNorte_17);
var lyr_LocalidadesCrdobaNorte_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesCrdobaNorte_17, 
                style: style_LocalidadesCrdobaNorte_17,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesCrdobaNorte_17.png" /> Localidades Córdoba Norte'
            });
var format_BERCrdobaNorte_18 = new ol.format.GeoJSON();
var features_BERCrdobaNorte_18 = format_BERCrdobaNorte_18.readFeatures(json_BERCrdobaNorte_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERCrdobaNorte_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERCrdobaNorte_18.addFeatures(features_BERCrdobaNorte_18);
var lyr_BERCrdobaNorte_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERCrdobaNorte_18, 
                style: style_BERCrdobaNorte_18,
                interactive: true,
                title: '<img src="styles/legend/BERCrdobaNorte_18.png" /> BER Córdoba Norte'
            });
var format_BERCrdobaNorte_19 = new ol.format.GeoJSON();
var features_BERCrdobaNorte_19 = format_BERCrdobaNorte_19.readFeatures(json_BERCrdobaNorte_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERCrdobaNorte_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERCrdobaNorte_19.addFeatures(features_BERCrdobaNorte_19);
var lyr_BERCrdobaNorte_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERCrdobaNorte_19, 
                style: style_BERCrdobaNorte_19,
                interactive: true,
                title: '<img src="styles/legend/BERCrdobaNorte_19.png" /> BER Córdoba Norte'
            });
var format_DelegacinCrdobaNorte_20 = new ol.format.GeoJSON();
var features_DelegacinCrdobaNorte_20 = format_DelegacinCrdobaNorte_20.readFeatures(json_DelegacinCrdobaNorte_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinCrdobaNorte_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinCrdobaNorte_20.addFeatures(features_DelegacinCrdobaNorte_20);
var lyr_DelegacinCrdobaNorte_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinCrdobaNorte_20, 
                style: style_DelegacinCrdobaNorte_20,
                interactive: true,
                title: '<img src="styles/legend/DelegacinCrdobaNorte_20.png" /> Delegación Córdoba Norte'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_ViviendaruralINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_HectreasManMAGyP_5.setVisible(true);lyr_HectreasHortalizasINDEC_6.setVisible(true);lyr_HectreasLegumbresINDEC_7.setVisible(true);lyr_HectreasOlivosINDEC_8.setVisible(true);lyr_HectreasmazMAGyP_9.setVisible(true);lyr_HectreastrigoMAGyP_10.setVisible(true);lyr_HectreasGirasolMAGyP_11.setVisible(true);lyr_HectreassojaMAGyP_12.setVisible(true);lyr_CabezasporcinosMAGyP_13.setVisible(true);lyr_CabezasdeovinosMAGyP_14.setVisible(true);lyr_CabezasdecaprinosMAGyP_15.setVisible(true);lyr_CabezasdebovinosMAGyP_16.setVisible(true);lyr_LocalidadesCrdobaNorte_17.setVisible(true);lyr_BERCrdobaNorte_18.setVisible(true);lyr_BERCrdobaNorte_19.setVisible(true);lyr_DelegacinCrdobaNorte_20.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_ViviendaruralINDEC_3,lyr_PEAINDEC_4,lyr_HectreasManMAGyP_5,lyr_HectreasHortalizasINDEC_6,lyr_HectreasLegumbresINDEC_7,lyr_HectreasOlivosINDEC_8,lyr_HectreasmazMAGyP_9,lyr_HectreastrigoMAGyP_10,lyr_HectreasGirasolMAGyP_11,lyr_HectreassojaMAGyP_12,lyr_CabezasporcinosMAGyP_13,lyr_CabezasdeovinosMAGyP_14,lyr_CabezasdecaprinosMAGyP_15,lyr_CabezasdebovinosMAGyP_16,lyr_LocalidadesCrdobaNorte_17,lyr_BERCrdobaNorte_18,lyr_BERCrdobaNorte_19,lyr_DelegacinCrdobaNorte_20];
lyr_Departamentos_2.set('fieldAliases', {'Depto:': 'Depto:', });
lyr_ViviendaruralINDEC_3.set('fieldAliases', {'Viv.Rur': 'Viv.Rur', });
lyr_PEAINDEC_4.set('fieldAliases', {'PEA': 'PEA', });
lyr_HectreasManMAGyP_5.set('fieldAliases', {'Mani': 'Mani', });
lyr_HectreasHortalizasINDEC_6.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasLegumbresINDEC_7.set('fieldAliases', {'Legumbres': 'Legumbres', });
lyr_HectreasOlivosINDEC_8.set('fieldAliases', {'Olivos': 'Olivos', });
lyr_HectreasmazMAGyP_9.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreastrigoMAGyP_10.set('fieldAliases', {'Trigo': 'Trigo', });
lyr_HectreasGirasolMAGyP_11.set('fieldAliases', {'Girasol': 'Girasol', });
lyr_HectreassojaMAGyP_12.set('fieldAliases', {'Soja': 'Soja', });
lyr_CabezasporcinosMAGyP_13.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasdeovinosMAGyP_14.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezasdecaprinosMAGyP_15.set('fieldAliases', {'caprinos': 'caprinos', });
lyr_CabezasdebovinosMAGyP_16.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_LocalidadesCrdobaNorte_17.set('fieldAliases', {'localidad': 'localidad', 'Poblacion': 'Poblacion', });
lyr_BERCrdobaNorte_18.set('fieldAliases', {'Num.': 'Num.', 'Delegacion': 'Delegacion', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin?': 'Admin?', });
lyr_BERCrdobaNorte_19.set('fieldAliases', {'Num.': 'Num.', 'Delegacion': 'Delegacion', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin?': 'Admin?', });
lyr_DelegacinCrdobaNorte_20.set('fieldAliases', {'localidad': 'localidad', });
lyr_Departamentos_2.set('fieldImages', {'Depto:': 'TextEdit', });
lyr_ViviendaruralINDEC_3.set('fieldImages', {'Viv.Rur': 'TextEdit', });
lyr_PEAINDEC_4.set('fieldImages', {'PEA': 'TextEdit', });
lyr_HectreasManMAGyP_5.set('fieldImages', {'Mani': 'TextEdit', });
lyr_HectreasHortalizasINDEC_6.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasLegumbresINDEC_7.set('fieldImages', {'Legumbres': 'TextEdit', });
lyr_HectreasOlivosINDEC_8.set('fieldImages', {'Olivos': 'TextEdit', });
lyr_HectreasmazMAGyP_9.set('fieldImages', {'Maiz': 'TextEdit', });
lyr_HectreastrigoMAGyP_10.set('fieldImages', {'Trigo': '', });
lyr_HectreasGirasolMAGyP_11.set('fieldImages', {'Girasol': 'TextEdit', });
lyr_HectreassojaMAGyP_12.set('fieldImages', {'Soja': 'TextEdit', });
lyr_CabezasporcinosMAGyP_13.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_14.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_15.set('fieldImages', {'caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_16.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_LocalidadesCrdobaNorte_17.set('fieldImages', {'localidad': 'TextEdit', 'Poblacion': '', });
lyr_BERCrdobaNorte_18.set('fieldImages', {'Num.': 'TextEdit', 'Delegacion': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin?': 'TextEdit', });
lyr_BERCrdobaNorte_19.set('fieldImages', {'Num.': '', 'Delegacion': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin?': '', });
lyr_DelegacinCrdobaNorte_20.set('fieldImages', {'localidad': 'TextEdit', });
lyr_Departamentos_2.set('fieldLabels', {'Depto:': 'inline label', });
lyr_ViviendaruralINDEC_3.set('fieldLabels', {'Viv.Rur': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'PEA': 'inline label', });
lyr_HectreasManMAGyP_5.set('fieldLabels', {'Mani': 'inline label', });
lyr_HectreasHortalizasINDEC_6.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasLegumbresINDEC_7.set('fieldLabels', {'Legumbres': 'inline label', });
lyr_HectreasOlivosINDEC_8.set('fieldLabels', {'Olivos': 'inline label', });
lyr_HectreasmazMAGyP_9.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreastrigoMAGyP_10.set('fieldLabels', {'Trigo': 'inline label', });
lyr_HectreasGirasolMAGyP_11.set('fieldLabels', {'Girasol': 'inline label', });
lyr_HectreassojaMAGyP_12.set('fieldLabels', {'Soja': 'inline label', });
lyr_CabezasporcinosMAGyP_13.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_14.set('fieldLabels', {'ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_15.set('fieldLabels', {'caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_16.set('fieldLabels', {'bovinos': 'inline label', });
lyr_LocalidadesCrdobaNorte_17.set('fieldLabels', {'localidad': 'inline label', 'Poblacion': 'inline label', });
lyr_BERCrdobaNorte_18.set('fieldLabels', {'Num.': 'inline label', 'Delegacion': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin?': 'inline label', });
lyr_BERCrdobaNorte_19.set('fieldLabels', {'Num.': 'inline label', 'Delegacion': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin?': 'inline label', });
lyr_DelegacinCrdobaNorte_20.set('fieldLabels', {'localidad': 'inline label', });
lyr_DelegacinCrdobaNorte_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});