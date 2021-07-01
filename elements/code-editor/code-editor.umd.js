!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@digitalnsw/code-editor/lib/code-pen-button.js"),require("lit"),require("@digitalnsw/schema-behaviors/schema-behaviors.js"),require("@digitalnsw/code-editor/lib/monaco-element/monaco-element.js"),require("@digitalnsw/utils/utils.js")):"function"==typeof define&&define.amd?define(["exports","@digitalnsw/code-editor/lib/code-pen-button.js","lit","@digitalnsw/schema-behaviors/schema-behaviors.js","@digitalnsw/code-editor/lib/monaco-element/monaco-element.js","@digitalnsw/utils/utils.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).CodeEditor={},null,e.lit,e.schemaBehaviors_js,null,e.utils_js)}(this,(function(e,t,n,o,r,i){"use strict";function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?h(e):t}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p(this,n)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var v,y,g;Element.prototype.replaceWith||(Element.prototype.replaceWith=i.ReplaceWithPolyfill),CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=i.ReplaceWithPolyfill),DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=i.ReplaceWithPolyfill);var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(d,e);var t,o,r,a=f(d);function d(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(e=a.call(this)).haxUIElement=!0,e.showCodePen=!1,e.readOnly=!1,e.theme="vs-dark",e.language="javascript",e.fontSize=16,e.wordWrap=!1,e.tabSize=2,e.autofocus=!1,e.hideLineNumbers=!1,e.focused=!1,window.WCGlobalBasePath?e.libPath=window.WCGlobalBasePath:e.libPath=e.pathFromUrl(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("code-editor.umd.js",document.baseURI).href))+"../../",e.libPath+="monaco-editor/min/vs",setTimeout((function(){e.addEventListener("monaco-element-ready",e.editorReady.bind(h(e)))}),0),e}return t=d,r=[{key:"styles",get:function(){return[n.css(g||(g=m(['\n        :host {\n          display: flex;\n          flex-direction: column;\n          font-family: unset;\n          align-items: stretch;\n          margin: var(--code-pen-margin, 16px 0);\n          width: calc(100% - 2px);\n          background-color: #1e1e1e;\n          color: #c6c6c6;\n          border: var(--code-editor-code-border);\n          border-radius: var(--code-editor-code-border-radius);\n          border: 1px solid var(--code-editor-label-color, #ddd);\n        }\n        :host([theme-colors="vs-dark"]) {\n          background-color: #1e1e1e;\n          color: #c6c6c6;\n          border: 1px solid var(--code-editor-label-color, #000);\n        }\n        :host([theme-colors="vs"]) {\n          background-color: #fffffe;\n          color: #000;\n          border: 1px solid var(--code-editor-label-color, #ddd);\n        }\n        :host([hidden]) {\n          display: none !important;\n        }\n        .code-pen-container:not([hidden]) {\n          width: calc(100% - 2 * var(--code-editor-margin, 12px));\n          display: flex;\n          height: 40px;\n          justify-content: flex-end;\n          align-items: center;\n          margin: var(--code-editor-margin, 12px);\n        }\n        .code-pen-container span {\n          display: inline-flex;\n          line-height: 16px;\n          font-size: 16px;\n          padding: 12px 0;\n        }\n        code-pen-button {\n          float: right;\n          height: 40px;\n          flex: 0 0 40px;\n        }\n        :host([theme-colors="vs"]) code-pen-button::part(button) {\n          filter: invert(1);\n        }\n        label {\n          color: var(--code-editor-label-color, #444);\n          transition: all 0.5s;\n          flex: 0 0 auto;\n          margin: var(--code-editor-margin, 12px);\n        }\n        :host([theme-colors="vs"]) label {\n          color: var(--code-editor-label-color, #444);\n        }\n        :host([theme-colors="vs-dark"]) label {\n          color: var(--code-editor-label-color, #bbb);\n        }\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        :host([focused]) label {\n          color: var(\n            --code-editor-float-label-active-color,\n            var(--code-editor-label-color, currentColor)\n          );\n        }\n\n        #loading {\n          padding: 0 74px;\n          flex: 1 1 auto;\n          overflow: hidden;\n          white-space: pre-wrap;\n          text-overflow: ellipsis;\n          font-family: monospace;\n        }\n        #codeeditor {\n          flex: 1 1 auto;\n          height: 100%;\n        }\n        #codeeditor[data-hidden] {\n          height: 0px;\n        }\n\n        :host([focused]) #codeeditor {\n          border: var(--code-editor-focus-code-border);\n        }\n      '])))]}},{key:"tag",get:function(){return"code-editor"}},{key:"properties",get:function(){return l(l({},b(s(d),"properties",this)),{},{libPath:{type:String},title:{type:String},showCodePen:{type:Boolean,reflect:!0,attribute:"show-code-pen"},readOnly:{type:Boolean,reflect:!0,attribute:"read-only"},codePenData:{type:Object,attribute:"code-pen-data"},editorValue:{type:String,attribute:"editor-value"},value:{type:String},theme:{type:String,reflect:!0,attribute:"theme"},mode:{type:String},language:{type:String},fontSize:{type:Number,attribute:"font-size"},wordWrap:{type:Boolean,attribute:"word-wrap"},autofocus:{type:Boolean,reflect:!0},hideLineNumbers:{type:Boolean,attribute:"hide-line-numbers"},focused:{type:Boolean,reflect:!0},tabSize:{type:Number,attribute:"tab-size"},ready:{type:Boolean}})}}],(o=[{key:"pathFromUrl",value:function(e){return e.substring(0,e.lastIndexOf("/")+1)}},{key:"render",value:function(){var e=this;return n.html(v||(v=m(['\n      <label for="codeeditor" ?hidden="','" part="label"\n        >','</label\n      >\n      <monaco-element\n        id="codeeditor"\n        ?data-hidden="','"\n        ?autofocus="','"\n        ?hide-line-numbers="','"\n        lib-path="','"\n        language="','"\n        tab-size="','"\n        theme="','"\n        @value-changed="','"\n        font-size="','"\n        ?word-wrap="','"\n        ?read-only="','"\n        @code-editor-focus="','"\n        @code-editor-blur="','"\n        @monaco-element-ready="','"\n        part="code"\n      >\n      </monaco-element>\n      <pre\n        id="loading"\n        ?hidden="','"\n        style="font-size:','px"\n        part="preview"\n      ><code>\n  ',"</code></pre>\n      <slot hidden></slot>\n      ","\n    "])),!this.title,this.title,!this.ready,this.autofocus,this.hideLineNumbers,this.libPath,this.language,this.tabSize,this.getTheme(this.theme),this._editorDataChanged,this.fontSize,this.wordWrap,this.readOnly,this._handleFocus,this._handleBlur,(function(t){return e.ready=!0}),this.ready,this.fontSize,this.placeholder,this.showCodePen?n.html(y||(y=m(['<div class="code-pen-container" part="code-pen">\n            <span>Check it out on code pen: </span\n            ><code-pen-button .data="','"></code-pen-button>\n          </div>'])),this.codePenData):"")}},{key:"getTheme",value:function(e){var t=window.matchMedia&&"auto"==e,n=t&&window.matchMedia("(prefers-color-scheme: dark)").matches,o=t&&window.matchMedia("(prefers-color-scheme: light)").matches,r=n?"vs-dark":o?"vs":e&&"auto"!=e?e:"vs-dark";return this.setAttribute("theme-colors",r),r}},{key:"placeholder",get:function(){return"".concat(this.editorValue||this.innerHTML).replace(/\s*<\/?template.*>\s*/gm,"")}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){"editorValue"==n&&t._editorValueChanged(t[n],e),"mode"==n&&t._modeChanged(t[n],e),"showCodePen"===n&&(t.dispatchEvent(new CustomEvent("show-code-pen-changed",{detail:{value:t[n]}})),t[n]&&window.customElements.get("code-pen-button")),"value"===n&&t.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t[n]}})),"focused"===n&&t.dispatchEvent(new CustomEvent("focused-changed",{detail:{focused:t[n]}})),["title","value"].includes(n)&&(t.codePenData=t._computeCodePenData(t.title,t.value))}))}},{key:"_computeCodePenData",value:function(e,t){return{title:e,html:t,head:'<script>window.WCGlobalCDNPath="https://cdn.webcomponents.psu.edu/cdn/";<\/script><script src="https://cdn.webcomponents.psu.edu/cdn/build.js"><\/script>'}}},{key:"_handleFocus",value:function(e){this.focused=!0}},{key:"_handleBlur",value:function(e){this.focused=!1}},{key:"_modeChanged",value:function(e){this.language=this.mode}},{key:"_editorDataChanged",value:function(e){this.value=e.detail}},{key:"updateEditorValue",value:function(){var e="",t=this.children;if(this.childNodes[0]&&"TEMPLATE"!==this.childNodes[0].tagName){if((t=this.childNodes).length>0)for(var n=0,o=t.length;n<o;n++)t[n].tagName?e+=t[n].outerHTML:e+=t[n].textContent}else t[0]&&(e=t[0].innerHTML);e&&("html"===this.language&&(e=i.formatHTML(e)),this.shadowRoot.querySelector("#codeeditor").value=e.trim())}},{key:"_editorValueChanged",value:function(e){e&&(this.shadowRoot.querySelector("#codeeditor").value=e)}},{key:"haxHooks",value:function(){return{preProcessNodeToContent:"haxpreProcessNodeToContent",activeElementChanged:"haxactiveElementChanged"}}},{key:"haxactiveElementChanged",value:function(e,t){if(!t){var n=this.getValueAsNode(e);e&&e.replaceWith(n),e=n}return e}},{key:"haxpreProcessNodeToContent",value:function(e){return e.editorValue=null,e.codePenData=null,e.value=null,e.removeAttribute("value"),e.removeAttribute("code-pen-data"),e}},{key:"getValueAsNode",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null==e&&(e=document.createElement("p")),this.value&&(e.innerHTML=i.formatHTML(this.value)),e.firstElementChild&&1===e.children.length&&e.firstElementChild.tagName===e.tagName?e.firstElementChild:e}},{key:"connectedCallback",value:function(){var e=this;b(s(d.prototype),"connectedCallback",this).call(this),this._observer=new MutationObserver((function(t){e.updateEditorValue()}))}},{key:"disconnectedCallback",value:function(){this._observer&&(this._observer.disconnect(),this._observer=null),b(s(d.prototype),"disconnectedCallback",this).call(this)}},{key:"editorReady",value:function(e){this.editorValue?this.shadowRoot.querySelector("#codeeditor").value=this.editorValue:this.updateEditorValue(),this._observer&&this._observer.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0})}}])&&c(t.prototype,o),r&&c(t,r),d}(o.SchemaBehaviors(n.LitElement));window.customElements.define(w.tag,w),e.CodeEditor=w,Object.defineProperty(e,"__esModule",{value:!0})}));