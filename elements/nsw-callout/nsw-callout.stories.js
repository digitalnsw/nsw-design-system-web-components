import { html } from "lit-element/lit-element.js";
import {
  withKnobs,
  withWebComponentsKnobs,
  text,
  boolean,
} from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@digitalnsw/storybook-utilities/storybook-utilities.js";
import { NswCallout } from "./nsw-callout.js";
// need to account for polymer goofiness when webpack rolls this up

export default {
  title: "Callout|NswCallout",
  component: "nsw-callout",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" },
  },
};
const utils = new StorybookUtilities();
export const NswCalloutStory = () => {
  return utils.makeElementFromClass(NswCallout);
};
