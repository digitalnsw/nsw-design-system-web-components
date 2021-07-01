import { html } from "lit-element/lit-element.js";
import {
  withKnobs,
  withWebComponentsKnobs,
  text,
  boolean,
} from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@lrnwebcomponents/storybook-utilities/storybook-utilities.js";
import { NswLinklist } from "./nsw-linklist.js";
// need to account for polymer goofiness when webpack rolls this up

export default {
  title: "Linklist|NswLinklist",
  component: "nsw-linklist",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" },
  },
};
const utils = new StorybookUtilities();
export const NswLinklistStory = () => {
  return utils.makeElementFromClass(NswLinklist);
};
