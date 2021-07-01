"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.SimpleColorsSuper = exports.SimpleColors = void 0;

var _litElement = require("lit-element/lit-element.js");

var _simpleColorsSharedStyles = require("@digitalnsw/simple-colors-shared-styles/simple-colors-shared-styles.js");

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n          :host([dark]) {\n            --simple-colors-default-theme-accent-1: #000000;\n            --simple-colors-default-theme-accent-2: #111111;\n            --simple-colors-default-theme-accent-3: #222222;\n            --simple-colors-default-theme-accent-4: #333333;\n            --simple-colors-default-theme-accent-5: #444444;\n            --simple-colors-default-theme-accent-6: #666666;\n            --simple-colors-default-theme-accent-7: #999999;\n            --simple-colors-default-theme-accent-8: #bbbbbb;\n            --simple-colors-default-theme-accent-9: #cccccc;\n            --simple-colors-default-theme-accent-10: #dddddd;\n            --simple-colors-default-theme-accent-11: #eeeeee;\n            --simple-colors-default-theme-accent-12: #ffffff;\n\n            --simple-colors-default-theme-grey-1: #000000;\n            --simple-colors-default-theme-grey-2: #111111;\n            --simple-colors-default-theme-grey-3: #222222;\n            --simple-colors-default-theme-grey-4: #333333;\n            --simple-colors-default-theme-grey-5: #444444;\n            --simple-colors-default-theme-grey-6: #666666;\n            --simple-colors-default-theme-grey-7: #999999;\n            --simple-colors-default-theme-grey-8: #bbbbbb;\n            --simple-colors-default-theme-grey-9: #cccccc;\n            --simple-colors-default-theme-grey-10: #dddddd;\n            --simple-colors-default-theme-grey-11: #eeeeee;\n            --simple-colors-default-theme-grey-12: #ffffff;\n\n            --simple-colors-default-theme-red-1: #3f0000;\n            --simple-colors-default-theme-red-2: #520000;\n            --simple-colors-default-theme-red-3: #670000;\n            --simple-colors-default-theme-red-4: #850000;\n            --simple-colors-default-theme-red-5: #ac0000;\n            --simple-colors-default-theme-red-6: #ee0000;\n            --simple-colors-default-theme-red-7: #ff2222;\n            --simple-colors-default-theme-red-8: #fd5151;\n            --simple-colors-default-theme-red-9: #ff7474;\n            --simple-colors-default-theme-red-10: #ff8f8f;\n            --simple-colors-default-theme-red-11: #ffaeae;\n            --simple-colors-default-theme-red-12: #ffdddd;\n\n            --simple-colors-default-theme-pink-1: #440019;\n            --simple-colors-default-theme-pink-2: #5a0020;\n            --simple-colors-default-theme-pink-3: #78002b;\n            --simple-colors-default-theme-pink-4: #980036;\n            --simple-colors-default-theme-pink-5: #b80042;\n            --simple-colors-default-theme-pink-6: #da004e;\n            --simple-colors-default-theme-pink-7: #ff3996;\n            --simple-colors-default-theme-pink-8: #fd60aa;\n            --simple-colors-default-theme-pink-9: #ff73b5;\n            --simple-colors-default-theme-pink-10: #ff87c0;\n            --simple-colors-default-theme-pink-11: #ffa5cf;\n            --simple-colors-default-theme-pink-12: #ffe6f1;\n\n            --simple-colors-default-theme-purple-1: #200025;\n            --simple-colors-default-theme-purple-2: #33003a;\n            --simple-colors-default-theme-purple-3: #490052;\n            --simple-colors-default-theme-purple-4: #6c0079;\n            --simple-colors-default-theme-purple-5: #8a009b;\n            --simple-colors-default-theme-purple-6: #a500ba;\n            --simple-colors-default-theme-purple-7: #e200ff;\n            --simple-colors-default-theme-purple-8: #ed61ff;\n            --simple-colors-default-theme-purple-9: #f07cff;\n            --simple-colors-default-theme-purple-10: #f394ff;\n            --simple-colors-default-theme-purple-11: #f4affd;\n            --simple-colors-default-theme-purple-12: #fce6ff;\n\n            --simple-colors-default-theme-deep-purple-1: #1d0033;\n            --simple-colors-default-theme-deep-purple-2: #2a0049;\n            --simple-colors-default-theme-deep-purple-3: #3a0063;\n            --simple-colors-default-theme-deep-purple-4: #4c0081;\n            --simple-colors-default-theme-deep-purple-5: #5d009f;\n            --simple-colors-default-theme-deep-purple-6: #7e00d8;\n            --simple-colors-default-theme-deep-purple-7: #a931ff;\n            --simple-colors-default-theme-deep-purple-8: #b44aff;\n            --simple-colors-default-theme-deep-purple-9: #bb63f9;\n            --simple-colors-default-theme-deep-purple-10: #c97eff;\n            --simple-colors-default-theme-deep-purple-11: #ddacff;\n            --simple-colors-default-theme-deep-purple-12: #f3e4ff;\n\n            --simple-colors-default-theme-indigo-1: #0a0030;\n            --simple-colors-default-theme-indigo-2: #100049;\n            --simple-colors-default-theme-indigo-3: #160063;\n            --simple-colors-default-theme-indigo-4: #20008c;\n            --simple-colors-default-theme-indigo-5: #2801b0;\n            --simple-colors-default-theme-indigo-6: #3a00ff;\n            --simple-colors-default-theme-indigo-7: #835fff;\n            --simple-colors-default-theme-indigo-8: #9373ff;\n            --simple-colors-default-theme-indigo-9: #9e82ff;\n            --simple-colors-default-theme-indigo-10: #af97ff;\n            --simple-colors-default-theme-indigo-11: #c3b2ff;\n            --simple-colors-default-theme-indigo-12: #e5ddff;\n\n            --simple-colors-default-theme-blue-1: #001333;\n            --simple-colors-default-theme-blue-2: #001947;\n            --simple-colors-default-theme-blue-3: #002569;\n            --simple-colors-default-theme-blue-4: #003494;\n            --simple-colors-default-theme-blue-5: #0041bb;\n            --simple-colors-default-theme-blue-6: #0059ff;\n            --simple-colors-default-theme-blue-7: #4083ff;\n            --simple-colors-default-theme-blue-8: #5892fd;\n            --simple-colors-default-theme-blue-9: #74a5ff;\n            --simple-colors-default-theme-blue-10: #95baff;\n            --simple-colors-default-theme-blue-11: #acc9ff;\n            --simple-colors-default-theme-blue-12: #e2ecff;\n\n            --simple-colors-default-theme-light-blue-1: #001b36;\n            --simple-colors-default-theme-light-blue-2: #002850;\n            --simple-colors-default-theme-light-blue-3: #003f7d;\n            --simple-colors-default-theme-light-blue-4: #0055a8;\n            --simple-colors-default-theme-light-blue-5: #0066ca;\n            --simple-colors-default-theme-light-blue-6: #007ffc;\n            --simple-colors-default-theme-light-blue-7: #41a1ff;\n            --simple-colors-default-theme-light-blue-8: #58adff;\n            --simple-colors-default-theme-light-blue-9: #65b3ff;\n            --simple-colors-default-theme-light-blue-10: #92c9ff;\n            --simple-colors-default-theme-light-blue-11: #a1d1ff;\n            --simple-colors-default-theme-light-blue-12: #cde8ff;\n\n            --simple-colors-default-theme-cyan-1: #001a20;\n            --simple-colors-default-theme-cyan-2: #002c38;\n            --simple-colors-default-theme-cyan-3: #003f50;\n            --simple-colors-default-theme-cyan-4: #005970;\n            --simple-colors-default-theme-cyan-5: #007999;\n            --simple-colors-default-theme-cyan-6: #009dc7;\n            --simple-colors-default-theme-cyan-7: #00c9ff;\n            --simple-colors-default-theme-cyan-8: #1ccfff;\n            --simple-colors-default-theme-cyan-9: #33d4ff;\n            --simple-colors-default-theme-cyan-10: #77e2ff;\n            --simple-colors-default-theme-cyan-11: #9beaff;\n            --simple-colors-default-theme-cyan-12: #ddf8ff;\n\n            --simple-colors-default-theme-teal-1: #001b14;\n            --simple-colors-default-theme-teal-2: #002a20;\n            --simple-colors-default-theme-teal-3: #003829;\n            --simple-colors-default-theme-teal-4: #004e3a;\n            --simple-colors-default-theme-teal-5: #007658;\n            --simple-colors-default-theme-teal-6: #009d75;\n            --simple-colors-default-theme-teal-7: #00ff9c;\n            --simple-colors-default-theme-teal-8: #29ffac;\n            --simple-colors-default-theme-teal-9: #56ffbd;\n            --simple-colors-default-theme-teal-10: #79ffcb;\n            --simple-colors-default-theme-teal-11: #98ffd7;\n            --simple-colors-default-theme-teal-12: #d9fff0;\n\n            --simple-colors-default-theme-green-1: #001d0c;\n            --simple-colors-default-theme-green-2: #002a11;\n            --simple-colors-default-theme-green-3: #003d18;\n            --simple-colors-default-theme-green-4: #005a23;\n            --simple-colors-default-theme-green-5: #00762e;\n            --simple-colors-default-theme-green-6: #008c37;\n            --simple-colors-default-theme-green-7: #00f961;\n            --simple-colors-default-theme-green-8: #24ff70;\n            --simple-colors-default-theme-green-9: #49ff88;\n            --simple-colors-default-theme-green-10: #79ffa7;\n            --simple-colors-default-theme-green-11: #acffc9;\n            --simple-colors-default-theme-green-12: #e1ffeb;\n\n            --simple-colors-default-theme-light-green-1: #0d2000;\n            --simple-colors-default-theme-light-green-2: #143000;\n            --simple-colors-default-theme-light-green-3: #1b3f00;\n            --simple-colors-default-theme-light-green-4: #296100;\n            --simple-colors-default-theme-light-green-5: #357f00;\n            --simple-colors-default-theme-light-green-6: #429d00;\n            --simple-colors-default-theme-light-green-7: #6fff00;\n            --simple-colors-default-theme-light-green-8: #8efd38;\n            --simple-colors-default-theme-light-green-9: #a1fd5a;\n            --simple-colors-default-theme-light-green-10: #b1ff75;\n            --simple-colors-default-theme-light-green-11: #c7ff9b;\n            --simple-colors-default-theme-light-green-12: #ebffdb;\n\n            --simple-colors-default-theme-lime-1: #182400;\n            --simple-colors-default-theme-lime-2: #223400;\n            --simple-colors-default-theme-lime-3: #293f00;\n            --simple-colors-default-theme-lime-4: #3b5a00;\n            --simple-colors-default-theme-lime-5: #4d7600;\n            --simple-colors-default-theme-lime-6: #649900;\n            --simple-colors-default-theme-lime-7: #aeff00;\n            --simple-colors-default-theme-lime-8: #bdff2d;\n            --simple-colors-default-theme-lime-9: #caff58;\n            --simple-colors-default-theme-lime-10: #d4ff77;\n            --simple-colors-default-theme-lime-11: #dfff9b;\n            --simple-colors-default-theme-lime-12: #f1ffd2;\n\n            --simple-colors-default-theme-yellow-1: #242400;\n            --simple-colors-default-theme-yellow-2: #303000;\n            --simple-colors-default-theme-yellow-3: #454400;\n            --simple-colors-default-theme-yellow-4: #585700;\n            --simple-colors-default-theme-yellow-5: #787700;\n            --simple-colors-default-theme-yellow-6: #929100;\n            --simple-colors-default-theme-yellow-7: #f6f600;\n            --simple-colors-default-theme-yellow-8: #ffff3a;\n            --simple-colors-default-theme-yellow-9: #ffff7c;\n            --simple-colors-default-theme-yellow-10: #ffff90;\n            --simple-colors-default-theme-yellow-11: #ffffac;\n            --simple-colors-default-theme-yellow-12: #ffffd5;\n\n            --simple-colors-default-theme-amber-1: #221a00;\n            --simple-colors-default-theme-amber-2: #302500;\n            --simple-colors-default-theme-amber-3: #413200;\n            --simple-colors-default-theme-amber-4: #614b00;\n            --simple-colors-default-theme-amber-5: #876800;\n            --simple-colors-default-theme-amber-6: #b28900;\n            --simple-colors-default-theme-amber-7: #ffc500;\n            --simple-colors-default-theme-amber-8: #ffc235;\n            --simple-colors-default-theme-amber-9: #ffcf5e;\n            --simple-colors-default-theme-amber-10: #ffd677;\n            --simple-colors-default-theme-amber-11: #ffdf92;\n            --simple-colors-default-theme-amber-12: #fff2d4;\n\n            --simple-colors-default-theme-orange-1: #2c1400;\n            --simple-colors-default-theme-orange-2: #3d1c00;\n            --simple-colors-default-theme-orange-3: #612d00;\n            --simple-colors-default-theme-orange-4: #833d00;\n            --simple-colors-default-theme-orange-5: #ae5100;\n            --simple-colors-default-theme-orange-6: #e56a00;\n            --simple-colors-default-theme-orange-7: #ff9625;\n            --simple-colors-default-theme-orange-8: #ff9e36;\n            --simple-colors-default-theme-orange-9: #ffb05c;\n            --simple-colors-default-theme-orange-10: #ffbd75;\n            --simple-colors-default-theme-orange-11: #ffca92;\n            --simple-colors-default-theme-orange-12: #ffebd7;\n\n            --simple-colors-default-theme-deep-orange-1: #240700;\n            --simple-colors-default-theme-deep-orange-2: #3a0c00;\n            --simple-colors-default-theme-deep-orange-3: #561100;\n            --simple-colors-default-theme-deep-orange-4: #8a1c00;\n            --simple-colors-default-theme-deep-orange-5: #b92500;\n            --simple-colors-default-theme-deep-orange-6: #f53100;\n            --simple-colors-default-theme-deep-orange-7: #ff6c3c;\n            --simple-colors-default-theme-deep-orange-8: #ff7649;\n            --simple-colors-default-theme-deep-orange-9: #ff8a64;\n            --simple-colors-default-theme-deep-orange-10: #ffa588;\n            --simple-colors-default-theme-deep-orange-11: #ffb299;\n            --simple-colors-default-theme-deep-orange-12: #ffe7e0;\n\n            --simple-colors-default-theme-brown-1: #200e09;\n            --simple-colors-default-theme-brown-2: #2c140e;\n            --simple-colors-default-theme-brown-3: #3b1e15;\n            --simple-colors-default-theme-brown-4: #5b3328;\n            --simple-colors-default-theme-brown-5: #724539;\n            --simple-colors-default-theme-brown-6: #85574a;\n            --simple-colors-default-theme-brown-7: #a47060;\n            --simple-colors-default-theme-brown-8: #ac7868;\n            --simple-colors-default-theme-brown-9: #b68373;\n            --simple-colors-default-theme-brown-10: #c59485;\n            --simple-colors-default-theme-brown-11: #e5b8aa;\n            --simple-colors-default-theme-brown-12: #f0e2de;\n\n            --simple-colors-default-theme-blue-grey-1: #0f1518;\n            --simple-colors-default-theme-blue-grey-2: #182023;\n            --simple-colors-default-theme-blue-grey-3: #1e282c;\n            --simple-colors-default-theme-blue-grey-4: #2f3e45;\n            --simple-colors-default-theme-blue-grey-5: #40535b;\n            --simple-colors-default-theme-blue-grey-6: #56707c;\n            --simple-colors-default-theme-blue-grey-7: #718892;\n            --simple-colors-default-theme-blue-grey-8: #7a8f98;\n            --simple-colors-default-theme-blue-grey-9: #8d9fa7;\n            --simple-colors-default-theme-blue-grey-10: #9badb6;\n            --simple-colors-default-theme-blue-grey-11: #b1c5ce;\n            --simple-colors-default-theme-blue-grey-12: #e7eff1;\n          }\n\n          :host([accent-color="grey"]) {\n            --simple-colors-default-theme-accent-1: #ffffff;\n            --simple-colors-default-theme-accent-2: #eeeeee;\n            --simple-colors-default-theme-accent-3: #dddddd;\n            --simple-colors-default-theme-accent-4: #cccccc;\n            --simple-colors-default-theme-accent-5: #bbbbbb;\n            --simple-colors-default-theme-accent-6: #999999;\n            --simple-colors-default-theme-accent-7: #666666;\n            --simple-colors-default-theme-accent-8: #444444;\n            --simple-colors-default-theme-accent-9: #333333;\n            --simple-colors-default-theme-accent-10: #222222;\n            --simple-colors-default-theme-accent-11: #111111;\n            --simple-colors-default-theme-accent-12: #000000;\n            --simple-colors-fixed-theme-accent-1: #ffffff;\n            --simple-colors-fixed-theme-accent-2: #eeeeee;\n            --simple-colors-fixed-theme-accent-3: #dddddd;\n            --simple-colors-fixed-theme-accent-4: #cccccc;\n            --simple-colors-fixed-theme-accent-5: #bbbbbb;\n            --simple-colors-fixed-theme-accent-6: #999999;\n            --simple-colors-fixed-theme-accent-7: #666666;\n            --simple-colors-fixed-theme-accent-8: #444444;\n            --simple-colors-fixed-theme-accent-9: #333333;\n            --simple-colors-fixed-theme-accent-10: #222222;\n            --simple-colors-fixed-theme-accent-11: #111111;\n            --simple-colors-fixed-theme-accent-12: #000000;\n          }\n\n          :host([dark][accent-color="grey"]) {\n            --simple-colors-default-theme-accent-1: #000000;\n            --simple-colors-default-theme-accent-2: #111111;\n            --simple-colors-default-theme-accent-3: #222222;\n            --simple-colors-default-theme-accent-4: #333333;\n            --simple-colors-default-theme-accent-5: #444444;\n            --simple-colors-default-theme-accent-6: #666666;\n            --simple-colors-default-theme-accent-7: #999999;\n            --simple-colors-default-theme-accent-8: #bbbbbb;\n            --simple-colors-default-theme-accent-9: #cccccc;\n            --simple-colors-default-theme-accent-10: #dddddd;\n            --simple-colors-default-theme-accent-11: #eeeeee;\n            --simple-colors-default-theme-accent-12: #ffffff;\n          }\n\n          :host([accent-color="red"]) {\n            --simple-colors-default-theme-accent-1: #ffdddd;\n            --simple-colors-default-theme-accent-2: #ffaeae;\n            --simple-colors-default-theme-accent-3: #ff8f8f;\n            --simple-colors-default-theme-accent-4: #ff7474;\n            --simple-colors-default-theme-accent-5: #fd5151;\n            --simple-colors-default-theme-accent-6: #ff2222;\n            --simple-colors-default-theme-accent-7: #ee0000;\n            --simple-colors-default-theme-accent-8: #ac0000;\n            --simple-colors-default-theme-accent-9: #850000;\n            --simple-colors-default-theme-accent-10: #670000;\n            --simple-colors-default-theme-accent-11: #520000;\n            --simple-colors-default-theme-accent-12: #3f0000;\n            --simple-colors-fixed-theme-accent-1: #ffdddd;\n            --simple-colors-fixed-theme-accent-2: #ffaeae;\n            --simple-colors-fixed-theme-accent-3: #ff8f8f;\n            --simple-colors-fixed-theme-accent-4: #ff7474;\n            --simple-colors-fixed-theme-accent-5: #fd5151;\n            --simple-colors-fixed-theme-accent-6: #ff2222;\n            --simple-colors-fixed-theme-accent-7: #ee0000;\n            --simple-colors-fixed-theme-accent-8: #ac0000;\n            --simple-colors-fixed-theme-accent-9: #850000;\n            --simple-colors-fixed-theme-accent-10: #670000;\n            --simple-colors-fixed-theme-accent-11: #520000;\n            --simple-colors-fixed-theme-accent-12: #3f0000;\n          }\n\n          :host([dark][accent-color="red"]) {\n            --simple-colors-default-theme-accent-1: #3f0000;\n            --simple-colors-default-theme-accent-2: #520000;\n            --simple-colors-default-theme-accent-3: #670000;\n            --simple-colors-default-theme-accent-4: #850000;\n            --simple-colors-default-theme-accent-5: #ac0000;\n            --simple-colors-default-theme-accent-6: #ee0000;\n            --simple-colors-default-theme-accent-7: #ff2222;\n            --simple-colors-default-theme-accent-8: #fd5151;\n            --simple-colors-default-theme-accent-9: #ff7474;\n            --simple-colors-default-theme-accent-10: #ff8f8f;\n            --simple-colors-default-theme-accent-11: #ffaeae;\n            --simple-colors-default-theme-accent-12: #ffdddd;\n          }\n\n          :host([accent-color="pink"]) {\n            --simple-colors-default-theme-accent-1: #ffe6f1;\n            --simple-colors-default-theme-accent-2: #ffa5cf;\n            --simple-colors-default-theme-accent-3: #ff87c0;\n            --simple-colors-default-theme-accent-4: #ff73b5;\n            --simple-colors-default-theme-accent-5: #fd60aa;\n            --simple-colors-default-theme-accent-6: #ff3996;\n            --simple-colors-default-theme-accent-7: #da004e;\n            --simple-colors-default-theme-accent-8: #b80042;\n            --simple-colors-default-theme-accent-9: #980036;\n            --simple-colors-default-theme-accent-10: #78002b;\n            --simple-colors-default-theme-accent-11: #5a0020;\n            --simple-colors-default-theme-accent-12: #440019;\n            --simple-colors-fixed-theme-accent-1: #ffe6f1;\n            --simple-colors-fixed-theme-accent-2: #ffa5cf;\n            --simple-colors-fixed-theme-accent-3: #ff87c0;\n            --simple-colors-fixed-theme-accent-4: #ff73b5;\n            --simple-colors-fixed-theme-accent-5: #fd60aa;\n            --simple-colors-fixed-theme-accent-6: #ff3996;\n            --simple-colors-fixed-theme-accent-7: #da004e;\n            --simple-colors-fixed-theme-accent-8: #b80042;\n            --simple-colors-fixed-theme-accent-9: #980036;\n            --simple-colors-fixed-theme-accent-10: #78002b;\n            --simple-colors-fixed-theme-accent-11: #5a0020;\n            --simple-colors-fixed-theme-accent-12: #440019;\n          }\n\n          :host([dark][accent-color="pink"]) {\n            --simple-colors-default-theme-accent-1: #440019;\n            --simple-colors-default-theme-accent-2: #5a0020;\n            --simple-colors-default-theme-accent-3: #78002b;\n            --simple-colors-default-theme-accent-4: #980036;\n            --simple-colors-default-theme-accent-5: #b80042;\n            --simple-colors-default-theme-accent-6: #da004e;\n            --simple-colors-default-theme-accent-7: #ff3996;\n            --simple-colors-default-theme-accent-8: #fd60aa;\n            --simple-colors-default-theme-accent-9: #ff73b5;\n            --simple-colors-default-theme-accent-10: #ff87c0;\n            --simple-colors-default-theme-accent-11: #ffa5cf;\n            --simple-colors-default-theme-accent-12: #ffe6f1;\n          }\n\n          :host([accent-color="purple"]) {\n            --simple-colors-default-theme-accent-1: #fce6ff;\n            --simple-colors-default-theme-accent-2: #f4affd;\n            --simple-colors-default-theme-accent-3: #f394ff;\n            --simple-colors-default-theme-accent-4: #f07cff;\n            --simple-colors-default-theme-accent-5: #ed61ff;\n            --simple-colors-default-theme-accent-6: #e200ff;\n            --simple-colors-default-theme-accent-7: #a500ba;\n            --simple-colors-default-theme-accent-8: #8a009b;\n            --simple-colors-default-theme-accent-9: #6c0079;\n            --simple-colors-default-theme-accent-10: #490052;\n            --simple-colors-default-theme-accent-11: #33003a;\n            --simple-colors-default-theme-accent-12: #200025;\n            --simple-colors-fixed-theme-accent-1: #fce6ff;\n            --simple-colors-fixed-theme-accent-2: #f4affd;\n            --simple-colors-fixed-theme-accent-3: #f394ff;\n            --simple-colors-fixed-theme-accent-4: #f07cff;\n            --simple-colors-fixed-theme-accent-5: #ed61ff;\n            --simple-colors-fixed-theme-accent-6: #e200ff;\n            --simple-colors-fixed-theme-accent-7: #a500ba;\n            --simple-colors-fixed-theme-accent-8: #8a009b;\n            --simple-colors-fixed-theme-accent-9: #6c0079;\n            --simple-colors-fixed-theme-accent-10: #490052;\n            --simple-colors-fixed-theme-accent-11: #33003a;\n            --simple-colors-fixed-theme-accent-12: #200025;\n          }\n\n          :host([dark][accent-color="purple"]) {\n            --simple-colors-default-theme-accent-1: #200025;\n            --simple-colors-default-theme-accent-2: #33003a;\n            --simple-colors-default-theme-accent-3: #490052;\n            --simple-colors-default-theme-accent-4: #6c0079;\n            --simple-colors-default-theme-accent-5: #8a009b;\n            --simple-colors-default-theme-accent-6: #a500ba;\n            --simple-colors-default-theme-accent-7: #e200ff;\n            --simple-colors-default-theme-accent-8: #ed61ff;\n            --simple-colors-default-theme-accent-9: #f07cff;\n            --simple-colors-default-theme-accent-10: #f394ff;\n            --simple-colors-default-theme-accent-11: #f4affd;\n            --simple-colors-default-theme-accent-12: #fce6ff;\n          }\n\n          :host([accent-color="deep-purple"]) {\n            --simple-colors-default-theme-accent-1: #f3e4ff;\n            --simple-colors-default-theme-accent-2: #ddacff;\n            --simple-colors-default-theme-accent-3: #c97eff;\n            --simple-colors-default-theme-accent-4: #bb63f9;\n            --simple-colors-default-theme-accent-5: #b44aff;\n            --simple-colors-default-theme-accent-6: #a931ff;\n            --simple-colors-default-theme-accent-7: #7e00d8;\n            --simple-colors-default-theme-accent-8: #5d009f;\n            --simple-colors-default-theme-accent-9: #4c0081;\n            --simple-colors-default-theme-accent-10: #3a0063;\n            --simple-colors-default-theme-accent-11: #2a0049;\n            --simple-colors-default-theme-accent-12: #1d0033;\n            --simple-colors-fixed-theme-accent-1: #f3e4ff;\n            --simple-colors-fixed-theme-accent-2: #ddacff;\n            --simple-colors-fixed-theme-accent-3: #c97eff;\n            --simple-colors-fixed-theme-accent-4: #bb63f9;\n            --simple-colors-fixed-theme-accent-5: #b44aff;\n            --simple-colors-fixed-theme-accent-6: #a931ff;\n            --simple-colors-fixed-theme-accent-7: #7e00d8;\n            --simple-colors-fixed-theme-accent-8: #5d009f;\n            --simple-colors-fixed-theme-accent-9: #4c0081;\n            --simple-colors-fixed-theme-accent-10: #3a0063;\n            --simple-colors-fixed-theme-accent-11: #2a0049;\n            --simple-colors-fixed-theme-accent-12: #1d0033;\n          }\n\n          :host([dark][accent-color="deep-purple"]) {\n            --simple-colors-default-theme-accent-1: #1d0033;\n            --simple-colors-default-theme-accent-2: #2a0049;\n            --simple-colors-default-theme-accent-3: #3a0063;\n            --simple-colors-default-theme-accent-4: #4c0081;\n            --simple-colors-default-theme-accent-5: #5d009f;\n            --simple-colors-default-theme-accent-6: #7e00d8;\n            --simple-colors-default-theme-accent-7: #a931ff;\n            --simple-colors-default-theme-accent-8: #b44aff;\n            --simple-colors-default-theme-accent-9: #bb63f9;\n            --simple-colors-default-theme-accent-10: #c97eff;\n            --simple-colors-default-theme-accent-11: #ddacff;\n            --simple-colors-default-theme-accent-12: #f3e4ff;\n          }\n\n          :host([accent-color="indigo"]) {\n            --simple-colors-default-theme-accent-1: #e5ddff;\n            --simple-colors-default-theme-accent-2: #c3b2ff;\n            --simple-colors-default-theme-accent-3: #af97ff;\n            --simple-colors-default-theme-accent-4: #9e82ff;\n            --simple-colors-default-theme-accent-5: #9373ff;\n            --simple-colors-default-theme-accent-6: #835fff;\n            --simple-colors-default-theme-accent-7: #3a00ff;\n            --simple-colors-default-theme-accent-8: #2801b0;\n            --simple-colors-default-theme-accent-9: #20008c;\n            --simple-colors-default-theme-accent-10: #160063;\n            --simple-colors-default-theme-accent-11: #100049;\n            --simple-colors-default-theme-accent-12: #0a0030;\n            --simple-colors-fixed-theme-accent-1: #e5ddff;\n            --simple-colors-fixed-theme-accent-2: #c3b2ff;\n            --simple-colors-fixed-theme-accent-3: #af97ff;\n            --simple-colors-fixed-theme-accent-4: #9e82ff;\n            --simple-colors-fixed-theme-accent-5: #9373ff;\n            --simple-colors-fixed-theme-accent-6: #835fff;\n            --simple-colors-fixed-theme-accent-7: #3a00ff;\n            --simple-colors-fixed-theme-accent-8: #2801b0;\n            --simple-colors-fixed-theme-accent-9: #20008c;\n            --simple-colors-fixed-theme-accent-10: #160063;\n            --simple-colors-fixed-theme-accent-11: #100049;\n            --simple-colors-fixed-theme-accent-12: #0a0030;\n          }\n\n          :host([dark][accent-color="indigo"]) {\n            --simple-colors-default-theme-accent-1: #0a0030;\n            --simple-colors-default-theme-accent-2: #100049;\n            --simple-colors-default-theme-accent-3: #160063;\n            --simple-colors-default-theme-accent-4: #20008c;\n            --simple-colors-default-theme-accent-5: #2801b0;\n            --simple-colors-default-theme-accent-6: #3a00ff;\n            --simple-colors-default-theme-accent-7: #835fff;\n            --simple-colors-default-theme-accent-8: #9373ff;\n            --simple-colors-default-theme-accent-9: #9e82ff;\n            --simple-colors-default-theme-accent-10: #af97ff;\n            --simple-colors-default-theme-accent-11: #c3b2ff;\n            --simple-colors-default-theme-accent-12: #e5ddff;\n          }\n\n          :host([accent-color="blue"]) {\n            --simple-colors-default-theme-accent-1: #e2ecff;\n            --simple-colors-default-theme-accent-2: #acc9ff;\n            --simple-colors-default-theme-accent-3: #95baff;\n            --simple-colors-default-theme-accent-4: #74a5ff;\n            --simple-colors-default-theme-accent-5: #5892fd;\n            --simple-colors-default-theme-accent-6: #4083ff;\n            --simple-colors-default-theme-accent-7: #0059ff;\n            --simple-colors-default-theme-accent-8: #0041bb;\n            --simple-colors-default-theme-accent-9: #003494;\n            --simple-colors-default-theme-accent-10: #002569;\n            --simple-colors-default-theme-accent-11: #001947;\n            --simple-colors-default-theme-accent-12: #001333;\n            --simple-colors-fixed-theme-accent-1: #e2ecff;\n            --simple-colors-fixed-theme-accent-2: #acc9ff;\n            --simple-colors-fixed-theme-accent-3: #95baff;\n            --simple-colors-fixed-theme-accent-4: #74a5ff;\n            --simple-colors-fixed-theme-accent-5: #5892fd;\n            --simple-colors-fixed-theme-accent-6: #4083ff;\n            --simple-colors-fixed-theme-accent-7: #0059ff;\n            --simple-colors-fixed-theme-accent-8: #0041bb;\n            --simple-colors-fixed-theme-accent-9: #003494;\n            --simple-colors-fixed-theme-accent-10: #002569;\n            --simple-colors-fixed-theme-accent-11: #001947;\n            --simple-colors-fixed-theme-accent-12: #001333;\n          }\n\n          :host([dark][accent-color="blue"]) {\n            --simple-colors-default-theme-accent-1: #001333;\n            --simple-colors-default-theme-accent-2: #001947;\n            --simple-colors-default-theme-accent-3: #002569;\n            --simple-colors-default-theme-accent-4: #003494;\n            --simple-colors-default-theme-accent-5: #0041bb;\n            --simple-colors-default-theme-accent-6: #0059ff;\n            --simple-colors-default-theme-accent-7: #4083ff;\n            --simple-colors-default-theme-accent-8: #5892fd;\n            --simple-colors-default-theme-accent-9: #74a5ff;\n            --simple-colors-default-theme-accent-10: #95baff;\n            --simple-colors-default-theme-accent-11: #acc9ff;\n            --simple-colors-default-theme-accent-12: #e2ecff;\n          }\n\n          :host([accent-color="light-blue"]) {\n            --simple-colors-default-theme-accent-1: #cde8ff;\n            --simple-colors-default-theme-accent-2: #a1d1ff;\n            --simple-colors-default-theme-accent-3: #92c9ff;\n            --simple-colors-default-theme-accent-4: #65b3ff;\n            --simple-colors-default-theme-accent-5: #58adff;\n            --simple-colors-default-theme-accent-6: #41a1ff;\n            --simple-colors-default-theme-accent-7: #007ffc;\n            --simple-colors-default-theme-accent-8: #0066ca;\n            --simple-colors-default-theme-accent-9: #0055a8;\n            --simple-colors-default-theme-accent-10: #003f7d;\n            --simple-colors-default-theme-accent-11: #002850;\n            --simple-colors-default-theme-accent-12: #001b36;\n            --simple-colors-fixed-theme-accent-1: #cde8ff;\n            --simple-colors-fixed-theme-accent-2: #a1d1ff;\n            --simple-colors-fixed-theme-accent-3: #92c9ff;\n            --simple-colors-fixed-theme-accent-4: #65b3ff;\n            --simple-colors-fixed-theme-accent-5: #58adff;\n            --simple-colors-fixed-theme-accent-6: #41a1ff;\n            --simple-colors-fixed-theme-accent-7: #007ffc;\n            --simple-colors-fixed-theme-accent-8: #0066ca;\n            --simple-colors-fixed-theme-accent-9: #0055a8;\n            --simple-colors-fixed-theme-accent-10: #003f7d;\n            --simple-colors-fixed-theme-accent-11: #002850;\n            --simple-colors-fixed-theme-accent-12: #001b36;\n          }\n\n          :host([dark][accent-color="light-blue"]) {\n            --simple-colors-default-theme-accent-1: #001b36;\n            --simple-colors-default-theme-accent-2: #002850;\n            --simple-colors-default-theme-accent-3: #003f7d;\n            --simple-colors-default-theme-accent-4: #0055a8;\n            --simple-colors-default-theme-accent-5: #0066ca;\n            --simple-colors-default-theme-accent-6: #007ffc;\n            --simple-colors-default-theme-accent-7: #41a1ff;\n            --simple-colors-default-theme-accent-8: #58adff;\n            --simple-colors-default-theme-accent-9: #65b3ff;\n            --simple-colors-default-theme-accent-10: #92c9ff;\n            --simple-colors-default-theme-accent-11: #a1d1ff;\n            --simple-colors-default-theme-accent-12: #cde8ff;\n          }\n\n          :host([accent-color="cyan"]) {\n            --simple-colors-default-theme-accent-1: #ddf8ff;\n            --simple-colors-default-theme-accent-2: #9beaff;\n            --simple-colors-default-theme-accent-3: #77e2ff;\n            --simple-colors-default-theme-accent-4: #33d4ff;\n            --simple-colors-default-theme-accent-5: #1ccfff;\n            --simple-colors-default-theme-accent-6: #00c9ff;\n            --simple-colors-default-theme-accent-7: #009dc7;\n            --simple-colors-default-theme-accent-8: #007999;\n            --simple-colors-default-theme-accent-9: #005970;\n            --simple-colors-default-theme-accent-10: #003f50;\n            --simple-colors-default-theme-accent-11: #002c38;\n            --simple-colors-default-theme-accent-12: #001a20;\n            --simple-colors-fixed-theme-accent-1: #ddf8ff;\n            --simple-colors-fixed-theme-accent-2: #9beaff;\n            --simple-colors-fixed-theme-accent-3: #77e2ff;\n            --simple-colors-fixed-theme-accent-4: #33d4ff;\n            --simple-colors-fixed-theme-accent-5: #1ccfff;\n            --simple-colors-fixed-theme-accent-6: #00c9ff;\n            --simple-colors-fixed-theme-accent-7: #009dc7;\n            --simple-colors-fixed-theme-accent-8: #007999;\n            --simple-colors-fixed-theme-accent-9: #005970;\n            --simple-colors-fixed-theme-accent-10: #003f50;\n            --simple-colors-fixed-theme-accent-11: #002c38;\n            --simple-colors-fixed-theme-accent-12: #001a20;\n          }\n\n          :host([dark][accent-color="cyan"]) {\n            --simple-colors-default-theme-accent-1: #001a20;\n            --simple-colors-default-theme-accent-2: #002c38;\n            --simple-colors-default-theme-accent-3: #003f50;\n            --simple-colors-default-theme-accent-4: #005970;\n            --simple-colors-default-theme-accent-5: #007999;\n            --simple-colors-default-theme-accent-6: #009dc7;\n            --simple-colors-default-theme-accent-7: #00c9ff;\n            --simple-colors-default-theme-accent-8: #1ccfff;\n            --simple-colors-default-theme-accent-9: #33d4ff;\n            --simple-colors-default-theme-accent-10: #77e2ff;\n            --simple-colors-default-theme-accent-11: #9beaff;\n            --simple-colors-default-theme-accent-12: #ddf8ff;\n          }\n\n          :host([accent-color="teal"]) {\n            --simple-colors-default-theme-accent-1: #d9fff0;\n            --simple-colors-default-theme-accent-2: #98ffd7;\n            --simple-colors-default-theme-accent-3: #79ffcb;\n            --simple-colors-default-theme-accent-4: #56ffbd;\n            --simple-colors-default-theme-accent-5: #29ffac;\n            --simple-colors-default-theme-accent-6: #00ff9c;\n            --simple-colors-default-theme-accent-7: #009d75;\n            --simple-colors-default-theme-accent-8: #007658;\n            --simple-colors-default-theme-accent-9: #004e3a;\n            --simple-colors-default-theme-accent-10: #003829;\n            --simple-colors-default-theme-accent-11: #002a20;\n            --simple-colors-default-theme-accent-12: #001b14;\n            --simple-colors-fixed-theme-accent-1: #d9fff0;\n            --simple-colors-fixed-theme-accent-2: #98ffd7;\n            --simple-colors-fixed-theme-accent-3: #79ffcb;\n            --simple-colors-fixed-theme-accent-4: #56ffbd;\n            --simple-colors-fixed-theme-accent-5: #29ffac;\n            --simple-colors-fixed-theme-accent-6: #00ff9c;\n            --simple-colors-fixed-theme-accent-7: #009d75;\n            --simple-colors-fixed-theme-accent-8: #007658;\n            --simple-colors-fixed-theme-accent-9: #004e3a;\n            --simple-colors-fixed-theme-accent-10: #003829;\n            --simple-colors-fixed-theme-accent-11: #002a20;\n            --simple-colors-fixed-theme-accent-12: #001b14;\n          }\n\n          :host([dark][accent-color="teal"]) {\n            --simple-colors-default-theme-accent-1: #001b14;\n            --simple-colors-default-theme-accent-2: #002a20;\n            --simple-colors-default-theme-accent-3: #003829;\n            --simple-colors-default-theme-accent-4: #004e3a;\n            --simple-colors-default-theme-accent-5: #007658;\n            --simple-colors-default-theme-accent-6: #009d75;\n            --simple-colors-default-theme-accent-7: #00ff9c;\n            --simple-colors-default-theme-accent-8: #29ffac;\n            --simple-colors-default-theme-accent-9: #56ffbd;\n            --simple-colors-default-theme-accent-10: #79ffcb;\n            --simple-colors-default-theme-accent-11: #98ffd7;\n            --simple-colors-default-theme-accent-12: #d9fff0;\n          }\n\n          :host([accent-color="green"]) {\n            --simple-colors-default-theme-accent-1: #e1ffeb;\n            --simple-colors-default-theme-accent-2: #acffc9;\n            --simple-colors-default-theme-accent-3: #79ffa7;\n            --simple-colors-default-theme-accent-4: #49ff88;\n            --simple-colors-default-theme-accent-5: #24ff70;\n            --simple-colors-default-theme-accent-6: #00f961;\n            --simple-colors-default-theme-accent-7: #008c37;\n            --simple-colors-default-theme-accent-8: #00762e;\n            --simple-colors-default-theme-accent-9: #005a23;\n            --simple-colors-default-theme-accent-10: #003d18;\n            --simple-colors-default-theme-accent-11: #002a11;\n            --simple-colors-default-theme-accent-12: #001d0c;\n            --simple-colors-fixed-theme-accent-1: #e1ffeb;\n            --simple-colors-fixed-theme-accent-2: #acffc9;\n            --simple-colors-fixed-theme-accent-3: #79ffa7;\n            --simple-colors-fixed-theme-accent-4: #49ff88;\n            --simple-colors-fixed-theme-accent-5: #24ff70;\n            --simple-colors-fixed-theme-accent-6: #00f961;\n            --simple-colors-fixed-theme-accent-7: #008c37;\n            --simple-colors-fixed-theme-accent-8: #00762e;\n            --simple-colors-fixed-theme-accent-9: #005a23;\n            --simple-colors-fixed-theme-accent-10: #003d18;\n            --simple-colors-fixed-theme-accent-11: #002a11;\n            --simple-colors-fixed-theme-accent-12: #001d0c;\n          }\n\n          :host([dark][accent-color="green"]) {\n            --simple-colors-default-theme-accent-1: #001d0c;\n            --simple-colors-default-theme-accent-2: #002a11;\n            --simple-colors-default-theme-accent-3: #003d18;\n            --simple-colors-default-theme-accent-4: #005a23;\n            --simple-colors-default-theme-accent-5: #00762e;\n            --simple-colors-default-theme-accent-6: #008c37;\n            --simple-colors-default-theme-accent-7: #00f961;\n            --simple-colors-default-theme-accent-8: #24ff70;\n            --simple-colors-default-theme-accent-9: #49ff88;\n            --simple-colors-default-theme-accent-10: #79ffa7;\n            --simple-colors-default-theme-accent-11: #acffc9;\n            --simple-colors-default-theme-accent-12: #e1ffeb;\n          }\n\n          :host([accent-color="light-green"]) {\n            --simple-colors-default-theme-accent-1: #ebffdb;\n            --simple-colors-default-theme-accent-2: #c7ff9b;\n            --simple-colors-default-theme-accent-3: #b1ff75;\n            --simple-colors-default-theme-accent-4: #a1fd5a;\n            --simple-colors-default-theme-accent-5: #8efd38;\n            --simple-colors-default-theme-accent-6: #6fff00;\n            --simple-colors-default-theme-accent-7: #429d00;\n            --simple-colors-default-theme-accent-8: #357f00;\n            --simple-colors-default-theme-accent-9: #296100;\n            --simple-colors-default-theme-accent-10: #1b3f00;\n            --simple-colors-default-theme-accent-11: #143000;\n            --simple-colors-default-theme-accent-12: #0d2000;\n            --simple-colors-fixed-theme-accent-1: #ebffdb;\n            --simple-colors-fixed-theme-accent-2: #c7ff9b;\n            --simple-colors-fixed-theme-accent-3: #b1ff75;\n            --simple-colors-fixed-theme-accent-4: #a1fd5a;\n            --simple-colors-fixed-theme-accent-5: #8efd38;\n            --simple-colors-fixed-theme-accent-6: #6fff00;\n            --simple-colors-fixed-theme-accent-7: #429d00;\n            --simple-colors-fixed-theme-accent-8: #357f00;\n            --simple-colors-fixed-theme-accent-9: #296100;\n            --simple-colors-fixed-theme-accent-10: #1b3f00;\n            --simple-colors-fixed-theme-accent-11: #143000;\n            --simple-colors-fixed-theme-accent-12: #0d2000;\n          }\n\n          :host([dark][accent-color="light-green"]) {\n            --simple-colors-default-theme-accent-1: #0d2000;\n            --simple-colors-default-theme-accent-2: #143000;\n            --simple-colors-default-theme-accent-3: #1b3f00;\n            --simple-colors-default-theme-accent-4: #296100;\n            --simple-colors-default-theme-accent-5: #357f00;\n            --simple-colors-default-theme-accent-6: #429d00;\n            --simple-colors-default-theme-accent-7: #6fff00;\n            --simple-colors-default-theme-accent-8: #8efd38;\n            --simple-colors-default-theme-accent-9: #a1fd5a;\n            --simple-colors-default-theme-accent-10: #b1ff75;\n            --simple-colors-default-theme-accent-11: #c7ff9b;\n            --simple-colors-default-theme-accent-12: #ebffdb;\n          }\n\n          :host([accent-color="lime"]) {\n            --simple-colors-default-theme-accent-1: #f1ffd2;\n            --simple-colors-default-theme-accent-2: #dfff9b;\n            --simple-colors-default-theme-accent-3: #d4ff77;\n            --simple-colors-default-theme-accent-4: #caff58;\n            --simple-colors-default-theme-accent-5: #bdff2d;\n            --simple-colors-default-theme-accent-6: #aeff00;\n            --simple-colors-default-theme-accent-7: #649900;\n            --simple-colors-default-theme-accent-8: #4d7600;\n            --simple-colors-default-theme-accent-9: #3b5a00;\n            --simple-colors-default-theme-accent-10: #293f00;\n            --simple-colors-default-theme-accent-11: #223400;\n            --simple-colors-default-theme-accent-12: #182400;\n            --simple-colors-fixed-theme-accent-1: #f1ffd2;\n            --simple-colors-fixed-theme-accent-2: #dfff9b;\n            --simple-colors-fixed-theme-accent-3: #d4ff77;\n            --simple-colors-fixed-theme-accent-4: #caff58;\n            --simple-colors-fixed-theme-accent-5: #bdff2d;\n            --simple-colors-fixed-theme-accent-6: #aeff00;\n            --simple-colors-fixed-theme-accent-7: #649900;\n            --simple-colors-fixed-theme-accent-8: #4d7600;\n            --simple-colors-fixed-theme-accent-9: #3b5a00;\n            --simple-colors-fixed-theme-accent-10: #293f00;\n            --simple-colors-fixed-theme-accent-11: #223400;\n            --simple-colors-fixed-theme-accent-12: #182400;\n          }\n\n          :host([dark][accent-color="lime"]) {\n            --simple-colors-default-theme-accent-1: #182400;\n            --simple-colors-default-theme-accent-2: #223400;\n            --simple-colors-default-theme-accent-3: #293f00;\n            --simple-colors-default-theme-accent-4: #3b5a00;\n            --simple-colors-default-theme-accent-5: #4d7600;\n            --simple-colors-default-theme-accent-6: #649900;\n            --simple-colors-default-theme-accent-7: #aeff00;\n            --simple-colors-default-theme-accent-8: #bdff2d;\n            --simple-colors-default-theme-accent-9: #caff58;\n            --simple-colors-default-theme-accent-10: #d4ff77;\n            --simple-colors-default-theme-accent-11: #dfff9b;\n            --simple-colors-default-theme-accent-12: #f1ffd2;\n          }\n\n          :host([accent-color="yellow"]) {\n            --simple-colors-default-theme-accent-1: #ffffd5;\n            --simple-colors-default-theme-accent-2: #ffffac;\n            --simple-colors-default-theme-accent-3: #ffff90;\n            --simple-colors-default-theme-accent-4: #ffff7c;\n            --simple-colors-default-theme-accent-5: #ffff3a;\n            --simple-colors-default-theme-accent-6: #f6f600;\n            --simple-colors-default-theme-accent-7: #929100;\n            --simple-colors-default-theme-accent-8: #787700;\n            --simple-colors-default-theme-accent-9: #585700;\n            --simple-colors-default-theme-accent-10: #454400;\n            --simple-colors-default-theme-accent-11: #303000;\n            --simple-colors-default-theme-accent-12: #242400;\n            --simple-colors-fixed-theme-accent-1: #ffffd5;\n            --simple-colors-fixed-theme-accent-2: #ffffac;\n            --simple-colors-fixed-theme-accent-3: #ffff90;\n            --simple-colors-fixed-theme-accent-4: #ffff7c;\n            --simple-colors-fixed-theme-accent-5: #ffff3a;\n            --simple-colors-fixed-theme-accent-6: #f6f600;\n            --simple-colors-fixed-theme-accent-7: #929100;\n            --simple-colors-fixed-theme-accent-8: #787700;\n            --simple-colors-fixed-theme-accent-9: #585700;\n            --simple-colors-fixed-theme-accent-10: #454400;\n            --simple-colors-fixed-theme-accent-11: #303000;\n            --simple-colors-fixed-theme-accent-12: #242400;\n          }\n\n          :host([dark][accent-color="yellow"]) {\n            --simple-colors-default-theme-accent-1: #242400;\n            --simple-colors-default-theme-accent-2: #303000;\n            --simple-colors-default-theme-accent-3: #454400;\n            --simple-colors-default-theme-accent-4: #585700;\n            --simple-colors-default-theme-accent-5: #787700;\n            --simple-colors-default-theme-accent-6: #929100;\n            --simple-colors-default-theme-accent-7: #f6f600;\n            --simple-colors-default-theme-accent-8: #ffff3a;\n            --simple-colors-default-theme-accent-9: #ffff7c;\n            --simple-colors-default-theme-accent-10: #ffff90;\n            --simple-colors-default-theme-accent-11: #ffffac;\n            --simple-colors-default-theme-accent-12: #ffffd5;\n          }\n\n          :host([accent-color="amber"]) {\n            --simple-colors-default-theme-accent-1: #fff2d4;\n            --simple-colors-default-theme-accent-2: #ffdf92;\n            --simple-colors-default-theme-accent-3: #ffd677;\n            --simple-colors-default-theme-accent-4: #ffcf5e;\n            --simple-colors-default-theme-accent-5: #ffc235;\n            --simple-colors-default-theme-accent-6: #ffc500;\n            --simple-colors-default-theme-accent-7: #b28900;\n            --simple-colors-default-theme-accent-8: #876800;\n            --simple-colors-default-theme-accent-9: #614b00;\n            --simple-colors-default-theme-accent-10: #413200;\n            --simple-colors-default-theme-accent-11: #302500;\n            --simple-colors-default-theme-accent-12: #221a00;\n            --simple-colors-fixed-theme-accent-1: #fff2d4;\n            --simple-colors-fixed-theme-accent-2: #ffdf92;\n            --simple-colors-fixed-theme-accent-3: #ffd677;\n            --simple-colors-fixed-theme-accent-4: #ffcf5e;\n            --simple-colors-fixed-theme-accent-5: #ffc235;\n            --simple-colors-fixed-theme-accent-6: #ffc500;\n            --simple-colors-fixed-theme-accent-7: #b28900;\n            --simple-colors-fixed-theme-accent-8: #876800;\n            --simple-colors-fixed-theme-accent-9: #614b00;\n            --simple-colors-fixed-theme-accent-10: #413200;\n            --simple-colors-fixed-theme-accent-11: #302500;\n            --simple-colors-fixed-theme-accent-12: #221a00;\n          }\n\n          :host([dark][accent-color="amber"]) {\n            --simple-colors-default-theme-accent-1: #221a00;\n            --simple-colors-default-theme-accent-2: #302500;\n            --simple-colors-default-theme-accent-3: #413200;\n            --simple-colors-default-theme-accent-4: #614b00;\n            --simple-colors-default-theme-accent-5: #876800;\n            --simple-colors-default-theme-accent-6: #b28900;\n            --simple-colors-default-theme-accent-7: #ffc500;\n            --simple-colors-default-theme-accent-8: #ffc235;\n            --simple-colors-default-theme-accent-9: #ffcf5e;\n            --simple-colors-default-theme-accent-10: #ffd677;\n            --simple-colors-default-theme-accent-11: #ffdf92;\n            --simple-colors-default-theme-accent-12: #fff2d4;\n          }\n\n          :host([accent-color="orange"]) {\n            --simple-colors-default-theme-accent-1: #ffebd7;\n            --simple-colors-default-theme-accent-2: #ffca92;\n            --simple-colors-default-theme-accent-3: #ffbd75;\n            --simple-colors-default-theme-accent-4: #ffb05c;\n            --simple-colors-default-theme-accent-5: #ff9e36;\n            --simple-colors-default-theme-accent-6: #ff9625;\n            --simple-colors-default-theme-accent-7: #e56a00;\n            --simple-colors-default-theme-accent-8: #ae5100;\n            --simple-colors-default-theme-accent-9: #833d00;\n            --simple-colors-default-theme-accent-10: #612d00;\n            --simple-colors-default-theme-accent-11: #3d1c00;\n            --simple-colors-default-theme-accent-12: #2c1400;\n            --simple-colors-fixed-theme-accent-1: #ffebd7;\n            --simple-colors-fixed-theme-accent-2: #ffca92;\n            --simple-colors-fixed-theme-accent-3: #ffbd75;\n            --simple-colors-fixed-theme-accent-4: #ffb05c;\n            --simple-colors-fixed-theme-accent-5: #ff9e36;\n            --simple-colors-fixed-theme-accent-6: #ff9625;\n            --simple-colors-fixed-theme-accent-7: #e56a00;\n            --simple-colors-fixed-theme-accent-8: #ae5100;\n            --simple-colors-fixed-theme-accent-9: #833d00;\n            --simple-colors-fixed-theme-accent-10: #612d00;\n            --simple-colors-fixed-theme-accent-11: #3d1c00;\n            --simple-colors-fixed-theme-accent-12: #2c1400;\n          }\n\n          :host([dark][accent-color="orange"]) {\n            --simple-colors-default-theme-accent-1: #2c1400;\n            --simple-colors-default-theme-accent-2: #3d1c00;\n            --simple-colors-default-theme-accent-3: #612d00;\n            --simple-colors-default-theme-accent-4: #833d00;\n            --simple-colors-default-theme-accent-5: #ae5100;\n            --simple-colors-default-theme-accent-6: #e56a00;\n            --simple-colors-default-theme-accent-7: #ff9625;\n            --simple-colors-default-theme-accent-8: #ff9e36;\n            --simple-colors-default-theme-accent-9: #ffb05c;\n            --simple-colors-default-theme-accent-10: #ffbd75;\n            --simple-colors-default-theme-accent-11: #ffca92;\n            --simple-colors-default-theme-accent-12: #ffebd7;\n          }\n\n          :host([accent-color="deep-orange"]) {\n            --simple-colors-default-theme-accent-1: #ffe7e0;\n            --simple-colors-default-theme-accent-2: #ffb299;\n            --simple-colors-default-theme-accent-3: #ffa588;\n            --simple-colors-default-theme-accent-4: #ff8a64;\n            --simple-colors-default-theme-accent-5: #ff7649;\n            --simple-colors-default-theme-accent-6: #ff6c3c;\n            --simple-colors-default-theme-accent-7: #f53100;\n            --simple-colors-default-theme-accent-8: #b92500;\n            --simple-colors-default-theme-accent-9: #8a1c00;\n            --simple-colors-default-theme-accent-10: #561100;\n            --simple-colors-default-theme-accent-11: #3a0c00;\n            --simple-colors-default-theme-accent-12: #240700;\n            --simple-colors-fixed-theme-accent-1: #ffe7e0;\n            --simple-colors-fixed-theme-accent-2: #ffb299;\n            --simple-colors-fixed-theme-accent-3: #ffa588;\n            --simple-colors-fixed-theme-accent-4: #ff8a64;\n            --simple-colors-fixed-theme-accent-5: #ff7649;\n            --simple-colors-fixed-theme-accent-6: #ff6c3c;\n            --simple-colors-fixed-theme-accent-7: #f53100;\n            --simple-colors-fixed-theme-accent-8: #b92500;\n            --simple-colors-fixed-theme-accent-9: #8a1c00;\n            --simple-colors-fixed-theme-accent-10: #561100;\n            --simple-colors-fixed-theme-accent-11: #3a0c00;\n            --simple-colors-fixed-theme-accent-12: #240700;\n          }\n\n          :host([dark][accent-color="deep-orange"]) {\n            --simple-colors-default-theme-accent-1: #240700;\n            --simple-colors-default-theme-accent-2: #3a0c00;\n            --simple-colors-default-theme-accent-3: #561100;\n            --simple-colors-default-theme-accent-4: #8a1c00;\n            --simple-colors-default-theme-accent-5: #b92500;\n            --simple-colors-default-theme-accent-6: #f53100;\n            --simple-colors-default-theme-accent-7: #ff6c3c;\n            --simple-colors-default-theme-accent-8: #ff7649;\n            --simple-colors-default-theme-accent-9: #ff8a64;\n            --simple-colors-default-theme-accent-10: #ffa588;\n            --simple-colors-default-theme-accent-11: #ffb299;\n            --simple-colors-default-theme-accent-12: #ffe7e0;\n          }\n\n          :host([accent-color="brown"]) {\n            --simple-colors-default-theme-accent-1: #f0e2de;\n            --simple-colors-default-theme-accent-2: #e5b8aa;\n            --simple-colors-default-theme-accent-3: #c59485;\n            --simple-colors-default-theme-accent-4: #b68373;\n            --simple-colors-default-theme-accent-5: #ac7868;\n            --simple-colors-default-theme-accent-6: #a47060;\n            --simple-colors-default-theme-accent-7: #85574a;\n            --simple-colors-default-theme-accent-8: #724539;\n            --simple-colors-default-theme-accent-9: #5b3328;\n            --simple-colors-default-theme-accent-10: #3b1e15;\n            --simple-colors-default-theme-accent-11: #2c140e;\n            --simple-colors-default-theme-accent-12: #200e09;\n            --simple-colors-fixed-theme-accent-1: #f0e2de;\n            --simple-colors-fixed-theme-accent-2: #e5b8aa;\n            --simple-colors-fixed-theme-accent-3: #c59485;\n            --simple-colors-fixed-theme-accent-4: #b68373;\n            --simple-colors-fixed-theme-accent-5: #ac7868;\n            --simple-colors-fixed-theme-accent-6: #a47060;\n            --simple-colors-fixed-theme-accent-7: #85574a;\n            --simple-colors-fixed-theme-accent-8: #724539;\n            --simple-colors-fixed-theme-accent-9: #5b3328;\n            --simple-colors-fixed-theme-accent-10: #3b1e15;\n            --simple-colors-fixed-theme-accent-11: #2c140e;\n            --simple-colors-fixed-theme-accent-12: #200e09;\n          }\n\n          :host([dark][accent-color="brown"]) {\n            --simple-colors-default-theme-accent-1: #200e09;\n            --simple-colors-default-theme-accent-2: #2c140e;\n            --simple-colors-default-theme-accent-3: #3b1e15;\n            --simple-colors-default-theme-accent-4: #5b3328;\n            --simple-colors-default-theme-accent-5: #724539;\n            --simple-colors-default-theme-accent-6: #85574a;\n            --simple-colors-default-theme-accent-7: #a47060;\n            --simple-colors-default-theme-accent-8: #ac7868;\n            --simple-colors-default-theme-accent-9: #b68373;\n            --simple-colors-default-theme-accent-10: #c59485;\n            --simple-colors-default-theme-accent-11: #e5b8aa;\n            --simple-colors-default-theme-accent-12: #f0e2de;\n          }\n\n          :host([accent-color="blue-grey"]) {\n            --simple-colors-default-theme-accent-1: #e7eff1;\n            --simple-colors-default-theme-accent-2: #b1c5ce;\n            --simple-colors-default-theme-accent-3: #9badb6;\n            --simple-colors-default-theme-accent-4: #8d9fa7;\n            --simple-colors-default-theme-accent-5: #7a8f98;\n            --simple-colors-default-theme-accent-6: #718892;\n            --simple-colors-default-theme-accent-7: #56707c;\n            --simple-colors-default-theme-accent-8: #40535b;\n            --simple-colors-default-theme-accent-9: #2f3e45;\n            --simple-colors-default-theme-accent-10: #1e282c;\n            --simple-colors-default-theme-accent-11: #182023;\n            --simple-colors-default-theme-accent-12: #0f1518;\n            --simple-colors-fixed-theme-accent-1: #e7eff1;\n            --simple-colors-fixed-theme-accent-2: #b1c5ce;\n            --simple-colors-fixed-theme-accent-3: #9badb6;\n            --simple-colors-fixed-theme-accent-4: #8d9fa7;\n            --simple-colors-fixed-theme-accent-5: #7a8f98;\n            --simple-colors-fixed-theme-accent-6: #718892;\n            --simple-colors-fixed-theme-accent-7: #56707c;\n            --simple-colors-fixed-theme-accent-8: #40535b;\n            --simple-colors-fixed-theme-accent-9: #2f3e45;\n            --simple-colors-fixed-theme-accent-10: #1e282c;\n            --simple-colors-fixed-theme-accent-11: #182023;\n            --simple-colors-fixed-theme-accent-12: #0f1518;\n          }\n\n          :host([dark][accent-color="blue-grey"]) {\n            --simple-colors-default-theme-accent-1: #0f1518;\n            --simple-colors-default-theme-accent-2: #182023;\n            --simple-colors-default-theme-accent-3: #1e282c;\n            --simple-colors-default-theme-accent-4: #2f3e45;\n            --simple-colors-default-theme-accent-5: #40535b;\n            --simple-colors-default-theme-accent-6: #56707c;\n            --simple-colors-default-theme-accent-7: #718892;\n            --simple-colors-default-theme-accent-8: #7a8f98;\n            --simple-colors-default-theme-accent-9: #8d9fa7;\n            --simple-colors-default-theme-accent-10: #9badb6;\n            --simple-colors-default-theme-accent-11: #b1c5ce;\n            --simple-colors-default-theme-accent-12: #e7eff1;\n          }\n        ',
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([" <slot></slot>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(receiver);
      }
      return desc.value;
    };
  }
  return _get(target, property, receiver || target);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

