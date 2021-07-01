!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@digitalnsw/simple-picker/simple-picker.js"),require("@digitalnsw/simple-icon/lib/simple-icon-lite.js"),require("@digitalnsw/simple-icon/lib/simple-icons.js"),require("@digitalnsw/simple-icon/lib/simple-iconset.js")):"function"==typeof define&&define.amd?define(["exports","@digitalnsw/simple-picker/simple-picker.js","@digitalnsw/simple-icon/lib/simple-icon-lite.js","@digitalnsw/simple-icon/lib/simple-icons.js","@digitalnsw/simple-icon/lib/simple-iconset.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SimpleIconPicker={},e.simplePicker_js,null,null,e.simpleIconset_js)}(this,(function(e,t,i,n,o){"use strict";function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){u(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=p(e);if(t){var o=p(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return f(this,i)}}function y(e,t,i){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(i):o.value}})(e,t,i||e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(u,e);var t,i,n,r=d(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=r.call(this)).hideOptionLabels=!0,e.allowNull=!1,e.icons=[],e.value=null,e.options=[],e.optionsPerRow=10,e}return t=u,n=[{key:"properties",get:function(){return l(l({},y(p(u),"properties",this)),{},{allowNull:{type:Boolean},icons:{type:Array},includeSets:{type:Array,attribute:"include-sets"},excludeSets:{type:Array,attribute:"exclude-sets"},exclude:{type:Array,attribute:"exclude"},value:{type:String,reflect:!0},optionsPerRow:{type:Number},__iconList:{type:Array}})}},{key:"tag",get:function(){return"simple-icon-picker"}}],(i=[{key:"updated",value:function(e){var t=this;y(p(u.prototype),"updated",this)&&y(p(u.prototype),"updated",this).call(this,e),e.forEach((function(e,i){["optionsPerRow","icons","allowNull","__iconList"].includes(i)&&(clearTimeout(t.__rebuild),t.__rebuild=setTimeout((function(){t._getOptions()}),0)),"value"==i&&t.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t[i]}}))}))}},{key:"firstUpdated",value:function(e){y(p(u.prototype),"firstUpdated",this)&&y(p(u.prototype),"firstUpdated",this).call(this,e)}},{key:"_getStoredIcons",value:function(){var e=o.SimpleIconsetStore&&o.SimpleIconsetStore.iconlist?o.SimpleIconsetStore.iconlist:[],t=!!(this.includeSets&&this.includeSets.length>0)&&(c(this.includeSets)!==c([])?JSON.parse(this.includeSets):this.includeSets),i=!!(this.excludeSets&&this.excludeSets.length>0)&&(c(this.excludeSets)!==c([])?JSON.parse(this.excludeSets):this.excludeSets),n=!!(this.exclude&&this.exclude.length>0)&&(c(this.exclude)!==c([])?JSON.parse(this.exclude):this.exclude);return(t||i||n)&&(e=e.filter((function(e){var o=e,r=e,l=!0;return o=o.replace(/:.*/,""),r.replace("icons:",""),n&&(n.includes(e)||n.includes("icons:".concat(r)))&&(l=!1),t&&!t.includes(o)&&(l=!1),i&&i.includes(o)&&(l=!1),l}))),e}},{key:"_getOptions",value:function(){var e="string"==typeof this.icons?JSON.parse(this.icons):this.icons,t=this.optionsPerRow;0===e.length&&(e=this._getStoredIcons());var i=!1===this.allowNull?[]:[[{alt:"null",value:null}]],n=!1===this.allowNull?0:1;t=Math.sqrt(e.length+n)<=this.optionsPerRow?Math.ceil(Math.sqrt(e.length+n)):this.optionsPerRow;for(var o=0;o<e.length;o++){var r=n+o,l=Math.floor(r/t),c=r-l*t;void 0!==i[l]&&null!==i[l]||(i[l]=[]),i[l][c]={alt:e[o],icon:e[o],value:e[o]}}this.options=i}},{key:"_setSelectedOption",value:function(){this.options.length>1&&y(p(u.prototype),"_setSelectedOption",this).call(this)}}])&&s(t.prototype,i),n&&s(t,n),u}(t.SimplePicker);window.customElements.define(h.tag,h),e.SimpleIconPicker=h,Object.defineProperty(e,"__esModule",{value:!0})}));
