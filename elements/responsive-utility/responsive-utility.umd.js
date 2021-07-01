!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@juggle/resize-observer")):"function"==typeof define&&define.amd?define(["exports","lit","@juggle/resize-observer"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ResponsiveUtility={},e.lit,e.resizeObserver)}(this,(function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?s(e):t}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=r(e);if(t){var o=r(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return l(this,n)}}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}var a;window.ResponsiveUtility={},window.ResponsiveUtility.instance=null;var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(p,e);var l,f,d,v=u(p);function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=v.call(this)).details=[],null==window.ResponsiveUtility.instance&&(window.ResponsiveUtility.instance=s(e)),e}return l=p,d=[{key:"tag",get:function(){return"responsive-utility"}}],(f=[{key:"render",value:function(){return t.html(a||(e=[" <slot></slot> "],n||(n=e.slice(0)),a=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))));var e,n}},{key:"connectedCallback",value:function(){c(r(p.prototype),"connectedCallback",this).call(this),window.addEventListener("responsive-element",this.responiveElementEvent.bind(this)),window.addEventListener("delete-responsive-element",this.deleteResponiveElementEvent.bind(this))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("responsive-element",this.responiveElementEvent.bind(this)),window.removeEventListener("delete-responsive-element",this.deleteResponiveElementEvent.bind(this)),c(r(p.prototype),"disconnectedCallback",this).call(this)}},{key:"responiveElementEvent",value:function(e){var t={element:e.detail.element,attribute:e.detail.attribute||"responsive-size",sm:e.detail.sm||900,md:e.detail.md||1200,lg:e.detail.lg||1500,xl:e.detail.xl||1800,custom:e.detail.custom||"responsive-width"};t.observer=this._getObserver(t),t.observer.observe(t.element),this.details.push(t),window.ResponsiveUtility.setSize(t)}},{key:"_getObserver",value:function(e){return new n.ResizeObserver((function(t){return t.forEach((function(t){return window.ResponsiveUtility.setSize(e,t.contentBoxSize||t.borderBoxSize||t.contentRect||t.target?t.target.offsetWidth:0)}))}))}},{key:"deleteResponiveElementEvent",value:function(e){this.details=this.details.filter((function(t){return e.detail!==t}))}}])&&i(l.prototype,f),d&&i(l,d),p}(t.LitElement);window.customElements.define(f.tag,f),window.ResponsiveUtility.requestAvailability=function(){null==window.ResponsiveUtility.instance&&(window.ResponsiveUtility.instance=document.createElement("responsive-utility")),document.body.appendChild(window.ResponsiveUtility.instance)},window.ResponsiveUtility.setSize=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=e.element,r=e.attribute,o=e.custom;t=n<e.sm?"xs":n<e.md?"sm":n<e.lg?"md":n<e.xl?"lg":"xl",i.getAttribute(o)&&n===i.getAttribute(o)||i.setAttribute(o,n),i.getAttribute(r)&&t===i.getAttribute(r)||i.setAttribute(r,t)},e.ResponsiveUtility=f,Object.defineProperty(e,"__esModule",{value:!0})}));