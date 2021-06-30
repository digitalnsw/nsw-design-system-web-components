/**
 * Copyright 2021
 * @license MIT, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";

/**
 * `nsw-accordion`
 * `An accordion is a series of expandable vertical panels, designed to save space on a page by hiding content and revealing it as required.`
 * @demo demo/index.html
 * @element nsw-accordion
 */
class NswAccordion extends LitElement {
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
      <div>${this.title}</div>
      <div>${this.content}</div>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,

      title: {
        name: "title",
        type: Array,
        value: "",
        reflectToAttribute: true,
        observer: "_titleChanged",
      },
      content: {
        name: "content",
        type: Object,
        value: "",
        reflectToAttribute: true,
        observer: "_contentChanged",
      },
    };
  }

  /**
   * Convention we use
   */
  static get tag() {
    return "nsw-accordion";
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
  // Observer title for changes
  _titleChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }

  // Observer content for changes
  _contentChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }
}
customElements.define(NswAccordion.tag, NswAccordion);
export { NswAccordion };
