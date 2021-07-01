import { html } from "lit-element/lit-element.js";
import {
  withKnobs,
  withWebComponentsKnobs,
  text,
  boolean,
} from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@digitalnsw/storybook-utilities/storybook-utilities.js";
import { NswButton } from "./nsw-button.js";
// need to account for polymer goofiness when webpack rolls this up

export default {
  title: "Button|NswButton",
  component: "nsw-button",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" },
  },
};
const utils = new StorybookUtilities();
export const NswButtonStory = () => {
  return utils.makeElementFromClass(NswButton);
};
