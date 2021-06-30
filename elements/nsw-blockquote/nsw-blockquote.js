/**
 * Copyright 2021
 * @license MIT, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";

/**
 * `nsw-blockquote`
 * `Blockquotes give prominence to a section of text quoted from another source.    `
 * @demo demo/index.html
 * @element nsw-blockquote
 */
class NswBlockquote extends LitElement {
  //styles function
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      `,
    ];
  }

  // Template return function
  render() {
    return html` <slot></slot>
      <div>${this.text}</div>
      <div>${this.cite}</div>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,

      text: {
        name: "text",
        type: String,
        value: "",
        reflectToAttribute: true,
        observer: "_textChanged",
      },
      cite: {
        name: "cite",
        type: String,
        value: "",
        reflectToAttribute: true,
        observer: "_citeChanged",
      },
    };
  }

  /**
   * Convention we use
   */
  static get tag() {
    return "nsw-blockquote";
  }

  /**
   * HTMLElement
   */
  constructor() {
    super();
  }
  /**
   * LitElement ready
   */
  firstUpdated(changedProperties) {}
  /**
   * LitElement life cycle - property changed
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      /* notify example
      // notify
      if (propName == 'format') {
        this.dispatchEvent(
          new CustomEvent(`${propName}-changed`, {
            detail: {
              value: this[propName],
            }
          })
        );
      }
      */
      /* observer example
      if (propName == 'activeNode') {
        this._activeNodeChanged(this[propName], oldValue);
      }
      */
      /* computed example
      if (['id', 'selected'].includes(propName)) {
        this.__selectedChanged(this.selected, this.id);
      }
      */
    });
  }
  // Observer text for changes
  _textChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }

  // Observer cite for changes
  _citeChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }
}
customElements.define(NswBlockquote.tag, NswBlockquote);
export { NswBlockquote };
