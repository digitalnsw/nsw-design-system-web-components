import { html } from "lit-element/lit-element.js";
import {
  withKnobs,
  withWebComponentsKnobs,
  text,
  boolean,
} from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@digitalnsw/storybook-utilities/storybook-utilities.js";
import { NswBlock } from "./nsw-block.js";
// need to account for polymer goofiness when webpack rolls this up

export default {
  title: "Block|NswBlock",
  component: "nsw-block",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" },
  },
};
const utils = new StorybookUtilities();
export const NswBlockStory = () => {
  return utils.makeElementFromClass(NswBlock);
};
