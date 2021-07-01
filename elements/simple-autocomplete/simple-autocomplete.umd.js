!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@digitalnsw/simple-icon/lib/simple-icons.js"),require("@digitalnsw/simple-icon/lib/simple-icon-lite.js"),require("lit"),require("@digitalnsw/simple-filter/simple-filter.js"),require("@lrnwebcomponents/utils/utils.js"),require("@digitalnsw/simple-popover/simple-popover.js")):"function"==typeof define&&define.amd?define(["exports","@digitalnsw/simple-icon/lib/simple-icons.js","@digitalnsw/simple-icon/lib/simple-icon-lite.js","lit","@digitalnsw/simple-filter/simple-filter.js","@lrnwebcomponents/utils/utils.js","@digitalnsw/simple-popover/simple-popover.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SimpleAutocomplete={},null,null,e.lit,e.simpleFilter_js,e.utils_js)}(this,(function(e,t,n,i,o,r){"use strict";function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return a(this,n)}}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var h,m,f,v,g,b,y,w,E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(E,e);var t,n,o,a=u(E);function E(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,E),(e=a.call(this)).itemLimit=6,e.hideInput=!1,e.selectionPosition=!1,e.value="",e.opened=!1,e.addEventListener("mousedown",(function(t){e._clicking=!0})),e.addEventListener("mouseup",(function(t){e._clicking=!1})),e.addEventListener("focusout",(function(t){e._clicking?e._clicking=!1:(e.hideInput||(e.value=e.$input.innerText),e.opened=!1)})),e}return t=E,o=[{key:"styles",get:function(){return[i.css(w||(w=d(["\n        :host {\n          display: inline-flex;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        #input {\n          border: none;\n          min-width: 10px;\n          outline: none;\n          padding: 0 2px;\n        }\n        simple-popover {\n          max-width: var(--simple-autocomplete-popover-max-width, 50vw);\n          padding: 0;\n          --simple-popover-padding: 0px;\n          --simple-popover-border: none;\n          --simple-popover-border-color: #eeeeee;\n          --simple-popover-border-radius: 0;\n        }\n        ul {\n          margin: 0;\n          padding: 0;\n          border: var(--simple-autocomplete-ul-border, 1px solid #eeeeee);\n        }\n        li {\n          list-style: none;\n          padding: 0;\n          margin: 0;\n          display: block;\n        }\n        button {\n          font-size: var(--simple-autocomplete-font-size, 14px);\n          line-height: var(--simple-autocomplete-line-height, 1.5);\n          display: block;\n          border: none;\n          border-bottom: var(\n            --simple-autocomplete-border-bottom,\n            1px solid #eeeeee\n          );\n          padding: 6px 12px;\n          font-weight: 500;\n          width: 100%;\n          background-color: transparent;\n          max-height: var(\n            --simple-autocomplete-max-height,\n            54px\n          ); /* font * line-height * 2 + padding */\n          text-overflow: ellipsis;\n          overflow: hidden;\n          text-align: left;\n          color: var(--simple-autocomplete-color, #333333);\n        }\n        ul li:first-child button {\n          border-top: none;\n        }\n        button:hover,\n        button:active,\n        button:focus {\n          background-color: var(\n            --simple-autocomplete-button-hover-background-color,\n            #eeeeee\n          );\n          color: var(--simple-autocomplete-hover-color, #000000);\n          outline: none;\n        }\n        .no-results {\n          font-size: var(--simple-autocomplete-font-size, 16px);\n          padding: 4px 8px;\n        }\n        simple-icon-lite {\n          color: var(--simple-autocomplete-color, #333333);\n          --simple-icon-width: var(--simple-autocomplete-icon-size, 16px);\n          --simple-icon-height: var(--simple-autocomplete-icon-size, 16px);\n          margin-right: 2px;\n          vertical-align: middle;\n        }\n      "])))]}},{key:"properties",get:function(){return{opened:{type:Boolean,reflect:!0},hideInput:{type:Boolean,attribute:"hide-input"},selectionPosition:{type:Boolean,attribute:"selection-position"},value:{type:String},itemLimit:{type:Number,attribute:"item-limit"}}}},{key:"tag",get:function(){return"simple-autocomplete"}}],(n=[{key:"setValue",value:function(e){this.processInput(e),this.hideInput||(this.$input.innerText=e)}},{key:"processInput",value:function(e){this.opened=!0,this.value=e,this.like=this.value}},{key:"inputChanged",value:function(e){this.processInput(this.$input.innerText)}},{key:"render",value:function(){var e=this;return i.html(h||(h=d(["\n      ",'\n      <simple-popover\n        part="popover"\n        auto\n        part="simple-popover"\n        ?hidden="','"\n        position="bottom"\n        for="input"\n      >\n        ',"\n      </simple-popover>\n    "])),this.hideInput?"":i.html(m||(m=d(['<span\n            part="input"\n            id="input"\n            name="input"\n            @input="','"\n            contenteditable\n            @keydown="','"\n          ></span>'])),this.inputChanged,this.a11yInputKeys),!this.opened||0===this.filtered.length,this.filtered.length>0&&this.opened?i.html(f||(f=d([' <ul\n              part="list"\n              role="listbox"\n              @keydown="','"\n            >\n              ',"\n            </ul>"])),this.a11yListKeys,this.filtered.map((function(t,n){return i.html(v||(v=d(["",""])),n<e.itemLimit?i.html(g||(g=d(['<li\n                        role="option"\n                        part="list-item"\n                        value="','"\n                        data-index="','"\n                      >\n                        <button\n                          part="button"\n                          value="','"\n                          data-index="','"\n                          @click="','"\n                        >\n                          ',"","\n                        </button>\n                      </li>"])),t.value,n,t.value,n,e.itemSelect,t.icon?i.html(b||(b=d(['<simple-icon-lite\n                                icon="','"\n                              ></simple-icon-lite>'])),t.icon):"",t.label):"")}))):i.html(y||(y=d(['<div class="no-results" part="no-result">No results</div>']))))}},{key:"a11yListKeys",value:function(e){if(this.filtered.length>0&&this.opened)switch(e.key){case"ArrowDown":"BUTTON"===this.shadowRoot.activeElement.tagName&&this.shadowRoot.activeElement.parentNode.nextElementSibling&&this.shadowRoot.activeElement.parentNode.nextElementSibling.children&&(this.hardStopEvent(e),this.shadowRoot.activeElement.parentNode.nextElementSibling.children[0].focus());break;case"Escape":this.hardStopEvent(e),this.resetFocusOnInput();break;case"ArrowUp":"BUTTON"===this.shadowRoot.activeElement.tagName&&this.shadowRoot.activeElement.parentNode.previousElementSibling&&this.shadowRoot.activeElement.parentNode.previousElementSibling.children&&(this.hardStopEvent(e),this.shadowRoot.activeElement.parentNode.previousElementSibling.children[0].focus())}}},{key:"hardStopEvent",value:function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),e.detail.keyboardEvent&&(e.detail.keyboardEvent.preventDefault(),e.detail.keyboardEvent.stopPropagation(),e.detail.keyboardEvent.stopImmediatePropagation())}},{key:"a11yInputKeys",value:function(e){if(this.filtered.length>0&&this.opened)switch(e.key){case"ArrowDown":this.shadowRoot.querySelector("button")&&(this.hardStopEvent(e),this.shadowRoot.querySelector("button").focus());break;case"Escape":this.hardStopEvent(e),this.opened=!1;break;case"ArrowUp":this.shadowRoot.querySelectorAll("button").length&&(this.hardStopEvent(e),this.shadowRoot.querySelectorAll("button")[this.shadowRoot.querySelectorAll("button").length-1].focus())}}},{key:"firstUpdated",value:function(e){var t=this;c(s(E.prototype),"firstUpdated",this)&&c(s(E.prototype),"firstUpdated",this).call(this,e),!this.selectionPosition&&this.shadowRoot.querySelector("#input")&&(this.$input=this.shadowRoot.querySelector("#input"),this.shadowRoot.querySelector("simple-popover").target=this.$input,this.$input.addEventListener("focusin",(function(e){t.value&&!t._ignoreFocusOpen&&(t.opened=!0,t.hideInput||(t.value=t.$input.innerText,t.like=t.$input.innerText)),t._ignoreFocusOpen=!1})))}},{key:"getSelection",value:function(){if(this.$input){if(this.$input.getSelection)return this.$input.getSelection();if(void 0===this.$input.endOffset&&r.getRange(this.$input))return r.getRange(this.$input)}return window.getSelection()}},{key:"getRange",value:function(){var e=this.getSelection();return e.getRangeAt&&e.rangeCount?e.getRangeAt(0):e||void 0}},{key:"resetFocusOnInput",value:function(){if(this.opened=!1,this._ignoreFocusOpen=!0,void 0===this.$input.endOffset&&(this.$input.focus(),null!=this.$input.getAttribute("contenteditable"))){var e=document.createRange(),t=this.getSelection();e.setEnd(this.$input.childNodes[0],this.$input.innerText.length),e.collapse(!0),t.removeAllRanges(),t.addRange(e)}}},{key:"itemSelect",value:function(e){this.value=e.target.parentNode.getAttribute("value"),this.hideInput||(this.$input.innerText=this.value),this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:this.value}})),this._clicking=!1,this.resetFocusOnInput()}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){if("value"==n&&t.dispatchEvent(new CustomEvent("".concat(n,"-changed"),{detail:{value:t[n]}})),"opened"==n&&t.opened&&(t.shadowRoot.querySelector("simple-popover").updatePosition(),setTimeout((function(){t.selectionPosition&&t.getRange()&&(t.$input=t.getRange(),["TEXTAREA","INPUT"].includes(document.activeElement.tagName)&&(t.$input=document.activeElement),t.shadowRoot.querySelector("simple-popover").target=t.$input,t.shadowRoot.querySelector("simple-popover").updatePosition())}),0)),"items"==n&&t.items.length>0&&!t._ignore){t._ignore=!0;for(var i=0;i<t.items.length;i++)t.items[i].title||(t.items[i].title=Object.keys(t.items[i]).map((function(e){return"icon"!==e&&t.items[i][e]})).join(" ")),t.items[i].icon;t._ignore=!1}}))}}])&&l(t.prototype,n),o&&l(t,o),E}(o.SimpleFilterMixin(i.LitElement));customElements.define(E.tag,E),e.SimpleAutocomplete=E,Object.defineProperty(e,"__esModule",{value:!0})}));