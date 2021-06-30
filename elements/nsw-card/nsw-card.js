/**
 * Copyright 2021
 * @license MIT, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";

/**
 * `nsw-card`
 * `Cards group related content or tasks to make it easier for users to scan, read, and find information.`
 * @demo demo/index.html
 * @element nsw-card
 */
class NswCard extends LitElement {
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
      <div>${this.link}</div>
      <div>${this.copy}</div>
      <div>${this.icon}</div>
      <div>${this.tag}</div>
      <div>${this.date}</div>
      <div>${this.image}</div>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,

      title: {
        name: "title",
        type: String,
        value: "",
        reflectToAttribute: true,
        observer: "_titleChanged",
      },
      link: {
        name: "link",
        type: String,
        value: "",
        reflectToAttribute: true,
        observer: "_linkChanged",
      },
      copy: {
        name: "copy",
        type: String,
        value: "",
        reflectToAttribute: true,
        observer: "_copyChanged",
      },
      icon: {
        name: "icon",
        type: String,
        value: "",
        reflectToAttribute: true,
        observer: "_iconChanged",
      },
      tag: {
        name: "tag",
        type: String,
        value: "",
        reflectToAttribute: true,
        observer: "_tagChanged",
      },
      date: {
        name: "date",
        type: String,
        value: "",
        reflectToAttribute: true,
        observer: "_dateChanged",
      },
      image: {
        name: "image",
        type: String,
        value: "",
        reflectToAttribute: true,
        observer: "_imageChanged",
      },
    };
  }

  /**
   * Convention we use
   */
  static get tag() {
    return "nsw-card";
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

  // Observer link for changes
  _linkChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }

  // Observer copy for changes
  _copyChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }

  // Observer icon for changes
  _iconChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }

  // Observer tag for changes
  _tagChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }

  // Observer date for changes
  _dateChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }

  // Observer image for changes
  _imageChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }
}
customElements.define(NswCard.tag, NswCard);
export { NswCard };
