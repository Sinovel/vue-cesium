(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{Ayub:function(s,t,e){"use strict";e.r(t);var a={data:function(){return{modelUrl:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",distanceMeasuring:!1,areaMeasuring:!1,heightMeasuring:!1}},methods:{ready:function(s){s.Cesium;var t=s.viewer;this.cesiumInstance=s,t.scene.globe.depthTestAgainstTerrain=!0},toggle:function(s){this.$refs[s].measuring=!this.$refs[s].measuring},clear:function(){this.$refs.measureDistance.clear(),this.$refs.measureArea.clear(),this.$refs.measureHeight.clear()},activeEvt:function(s){this[s.type]=s.isActive},measureEvt:function(s){console.log(s)},readyPromise:function(s){this.cesiumInstance.viewer.zoomTo(s,new Cesium.HeadingPitchRange(0,-.5,2*s.boundingSphere.radius))}}},r=e("JFUb"),v=Object(r.a)(a,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("h1",[s._v("MeasureTool")]),s._v(" "),s._m(0),s._v(" "),e("h2",[s._v("Example")]),s._v(" "),e("h3",[s._v("Measuring distance, area, height")]),s._v(" "),e("h4",[s._v("Preview")]),s._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{attrs:{scene3DOnly:""},on:{ready:s.ready}},[e("vc-measure-distance",{ref:"measureDistance",on:{activeEvt:s.activeEvt,measureEvt:s.measureEvt}}),s._v(" "),e("vc-measure-area",{ref:"measureArea",attrs:{perPositionHeight:!0},on:{activeEvt:s.activeEvt,measureEvt:s.measureEvt}}),s._v(" "),e("vc-measure-height",{ref:"measureHeight",on:{activeEvt:s.activeEvt,measureEvt:s.measureEvt}}),s._v(" "),e("vc-primitive-3dtileset",{attrs:{url:s.modelUrl},on:{readyPromise:s.readyPromise}})],1),s._v(" "),e("div",{staticClass:"demo-tool"},[e("md-button",{staticClass:"md-raised md-accent",on:{click:function(t){return s.toggle("measureDistance")}}},[s._v(s._s(s.distanceMeasuring?"stop":"distance"))]),s._v(" "),e("md-button",{staticClass:"md-raised md-accent",on:{click:function(t){return s.toggle("measureArea")}}},[s._v(s._s(s.areaMeasuring?"stop":"area"))]),s._v(" "),e("md-button",{staticClass:"md-raised md-accent",on:{click:function(t){return s.toggle("measureHeight")}}},[s._v(s._s(s.heightMeasuring?"stop":"height"))]),s._v(" "),e("md-button",{staticClass:"md-raised md-accent",on:{click:s.clear}},[s._v("clear")])],1)],1)]],2),s._v(" "),e("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),e("h2",[s._v("Instance Properties")]),s._v(" "),e("h3",[s._v("measure-distance")]),s._v(" "),s._m(2),s._v(" "),e("hr"),s._v(" "),e("h3",[s._v("measure-area")]),s._v(" "),s._m(3),s._v(" "),e("hr"),s._v(" "),e("h3",[s._v("measure-height")]),s._v(" "),s._m(4),s._v(" "),e("hr"),s._v(" "),e("h3",[s._v("Label")]),s._v(" "),s._m(5),s._v(" "),e("h2",[s._v("Event")]),s._v(" "),s._m(6),s._v(" "),e("hr"),s._v(" "),e("h2",[s._v("Method")]),s._v(" "),s._m(7)],1)}),[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",[e("li",[s._v("The "),e("code",{pre:!0},[s._v("measure-distance")]),s._v(" component is used for distance measurement.")]),s._v(" "),e("li",[s._v("The "),e("code",{pre:!0},[s._v("measure-area")]),s._v(" component is used for area measurement.")]),s._v(" "),e("li",[s._v("The "),e("code",{pre:!0},[s._v("measure-height")]),s._v(" component is used for high measurement.")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scene3DOnly")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-measure-distance")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"measureDistance"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@activeEvt")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"activeEvt"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@measureEvt")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"measureEvt"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-measure-distance")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-measure-area")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"measureArea"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@activeEvt")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"activeEvt"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@measureEvt")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"measureEvt"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":perPositionHeight")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n      >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-measure-area")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-measure-height")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"measureHeight"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@activeEvt")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"activeEvt"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@measureEvt")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"measureEvt"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-measure-height")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-3dtileset")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelUrl"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@readyPromise")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"readyPromise"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-3dtileset")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"toggle('measureDistance')\"")]),s._v("\n        >")]),s._v("{{ distanceMeasuring ? 'stop' : 'distance' }}"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v("\n      >")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"toggle('measureArea')\"")]),s._v(">")]),s._v("{{ areaMeasuring ? 'stop' : 'area' }}"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"toggle('measureHeight')\"")]),s._v("\n        >")]),s._v("{{ heightMeasuring ? 'stop' : 'height' }}"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v("\n      >")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clear"')]),s._v(">")]),s._v("clear"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelUrl")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("distanceMeasuring")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("areaMeasuring")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("heightMeasuring")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        viewer.scene.globe.depthTestAgainstTerrain = "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      },\n      toggle(type) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs[type].measuring = !"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs[type].measuring\n      },\n      clear() {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.measureDistance.clear()\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.measureArea.clear()\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.measureHeight.clear()\n      },\n      activeEvt(_) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("[_.type] = _.isActive\n      },\n      measureEvt(result) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(result)\n      },\n      readyPromise(tileset) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { viewer } = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        viewer.zoomTo(tileset, "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.HeadingPitchRange("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-0.5")]),s._v(", tileset.boundingSphere.radius * "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2.0")]),s._v("))\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("type")]),s._v(" "),e("th",[s._v("default")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("mode")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("1")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Measurement mode, 0 continuous measurement, 1 measurement ends once.")])]),s._v(" "),e("tr",[e("td",[s._v("font")]),s._v(" "),e("td",[s._v("String")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("'100 20px SimSun'")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Specify the label CSS font.")])]),s._v(" "),e("tr",[e("td",[s._v("depthTest")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("false")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Specify whether label text and line objects are always displayed.")])]),s._v(" "),e("tr",[e("td",[s._v("arcType")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("1")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The type of line the polygon edges must follow.")])])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("type")]),s._v(" "),e("th",[s._v("default")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("perPositionHeight")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("true")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Whether the face uses the height of each point, if not, the surface is drawn to the ground. (But the area algorithm is not the calculated floor area).")])]),s._v(" "),e("tr",[e("td",[s._v("mode")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("1")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Measurement mode, 0 continuous measurement, 1 measurement ends once.")])]),s._v(" "),e("tr",[e("td",[s._v("font")]),s._v(" "),e("td",[s._v("String")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("'100 20px SimSun'")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Specify the area text. the label CSS font.")])]),s._v(" "),e("tr",[e("td",[s._v("depthTest")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("false")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Specify whether label text and line objects are always displayed.")])])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("type")]),s._v(" "),e("th",[s._v("default")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("mode")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("1")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Measurement mode, 0 continuous measurement, 1 measurement ends once.")])]),s._v(" "),e("tr",[e("td",[s._v("font")]),s._v(" "),e("td",[s._v("String")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("'100 20px SimSun'")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Specify the label CSS font.")])]),s._v(" "),e("tr",[e("td",[s._v("depthTest")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("false")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Specify whether label text and line objects are always displayed.")])])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("type")]),s._v(" "),e("th",[s._v("default")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("backgroundColor")]),s._v(" "),e("td",[s._v("String|Array|Object")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("'rgba(38, 38, 38, 0.85)'")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Gets or sets the background color of this label.")])]),s._v(" "),e("tr",[e("td",[s._v("fillColor")]),s._v(" "),e("td",[s._v("String|Array|Object")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("WHITE")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Gets or sets the fill color of this label.")])]),s._v(" "),e("tr",[e("td",[s._v("font")]),s._v(" "),e("td",[s._v("String")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("'100 20px SimSun'")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Gets or sets the font used to draw this label.")])]),s._v(" "),e("tr",[e("td",[s._v("labelStyle")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("2")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying the LabelStyle. "),e("strong",[s._v("FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2")])])]),s._v(" "),e("tr",[e("td",[s._v("outlineColor")]),s._v(" "),e("td",[s._v("String|Array|Object")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("'BLUE'")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Gets or sets the outline color of this label.")])]),s._v(" "),e("tr",[e("td",[s._v("outlineWidth")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("1")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Gets or sets the outline width of this label.")])]),s._v(" "),e("tr",[e("td",[s._v("pixelOffset")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("{x: 15, y: -20}")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Gets or sets the pixel offset in screen space from the origin of this label.")])]),s._v(" "),e("tr",[e("td",[s._v("showBackground")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("true")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Determines if a background behind this label will be shown.")])])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("parameter")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("activeEvt")]),s._v(" "),e("td",[s._v("{ type: String, isActive: Boolean }")]),s._v(" "),e("td",[s._v("Triggered when the measurement starts or stops, and the return measurement type includes"),e("code",{pre:!0},[s._v("'areaMeasuring'")]),s._v("、"),e("code",{pre:!0},[s._v("'distanceMeasuring'")]),s._v("、"),e("code",{pre:!0},[s._v("'heightMeasuring'")]),s._v(".")])]),s._v(" "),e("tr",[e("td",[s._v("measureEvt")]),s._v(" "),e("td",[s._v("{ polyline: Object, label: Object }")]),s._v(" "),e("td",[s._v("Triggered during the measurement process. Returns the result of the calculation, the text label object. You can get text label objects, custom text units, decimal points, and more.")])])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("parameter")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("clear")]),s._v(" "),e("td"),s._v(" "),e("td",[s._v("Clear the measurement result (and stop the measurement at the same time).")])])])])}],!1,null,null,null);t.default=v.exports},BDny:function(s,t,e){s.exports=e("Ayub")}}]);
//# sourceMappingURL=88.c077f192a6571f44527c.js.map