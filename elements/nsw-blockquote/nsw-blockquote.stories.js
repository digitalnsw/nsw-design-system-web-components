import { html } from "lit-element/lit-element.js";
import {
  withKnobs,
  withWebComponentsKnobs,
  text,
  boolean,
} from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@digitalnsw/storybook-utilities/storybook-utilities.js";
import { NswBlockquote } from "./nsw-blockquote.js";
// need to account for polymer goofiness when webpack rolls this up

export default {
  title: "Blockquote|NswBlockquote",
  component: "nsw-blockquote",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" },
  },
};
const utils = new StorybookUtilities();
export const NswBlockquoteStory = () => {
  return utils.makeElementFromClass(NswBlockquote);
};
