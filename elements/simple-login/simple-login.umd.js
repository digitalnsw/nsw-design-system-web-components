!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit"),require("@digitalnsw/simple-colors/simple-colors.js"),require("@digitalnsw/simple-progress/simple-progress.js"),require("@digitalnsw/simple-fields/lib/simple-fields-field.js")):"function"==typeof define&&define.amd?define(["exports","lit","@digitalnsw/simple-colors/simple-colors.js","@digitalnsw/simple-progress/simple-progress.js","@digitalnsw/simple-fields/lib/simple-fields-field.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).SimpleLogin={},e.lit,e.simpleColors_js)}(this,(function(e,n,t){"use strict";function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function u(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=a(e);if(n){var o=a(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return u(this,t)}}function c(e,n,t){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=a(e)););return e}(e,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(t):o.value}})(e,n,t||e)}function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function f(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var m,b,h=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(g,e);var t,r,s,u=p(g);function g(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,g),(e=u.call(this)).password="",e.username="",e.loading=!1,e.userInputLabel="User name",e.userInputErrMsg="User name required",e.passwordInputLabel="Password",e.passwordInputErrMsg="Password required",e.loginBtnText="Login",e}return t=g,s=[{key:"styles",get:function(){return[].concat(f(c(a(g),"styles",this)),[n.css(b||(b=d(["\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n\n        #loginform {\n          width: var(--login-form-width, 450px);\n          height: var(--login-form-height, auto);\n          --simple-camera-snap-color: var(--login-form-color, #36bed4);\n          --simple-camera-snap-error: var(--login-form-error, red);\n          --simple-camera-snap-background: var(--login-form-background, white);\n          --simple-camera-snap-border-radius: var(\n            --login-form-image-bnorder-radius,\n            100%\n          );\n          box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),\n            0 4px 22px 3px rgba(0, 0, 0, 0.12),\n            0 6px 7px -4px rgba(0, 0, 0, 0.4);\n        }\n\n        #loginformcontent {\n          padding: var(--login-form-padding, 48px);\n        }\n\n        #loginformcontent > * {\n          margin-top: var(\n            --login-form-margin-top,\n            var(--login-form-margin, 8px)\n          );\n          margin-bottom: var(\n            --login-form-margin-bottom,\n            var(--login-form-margin, 8px)\n          );\n        }\n\n        #loginbtn,\n        #buttons ::slotted(button) {\n          cursor: pointer;\n          width: var(--login-btn-width, auto);\n          margin: var(--login-btn-margin, 24px auto 0);\n          display: var(--login-btn-display, inline-flex);\n        }\n\n        #loginbtn[disabled] {\n          background-color: var(\n            --login-btn-disabled-background-color,\n            var(--simple-colors-default-theme-accent-12, #000000)\n          );\n        }\n\n        h1 {\n          margin: 0;\n        }\n\n        h2 {\n          margin: 0;\n        }\n\n        simple-progress {\n          width: 100%;\n        }\n\n        ::slotted(simple-login-avatar) {\n          margin: 0 auto;\n        }\n\n        #errormsg {\n          margin-top: 16px;\n          color: var(--login-error-label-color, var(--error-color));\n        }\n      "])))])}},{key:"properties",get:function(){return o(o({},c(a(g),"properties",this)),{},{title:String,subtitle:String,errorMsg:String,username:{type:String},password:{type:String},loading:{type:Boolean},userInputLabel:{type:String,attribute:"user-input-label"},userInputErrMsg:{type:String},passwordInputLabel:{type:String,attribute:"password-input-label"},passwordInputErrMsg:{type:String},loginBtnText:{type:String,attribute:"login-btn-text"}})}},{key:"tag",get:function(){return"simple-login"}}],(r=[{key:"render",value:function(){return n.html(m||(m=d([' <div id="loginform">\n      <simple-progress ?disabled="','"></simple-progress>\n      <div id="loginformcontent">\n        <h1>',"</h1>\n        <h2>",'</h2>\n        <div id="errormsg">','</div>\n        <slot></slot>\n        <simple-fields-field\n          id="userinput"\n          value="','"\n          @value-changed="','"\n          type="text"\n          ?disabled="','"\n          label="','"\n          required\n          error-message="','"\n        ></simple-fields-field>\n        <simple-fields-field\n          id="passinput"\n          required\n          value="','"\n          @value-changed="','"\n          ?disabled="','"\n          type="password"\n          label="','"\n          error-message="','"\n        ></simple-fields-field>\n        <button\n          @click="','"\n          ?disabled="','"\n          id="loginbtn"\n        >\n          ','\n        </button>\n        <span id="buttons"><slot name="buttons"></slot></span>\n      </div>\n    </div>'])),!this.loading,this.title,this.subtitle,this.errorMsg,this.username,this._usernameChanged,this.loading,this.userInputLabel,this.userInputErrMsg,this.password,this._passwordChanged,this.loading,this.passwordInputLabel,this.passwordInputErrMsg,this._login,this.loading,this.loginBtnText)}},{key:"updated",value:function(e){var n=this;c(a(g.prototype),"updated",this).call(this),e.forEach((function(e,t){["username","password"].includes(t)&&n.dispatchEvent(new CustomEvent("".concat(t,"-changed"),{detail:{value:n[t]}}))}))}},{key:"firstUpdated",value:function(e){var n=this;c(a(g.prototype),"firstUpdated",this)&&c(a(g.prototype),"firstUpdated",this).call(this,e),setTimeout((function(){n.shadowRoot.querySelector("#loginform").addEventListener("keypress",n._keyPressLogin.bind(n))}),0)}},{key:"_keyPressLogin",value:function(e){if(13==e.keyCode)return this._login(),!1}},{key:"_passwordChanged",value:function(e){this.password=e.detail.value}},{key:"_usernameChanged",value:function(e){this.username=e.detail.value}},{key:"_login",value:function(){this.shadowRoot.querySelector("#userinput").validate()&&this.shadowRoot.querySelector("#passinput").validate()&&this.dispatchEvent(new CustomEvent("simple-login-login",{cancelable:!0,bubbles:!0,composed:!0,detail:{u:this.shadowRoot.querySelector("#userinput").value,p:this.shadowRoot.querySelector("#passinput").value}}))}}])&&i(t.prototype,r),s&&i(t,s),g}(t.SimpleColors);customElements.define(h.tag,h),e.SimpleLogin=h,Object.defineProperty(e,"__esModule",{value:!0})}));
