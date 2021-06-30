/**
 * Copyright 2021
 * @license MIT, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";

/**
 * `nsw-button`
 * `Buttons provide users with the ability to submit an action or follow a link to another location. `
 * @demo demo/index.html
 * @element nsw-button
 */
class NswButton extends LitElement {
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
      <div>${this.type}</div>
      <div>${this.label}</div>
      <div>${this.link}</div>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,

      type: {
        name: "type",
        type: String,
        value: "primary",
        reflectToAttribute: true,
        observer: "_typeChanged",
      },
      label: {
        name: "label",
        type: String,
        value: "Button",
        reflectToAttribute: true,
        observer: "_labelChanged",
      },
      link: {
        name: "link",
        type: String,
        value: "",
        reflectToAttribute: false,
        observer: "_linkChanged",
      },
    };
  }

  /**
   * Convention we use
   */
  static get tag() {
    return "nsw-button";
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
  // Observer type for changes
  _typeChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }

  // Observer label for changes
  _labelChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }

  // Observer link for changes
  _linkChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }
}
customElements.define(NswButton.tag, NswButton);
export { NswButton };
