!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).CodeSample={},e.lit)}(this,(function(e,n){"use strict";function t(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function a(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,n){return(o=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=s(e);if(n){var r=s(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return l(this,t)}}function u(e,n,t){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var a=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=s(e)););return e}(e,n);if(a){var r=Object.getOwnPropertyDescriptor(a,n);return r.get?r.get.call(t):r.value}})(e,n,t||e)}function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var g,p=n.html(g||(g=d(["\n  <style>\n    /*\n\n  Atom One Dark by Daniel Gamage\n  Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax\n\n  base:    #282c34\n  mono-1:  #abb2bf\n  mono-2:  #818896\n  mono-3:  #5c6370\n  hue-1:   #56b6c2\n  hue-2:   #61aeee\n  hue-3:   #c678dd\n  hue-4:   #98c379\n  hue-5:   #e06c75\n  hue-5-2: #be5046\n  hue-6:   #d19a66\n  hue-6-2: #e6c07b\n\n  */\n\n    .hljs {\n      display: block;\n      overflow-x: auto;\n      color: var(--code-sample-color, #abb2bf);\n      background: var(--code-sample-background, #282c34);\n    }\n\n    .hljs-comment,\n    .hljs-quote {\n      color: #5c6370;\n      font-style: italic;\n    }\n\n    .hljs-doctag,\n    .hljs-keyword,\n    .hljs-formula {\n      color: #c678dd;\n    }\n\n    .hljs-section,\n    .hljs-name,\n    .hljs-selector-tag,\n    .hljs-deletion,\n    .hljs-subst,\n    .hljs-tag {\n      color: #e06c75;\n    }\n\n    .hljs-literal {\n      color: #56b6c2;\n    }\n\n    .hljs-string,\n    .hljs-regexp,\n    .hljs-addition,\n    .hljs-attribute,\n    .hljs-meta-string {\n      color: #98c379;\n    }\n\n    .hljs-built_in,\n    .hljs-class .hljs-title {\n      color: #e6c07b;\n    }\n\n    .hljs-attr,\n    .hljs-variable,\n    .hljs-template-variable,\n    .hljs-type,\n    .hljs-selector-class,\n    .hljs-selector-attr,\n    .hljs-selector-pseudo,\n    .hljs-number {\n      color: #d19a66;\n    }\n\n    .hljs-symbol,\n    .hljs-bullet,\n    .hljs-link,\n    .hljs-meta,\n    .hljs-selector-id,\n    .hljs-title {\n      color: #61aeee;\n    }\n\n    .hljs-emphasis {\n      font-style: italic;\n    }\n\n    .hljs-strong {\n      font-weight: bold;\n    }\n\n    .hljs-link {\n      text-decoration: underline;\n    }\n\n    .hljs-params {\n      color: #e6c07b;\n    }\n  </style>\n"]))),h={},b=[],m=Object.keys,f={},E={},_=/^(no-?highlight|plain|text)$/i,v=/\blang(?:uage)?-([\w-]+)\b/i,y=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,N="</span>",O={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function R(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function C(e){return e.nodeName.toLowerCase()}function M(e,n){var t=e&&e.exec(n);return t&&0===t.index}function w(e){return _.test(e)}function S(e){var n,t={},a=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return a.forEach((function(e){for(n in e)t[n]=e[n]})),t}function x(e){var n=[];return function e(t,a){for(var r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?a+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:a,node:r}),a=e(r,a),C(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:r}));return a}(e,0),n}function T(e){function n(e){return e&&e.source||e}function t(t,a){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(a?"g":""))}!function a(r,i){if(!r.compiled){if(r.compiled=!0,r.keywords=r.keywords||r.beginKeywords,r.keywords){var s={},o=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach((function(e){var t=e.split("|");s[t[0]]=[n,t[1]?Number(t[1]):1]}))};"string"==typeof r.keywords?o("keyword",r.keywords):m(r.keywords).forEach((function(e){o(e,r.keywords[e])})),r.keywords=s}r.lexemesRe=t(r.lexemes||/\w+/,!0),i&&(r.beginKeywords&&(r.begin="\\b("+r.beginKeywords.split(" ").join("|")+")\\b"),r.begin||(r.begin=/\B|\b/),r.beginRe=t(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(r.endRe=t(r.end)),r.terminator_end=n(r.end)||"",r.endsWithParent&&i.terminator_end&&(r.terminator_end+=(r.end?"|":"")+i.terminator_end)),r.illegal&&(r.illegalRe=t(r.illegal)),null==r.relevance&&(r.relevance=1),r.contains||(r.contains=[]),r.contains=Array.prototype.concat.apply([],r.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return S(e,{variants:null},n)}))),e.cached_variants||e.endsWithParent&&[S(e)]||[e]}("self"===e?r:e)}))),r.contains.forEach((function(e){a(e,r)})),r.starts&&a(r.starts,i);var l=r.contains.map((function(e){return e.beginKeywords?"\\.?(?:"+e.begin+")\\.?":e.begin})).concat([r.terminator_end,r.illegal]).map(n).filter(Boolean);r.terminators=l.length?t(function(e,t){for(var a=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,i="",s=0;s<e.length;s++){var o=r,l=n(e[s]);for(s>0&&(i+=t);l.length>0;){var c=a.exec(l);if(null==c){i+=l;break}i+=l.substring(0,c.index),l=l.substring(c.index+c[0].length),"\\"==c[0][0]&&c[1]?i+="\\"+String(Number(c[1])+o):(i+=c[0],"("==c[0]&&r++)}}return i}(l,"|"),!0):{exec:function(){return null}}}}(e)}function A(e,n,t,a){function r(e){return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function i(e,n){if(M(e.endRe,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return i(e.parent,n)}function s(e,n){var t=d.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function o(e,n,t,a){var r='<span class="'+(a?"":O.classPrefix);return(r+=e+'">')+n+(t?"":N)}function l(){b+=null!=p.subLanguage?function(){var e="string"==typeof p.subLanguage;if(e&&!f[p.subLanguage])return R(m);var n=e?A(p.subLanguage,m,!0,h[p.subLanguage]):D(m,p.subLanguage.length?p.subLanguage:void 0);return p.relevance>0&&(E+=n.relevance),e&&(h[p.subLanguage]=n.top),o(n.language,n.value,!1,!0)}():function(){var e,n,t,a;if(!p.keywords)return R(m);for(a="",n=0,p.lexemesRe.lastIndex=0,t=p.lexemesRe.exec(m);t;)a+=R(m.substring(n,t.index)),(e=s(p,t))?(E+=e[1],a+=o(e[0],R(t[0]))):a+=R(t[0]),n=p.lexemesRe.lastIndex,t=p.lexemesRe.exec(m);return a+R(m.substr(n))}(),m=""}function c(e){b+=e.className?o(e.className,"",!0):"",p=Object.create(e,{parent:{value:p}})}function u(e,n){if(m+=e,null==n)return l(),0;var a=function(e,n){var t,a;for(t=0,a=n.contains.length;t<a;t++)if(M(n.contains[t].beginRe,e))return n.contains[t].endSameAsBegin&&(n.contains[t].endRe=r(n.contains[t].beginRe.exec(e)[0])),n.contains[t]}(n,p);if(a)return a.skip?m+=n:(a.excludeBegin&&(m+=n),l(),a.returnBegin||a.excludeBegin||(m=n)),c(a),a.returnBegin?0:n.length;var s=i(p,n);if(s){var o=p;o.skip?m+=n:(o.returnEnd||o.excludeEnd||(m+=n),l(),o.excludeEnd&&(m=n));do{p.className&&(b+=N),p.skip||p.subLanguage||(E+=p.relevance),p=p.parent}while(p!==s.parent);return s.starts&&(s.endSameAsBegin&&(s.starts.endRe=s.endRe),c(s.starts)),o.returnEnd?0:n.length}if(function(e,n){return!t&&M(n.illegalRe,e)}(n,p))throw new Error('Illegal lexeme "'+n+'" for mode "'+(p.className||"<unnamed>")+'"');return m+=n,n.length||1}var d=B(e);if(!d)throw new Error('Unknown language: "'+e+'"');T(d);var g,p=a||d,h={},b="";for(g=p;g!==d;g=g.parent)g.className&&(b=o(g.className,"",!0)+b);var m="",E=0;try{for(var _,v,y=0;p.terminators.lastIndex=y,_=p.terminators.exec(n);)v=u(n.substring(y,_.index),_[0]),y=_.index+v;for(u(n.substr(y)),g=p;g.parent;g=g.parent)g.className&&(b+=N);return{relevance:E,value:b,language:e,top:p}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:R(n)};throw e}}function D(e,n){n=n||O.languages||m(f);var t={relevance:0,value:R(e)},a=t;return n.filter(B).filter(I).forEach((function(n){var r=A(n,e,!1);r.language=n,r.relevance>a.relevance&&(a=r),r.relevance>t.relevance&&(a=t,t=r)})),a.language&&(t.second_best=a),t}function k(e){return O.tabReplace||O.useBR?e.replace(y,(function(e,n){return O.useBR&&"\n"===e?"<br>":O.tabReplace?n.replace(/\t/g,O.tabReplace):""})):e}function j(e){var n,t,a,r,i,s=function(e){var n,t,a,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=v.exec(i))return B(t[1])?t[1]:"no-highlight";for(n=0,a=(i=i.split(/\s+/)).length;n<a;n++)if(w(r=i[n])||B(r))return r}(e);w(s)||(O.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,i=n.textContent,a=s?A(s,i,!0):D(i),(t=x(n)).length&&((r=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=a.value,a.value=function(e,n,t){var a=0,r="",i=[];function s(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function o(e){r+="<"+C(e)+b.map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+R(e.value).replace('"',"&quot;")+'"'})).join("")+">"}function l(e){r+="</"+C(e)+">"}function c(e){("start"===e.event?o:l)(e.node)}for(;e.length||n.length;){var u=s();if(r+=R(t.substring(a,u[0].offset)),a=u[0].offset,u===e){i.reverse().forEach(l);do{c(u.splice(0,1)[0]),u=s()}while(u===e&&u.length&&u[0].offset===a);i.reverse().forEach(o)}else"start"===u[0].event?i.push(u[0].node):i.pop(),c(u.splice(0,1)[0])}return r+R(t.substr(a))}(t,x(r),i)),a.value=k(a.value),e.innerHTML=a.value,e.className=function(e,n,t){var a=n?E[n]:t,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),-1===e.indexOf(a)&&r.push(a),r.join(" ").trim()}(e.className,s,a.language),e.result={language:a.language,re:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance}))}function L(){if(!L.called){L.called=!0;var e=document.querySelectorAll("pre code");b.forEach.call(e,j)}}function B(e){return e=(e||"").toLowerCase(),f[e]||f[E[e]]}function I(e){var n=B(e);return n&&!n.disableAutodetect}h.highlight=A,h.highlightAuto=D,h.fixMarkup=k,h.highlightBlock=j,h.configure=function(e){O=S(O,e)},h.initHighlighting=L,h.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",L,!1),addEventListener("load",L,!1)},h.registerLanguage=function(e,n){var t=f[e]=n(h);t.aliases&&t.aliases.forEach((function(n){E[n]=e}))},h.listLanguages=function(){return m(f)},h.getLanguage=B,h.autoDetection=I,h.inherit=S,h.IDENT_RE="[a-zA-Z]\\w*",h.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",h.NUMBER_RE="\\b\\d+(\\.\\d+)?",h.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",h.BINARY_NUMBER_RE="\\b(0b[01]+)",h.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",h.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},h.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[h.BACKSLASH_ESCAPE]},h.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[h.BACKSLASH_ESCAPE]},h.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},h.COMMENT=function(e,n,t){var a=h.inherit({className:"comment",begin:e,end:n,contains:[]},t||{});return a.contains.push(h.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},h.C_LINE_COMMENT_MODE=h.COMMENT("//","$"),h.C_BLOCK_COMMENT_MODE=h.COMMENT("/\\*","\\*/"),h.HASH_COMMENT_MODE=h.COMMENT("#","$"),h.NUMBER_MODE={className:"number",begin:h.NUMBER_RE,relevance:0},h.C_NUMBER_MODE={className:"number",begin:h.C_NUMBER_RE,relevance:0},h.BINARY_NUMBER_MODE={className:"number",begin:h.BINARY_NUMBER_RE,relevance:0},h.CSS_NUMBER_MODE={className:"number",begin:h.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},h.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[h.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[h.BACKSLASH_ESCAPE]}]},h.TITLE_MODE={className:"title",begin:h.IDENT_RE,relevance:0},h.UNDERSCORE_TITLE_MODE={className:"title",begin:h.UNDERSCORE_IDENT_RE,relevance:0},h.METHOD_GUARD={begin:"\\.\\s*"+h.UNDERSCORE_IDENT_RE,relevance:0};var P,U,H=function(e){var n={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[n],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[n],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},n]}]}};h.registerLanguage("javascript",(function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},r={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},i={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,r]};r.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,a,e.REGEXP_MODE];var s=r.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:s}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:s}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}})),h.registerLanguage("json",(function(e){var n={literal:"true false null"},t=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],a={end:",",endsWithParent:!0,excludeEnd:!0,contains:t,keywords:n},r={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(a,{begin:/:/})],illegal:"\\S"},i={begin:"\\[",end:"\\]",contains:[e.inherit(a)],illegal:"\\S"};return t.splice(t.length,0,r,i),{contains:t,keywords:n,illegal:"\\S"}})),h.registerLanguage("css",(function(e){var n={begin:/[A-Z\_\.\-]+\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}]},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]};return{case_insensitive:!0,illegal:/[=\/|'\$]/,contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$"},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(font-face|page)",lexemes:"[a-z-]+",keywords:"font-face page"},{begin:"@",end:"[{;]",illegal:/:/,contains:[{className:"keyword",begin:/\w+/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,n]}]}})),h.registerLanguage("php",(function(e){var n={begin:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},t={className:"meta",begin:/<\?(php)?|\?>/},a={className:"string",contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:'b"',end:'"'},{begin:"b'",end:"'"},e.inherit(e.APOS_STRING_MODE,{illegal:null}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null})]},r={variants:[e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]};return{aliases:["php","php3","php4","php5","php6","php7"],case_insensitive:!0,keywords:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",contains:[e.HASH_COMMENT_MODE,e.COMMENT("//","$",{contains:[t]}),e.COMMENT("/\\*","\\*/",{contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),e.COMMENT("__halt_compiler.+?;",!1,{endsWithParent:!0,keywords:"__halt_compiler",lexemes:e.UNDERSCORE_IDENT_RE}),{className:"string",begin:/<<<['"]?\w+['"]?$/,end:/^\w+;?$/,contains:[e.BACKSLASH_ESCAPE,{className:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]}]},t,{className:"keyword",begin:/\$this\b/},n,{begin:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{className:"function",beginKeywords:"function",end:/[;{]/,excludeEnd:!0,illegal:"\\$|\\[|%",contains:[e.UNDERSCORE_TITLE_MODE,{className:"params",begin:"\\(",end:"\\)",contains:["self",n,e.C_BLOCK_COMMENT_MODE,a,r]}]},{className:"class",beginKeywords:"class interface",end:"{",excludeEnd:!0,illegal:/[:\(\$"]/,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",end:";",illegal:/[\.']/,contains:[e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"use",end:";",contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"=>"},a,r]}})),h.registerLanguage("yaml",(function(e){var n="true false yes no null",t="^[ \\-]*",a="[a-zA-Z_][\\w\\-]*",r={className:"attr",variants:[{begin:t+a+":"},{begin:'^[ \\-]*"'+a+'":'},{begin:"^[ \\-]*'"+a+"':"}]},i={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",variants:[{begin:"{{",end:"}}"},{begin:"%{",end:"}"}]}]};return{case_insensitive:!0,aliases:["yml","YAML","yaml"],contains:[r,{className:"meta",begin:"^---s*$",relevance:10},{className:"string",begin:"[\\|>] *$",returnEnd:!0,contains:i.contains,end:r.variants[0].begin},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!"+e.UNDERSCORE_IDENT_RE},{className:"type",begin:"!!"+e.UNDERSCORE_IDENT_RE},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"^ *-",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},e.C_NUMBER_MODE,i]}})),h.registerLanguage("xml",H),h.registerLanguage("html",H),window.hljs=h;var K=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&o(e,n)}(b,e);var t,i,l,g=c(b);function b(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,b),(e=g.call(this))._observer=null,e.theme=p,e.type="html",e.copyClipboardButton=!1,e}return t=b,l=[{key:"styles",get:function(){return[n.css(U||(U=d(["\n:host {\n  display: block;\n}\n\n:host([hidden]),\n[hidden] {\n  display: none;\n}\n\npre {\n  margin: 0;\n}\n\npre, code {\n  font-family: var(--code-sample-font-family, Operator Mono, Inconsolata, Roboto Mono, monaco, consolas, monospace);\n  font-size: var(--code-sample-font-size, 0.875rem);\n}\n\n.hljs {\n  padding: 0 1.25rem;\n  line-height: var(--code-sample-line-height, 1.3);\n}\n\n.demo:not(:empty) {\n  padding: var(--code-sample-demo-padding, 0 0 1.25rem);\n}\n\n#code-container {\n  position: relative;\n}\n\nbutton {\n  background: var(--code-sample-copy-button-bg-color, #e0e0e0);\n  border: none;\n  cursor: pointer;\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-transform: uppercase;\n}\n      "])))]}},{key:"haxProperties",get:function(){return{type:"element",canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Code sample",description:"A sample of code highlighted in the page",icon:"icons:code",color:"blue",groups:["Code","Development"],meta:{author:"elmsln"}},settings:{configure:[{property:"type",title:"Code highlighting",description:"Syntax highlighting to apply to the code area",inputMethod:"select",options:{javascript:"JavaScript",css:"CSS",html:"HTML",xml:"XML",json:"JSON data",php:"PHP",yaml:"YAML"}},{slot:"",slotWrapper:"template",slotAttributes:{"preserve-content":"preserve-content"},title:"Source",description:"The URL for this video.",inputMethod:"code-editor"},{property:"copyClipboardButton",title:"Copy to clipboard button",description:"button in top right that says copy to clipboard",inputMethod:"boolean"}],advanced:[]},saveOptions:{unsetAttributes:["theme"]},demoSchema:[{tag:"code-sample",content:'<template preserve-content="preserve-content">const great = "example";</template>',properties:{"copy-clipboard-button":"copy-clipboard-button"}}]}}},{key:"properties",get:function(){return a(a({},u(s(b),"properties",this)),{},{copyClipboardButton:{type:Boolean,attribute:"copy-clipboard-button"},theme:{type:Object},type:{type:String,reflect:!0}})}},{key:"tag",get:function(){return"code-sample"}}],(i=[{key:"render",value:function(){return n.html(P||(P=d(['\n\n<div id="theme"></div>\n<div id="demo" class="demo"></div>\n<slot></slot>\n<div id="code-container">\n  <button type="button" ?hidden="','" id="copyButton" title="Copy to clipboard" @click="','">Copy</button>\n  <pre id="code"></pre>\n</div>'])),!this.copyClipboardButton,this._copyToClipboard)}},{key:"haxHooks",value:function(){return{gizmoRegistration:"haxgizmoRegistration"}}},{key:"haxgizmoRegistration",value:function(e){var n=["javascript","js","json","css","php","yaml","xml","html"];for(var t in n)e.keyboardShortcuts["```"+n[t]]={tag:"code-sample",properties:{type:"js"===n[t]?"javascript":n[t]},content:'<template preserve-content="preserve-content">'.concat(this.getExample(n[t]),"</template>")};e.keyboardShortcuts["```"]=e.keyboardShortcuts["```html"]}},{key:"getExample",value:function(e){switch(e){case"css":return'\n  .the-cheet[is="tothelimit"] {\n    padding: 8px;\n    margin: 4px;\n  }\n';case"html":return'\n  <blockquote>\n  Dear Strongbad,\n  In 5th grade I have to watch a <em>lame hygiene movie</em>. I was thinking\n  you could make a <strong id="bad">better movie about hygiene</strong> than the cruddy school version.\n  Your friend,\n  John\n  </blockquote>\n';case"javascript":case"js":return'const everyBody = "to the limit";\n  let theCheat = true;\n  if (theCheat) {\n    return `is ${everyBody}`;\n  }';case"xml":return"<IAmLike>\n  <ComeOn>fhqwhgads</ComeOn>\n</IAmLike>";case"yaml":return"- CaracterList:\n  - Homestar Runner\n  - Strongbad\n  - The Cheat";case"php":return'  $MrTheCheat = "wins the big race";\nif ($MrTheCheat) {\n  return "HaVe A tRoPhY";\n}';case"json":return'{\n  "mainMenu": [\n    "Characters",\n    "Games",\n    "Toons",\n    "Email",\n    "Store"\n  ]\n}'}}},{key:"firstUpdated",value:function(e){var n=this;u(s(b.prototype),"firstUpdated",this)&&u(s(b.prototype),"firstUpdated",this).call(this,e),""==this.innerHTML&&(this.innerHTML='<template preserve-content="preserve-content">const great="example";</template>'),this._updateContent(),setTimeout((function(){n._themeChanged(n.theme)}),0)}},{key:"connectedCallback",value:function(){var e=this;u(s(b.prototype),"connectedCallback",this).call(this),this.querySelector("template")?(this._observer=new MutationObserver((function(n){e.shadowRoot&&e._updateContent()})),this._observer.observe(this,{attributes:!0,childList:!0,subtree:!0})):this.childNodes.length&&console.error("<code-sample>:","content must be provided inside a <template> tag")}},{key:"disconnectedCallback",value:function(){this._observer&&(this._observer.disconnect(),this._observer=null),u(s(b.prototype),"disconnectedCallback",this).call(this)}},{key:"updated",value:function(e){var n=this;e.forEach((function(e,t){"theme"==t&&n.shadowRoot&&n._themeChanged(n[t])}))}},{key:"_themeChanged",value:function(e){if(e){for(;this.shadowRoot.querySelector("#theme").childNodes>0;)this.shadowRoot.querySelector("#theme").removeChild(this.shadowRoot.querySelector("#theme").firstChild);n.render(e,this.shadowRoot.querySelector("#theme"))}}},{key:"_updateContent",value:function(){this._code&&this._code.parentNode&&this._code.parentNode.removeChild(this._code);var e=this._getCodeTemplate();e||((e=document.createElement("template")).setAttribute("preserve-content","preserve-content"),this.appendChild(e)),this._highlight(e.innerHTML)}},{key:"_getCodeTemplate",value:function(){var e=this.children;return[].filter.call(e,(function(e){return e.nodeType===Node.ELEMENT_NODE}))[0]}},{key:"_highlight",value:function(e){this._code=document.createElement("code"),this.type&&this._code.classList.add(this.type),this._code.innerHTML=this._entitize(this._cleanIndentation(e)),this.shadowRoot&&this.shadowRoot.querySelector("#code")&&(this.shadowRoot.querySelector("#code").appendChild(this._code),h.highlightBlock(this._code))}},{key:"_cleanIndentation",value:function(e){var n=e.match(/\s*\n[\t\s]*/);return e.replace(new RegExp(n,"g"),"\n")}},{key:"_entitize",value:function(e){return String(e).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/=""/g,"").replace(/=&gt;/g,"=>").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}},{key:"_copyToClipboard",value:function(e){var n=e.target,t=this._textAreaWithClonedContent();t.select();try{document.execCommand("copy",!1),n.textContent="Done"}catch(e){console.error(e),n.textContent="Error"}t.remove(),setTimeout((function(){n.textContent="Copy"}),1e3)}},{key:"_textAreaWithClonedContent",value:function(){var e=document.createElement("textarea");return document.body.appendChild(e),e.value=this._cleanIndentation(this._getCodeTemplate().innerHTML),e}}])&&r(t.prototype,i),l&&r(t,l),b}(n.LitElement);window.customElements.define(K.tag,K),e.CodeSample=K,Object.defineProperty(e,"__esModule",{value:!0})}));