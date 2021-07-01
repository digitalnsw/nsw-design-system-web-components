import { html } from "lit-element/lit-element.js";
import {
  withKnobs,
  withWebComponentsKnobs,
  text,
  boolean,
} from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@digitalnsw/storybook-utilities/storybook-utilities.js";
import { NswCore } from "./nsw-core.js";
// need to account for polymer goofiness when webpack rolls this up

export default {
  title: "Core|NswCore",
  component: "nsw-core",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" },
  },
};
const utils = new StorybookUtilities();
export const NswCoreStory = () => {
  return utils.makeElementFromClass(NswCore);
};