var SimpleColorsSuper = function SimpleColorsSuper(SuperClass) {
  return (
    /*#__PURE__*/
    (function (_SuperClass) {
      _inherits(_class, _SuperClass);

      _createClass(
        _class,
        [
          {
            key: "render",
            // render function
            value: function render() {
              return (0, _litElement.html)(_templateObject());
            }, // properties available to the custom element for data binding
          },
        ],
        [
          {
            key: "styles",
            //styles function
            get: function get() {
              var styles = (0, _litElement.css)("");

              if (_get(_getPrototypeOf(_class), "styles", this)) {
                styles = _get(_getPrototypeOf(_class), "styles", this);
              }

              return [styles, (0, _litElement.css)(_templateObject2())];
            },
          },
          {
            key: "properties",
            get: function get() {
              return _objectSpread(
                {},
                _get(_getPrototypeOf(_class), "properties", this),
                {
                  /**
                   * a selected accent-"color": grey, red, pink, purple, etc.
                   */
                  accentColor: {
                    attribute: "accent-color",
                    type: String,
                    reflect: true,
                  },

                  /**
                   * make the default theme dark?
                   */
                  dark: {
                    name: "dark",
                    type: Boolean,
                    reflect: true,
                  },
                }
              );
            },
          },
        ]
      );

      function _class() {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(
          this,
          _getPrototypeOf(_class).call(this)
        );
        _this.accentColor = "grey";
        _this.dark = false;
        _this.colors =
          _simpleColorsSharedStyles.SimpleColorsSharedStylesGlobal.colors;
        return _this;
      }

      _createClass(
        _class,
        [
          {
            key: "invertShade",

            /**
             * gets the current shade
             *
             * @param {string} the shade
             * @param {number} the inverted shade
             */
            value: function invertShade(shade) {
              return _simpleColorsSharedStyles.SimpleColorsSharedStylesGlobal.invertShade(
                shade
              );
            },
            /**
             * gets the color information of a given CSS variable or class
             *
             * @param {string} the CSS variable (eg. `--simple-colors-fixed-theme-red-3`) or a class (eg. `.simple-colors-fixed-theme-red-3-text`)
             * @param {object} an object that includes the theme, color, and shade information
             */
          },
          {
            key: "getColorInfo",
            value: function getColorInfo(colorName) {
              return _simpleColorsSharedStyles.SimpleColorsSharedStylesGlobal.getColorInfo(
                colorName
              );
            },
            /**
             * returns a variable based on color name, shade, and fixed theme
             *
             * @param {string} the color name
             * @param {number} the color shade
             * @param {boolean} the color shade
             * @returns {string} the CSS Variable
             */
          },
          {
            key: "makeVariable",
            value: function makeVariable() {
              var color =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : "grey";
              var shade =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : 1;
              var theme =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : "default";
              return _simpleColorsSharedStyles.SimpleColorsSharedStylesGlobal.makeVariable(
                (color = "grey"),
                (shade = 1),
                (theme = "default")
              );
            },
            /**
             * for large or small text given a color and its shade,
             * lists all the colors and shades that would be
             * WCAG 2.0 AA-compliant for contrast
             *
             * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
             * @param {string} color name, e.g. "deep-purple"
             * @param {string} color shade, e.g. 3
             * @param {object} all of the WCAG 2.0 AA-compliant colors and shades
             */
          },
          {
            key: "getContrastingColors",
            value: function getContrastingColors(
              colorName,
              colorShade,
              isLarge
            ) {
              return _simpleColorsSharedStyles.SimpleColorsSharedStylesGlobal.getContrastingColors(
                colorName,
                colorShade,
                isLarge
              );
            },
            /**
             * for large or small text given a color and its shade,
             * lists all the shades of another color that would be
             * WCAG 2.0 AA-compliant for contrast
             *
             * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
             * @param {string} color name, e.g. "deep-purple"
             * @param {string} color shade, e.g. 3
             * @param {string} contrasting color name, e.g. "grey"
             * @param {array} all of the WCAG 2.0 AA-compliant shades of the contrasting color
             */
          },
          {
            key: "getContrastingShades",
            value: function getContrastingShades(
              isLarge,
              colorName,
              colorShade,
              contrastName
            ) {
              return _simpleColorsSharedStyles.SimpleColorsSharedStylesGlobal.getContrastingShades(
                isLarge,
                colorName,
                colorShade,
                contrastName
              );
            },
            /**
             * determines if two shades are WCAG 2.0 AA-compliant for contrast
             *
             * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
             * @param {string} color name, e.g. "deep-purple"
             * @param {string} color shade, e.g. 3
             * @param {string} contrasting color name, e.g. "grey"
             * @param {string} contrast shade, e.g. 12
             * @param {boolean} whether or not the contrasting shade is WCAG 2.0 AA-compliant
             */
          },
          {
            key: "isContrastCompliant",
            value: function isContrastCompliant(
              isLarge,
              colorName,
              colorShade,
              contrastName,
              contrastShade
            ) {
              return _simpleColorsSharedStyles.SimpleColorsSharedStylesGlobal.isContrastCompliant(
                isLarge,
                colorName,
                colorShade,
                contrastName,
                contrastShade
              );
            },
          },
        ],
        [
          {
            key: "tag",
            get: function get() {
              return "simple-colors";
            },
          },
        ]
      );

      return _class;
    })(SuperClass)
  );
};
/**
 * `simple-colors`
 * a shared set of styles for `@lrnwebcomponents`
### Styling
See demo of "all of the colors" (`demo/colors.html`) for styling.
 *

 * @demo ./demo/index.html demo
 * @demo ./demo/how.html getting started
 * @demo ./demo/colors.html all of the colors
 * @demo ./demo/picker.html simple-colors-picker
 * @demo ./demo/extending.html extending simple-colors
 * @element simple-colors
 */

exports.SimpleColorsSuper = SimpleColorsSuper;

var SimpleColors =
  /*#__PURE__*/
  (function (_SimpleColorsSuper) {
    _inherits(SimpleColors, _SimpleColorsSuper);

    function SimpleColors() {
      _classCallCheck(this, SimpleColors);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(SimpleColors).apply(this, arguments)
      );
    }

    return SimpleColors;
  })(SimpleColorsSuper(_litElement.LitElement));

exports.SimpleColors = SimpleColors;
window.customElements.define(SimpleColors.tag, SimpleColors);
