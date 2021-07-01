!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@digitalnsw/simple-picker/simple-picker.js"),require("@digitalnsw/simple-icon/lib/simple-icon-lite.js"),require("@digitalnsw/simple-icon/lib/simple-icons.js"),require("@digitalnsw/simple-icon/lib/simple-iconset.js")):"function"==typeof define&&define.amd?define(["exports","@digitalnsw/simple-picker/simple-picker.js","@digitalnsw/simple-icon/lib/simple-icon-lite.js","@digitalnsw/simple-icon/lib/simple-icons.js","@digitalnsw/simple-icon/lib/simple-iconset.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SimpleIconPicker={},e.simplePicker_js,null,null,e.simpleIconset_js)}(this,(function(e,t,n,o,i){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p(e);if(t){var i=p(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return f(this,n)}}function h(e,t,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(u,e);var t,n,o,r=y(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=r.call(this)).hideOptionLabels=!0,e.allowNull=!1,e.icons=[],e.value=null,e.options=[],e.optionsPerRow=10,e}return t=u,o=[{key:"properties",get:function(){return l(l({},h(p(u),"properties",this)),{},{allowNull:{type:Boolean},icons:{type:Array},includeSets:{type:Array,attribute:"include-sets"},excludeSets:{type:Array,attribute:"exclude-sets"},exclude:{type:Array,attribute:"exclude"},value:{type:String,reflect:!0},optionsPerRow:{type:Number},__iconList:{type:Array}})}},{key:"tag",get:function(){return"simple-icon-picker"}}],(n=[{key:"updated",value:function(e){var t=this;h(p(u.prototype),"updated",this)&&h(p(u.prototype),"updated",this).call(this,e),e.forEach((function(e,n){["optionsPerRow","icons","allowNull","__iconList"].includes(n)&&(clearTimeout(t.__rebuild),t.__rebuild=setTimeout((function(){t._getOptions()}),0)),"value"==n&&t.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t[n]}}))}))}},{key:"firstUpdated",value:function(e){h(p(u.prototype),"firstUpdated",this)&&h(p(u.prototype),"firstUpdated",this).call(this,e)}},{key:"_getStoredIcons",value:function(){var e=i.SimpleIconsetStore&&i.SimpleIconsetStore.iconlist?i.SimpleIconsetStore.iconlist:[],t=!!(this.includeSets&&this.includeSets.length>0)&&(c(this.includeSets)!==c([])?JSON.parse(this.includeSets):this.includeSets),n=!!(this.excludeSets&&this.excludeSets.length>0)&&(c(this.excludeSets)!==c([])?JSON.parse(this.excludeSets):this.excludeSets),o=!!(this.exclude&&this.exclude.length>0)&&(c(this.exclude)!==c([])?JSON.parse(this.exclude):this.exclude);return(t||n||o)&&(e=e.filter((function(e){var i=e,r=e,l=!0;return i=i.replace(/:.*/,""),r.replace("icons:",""),o&&(o.includes(e)||o.includes("icons:".concat(r)))&&(l=!1),t&&!t.includes(i)&&(l=!1),n&&n.includes(i)&&(l=!1),l}))),e}},{key:"_getOptions",value:function(){var e="string"==typeof this.icons?JSON.parse(this.icons):this.icons,t=this.optionsPerRow;0===e.length&&(e=this._getStoredIcons());var n=!1===this.allowNull?[]:[[{alt:"null",value:null}]],o=!1===this.allowNull?0:1;t=Math.sqrt(e.length+o)<=this.optionsPerRow?Math.ceil(Math.sqrt(e.length+o)):this.optionsPerRow;for(var i=0;i<e.length;i++){var r=o+i,l=Math.floor(r/t),c=r-l*t;void 0!==n[l]&&null!==n[l]||(n[l]=[]),n[l][c]={alt:e[i],icon:e[i],value:e[i]}}this.options=n}},{key:"_setSelectedOption",value:function(){this.options.length>1&&h(p(u.prototype),"_setSelectedOption",this).call(this)}}])&&s(t.prototype,n),o&&s(t,o),u}(t.SimplePicker);window.customElements.define(d.tag,d),e.SimpleIconPicker=d,Object.defineProperty(e,"__esModule",{value:!0})}));
