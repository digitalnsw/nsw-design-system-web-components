import { html } from "lit-element/lit-element.js";
import { withKnobs, withWebComponentsKnobs } from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@digitalnsw/storybook-utilities/storybook-utilities.js";
import { SimpleColorsPicker } from "@digitalnsw/simple-colors/lib/simple-colors-picker.js";

export default {
  title: "Forms|Picker",
  component: "simple-colors-picker",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" },
  },
};

const utils = new StorybookUtilities();
export const SimpleColorsPickerStory = () => {
  let rawProps = SimpleColorsPicker.properties;
  delete rawProps.accentColor;
  delete rawProps.dark;
  let knobs = utils.getKnobs(utils.getElementProperties(rawProps), {
    label: 'Select a color from "simple-colors"',
  });
  return utils.makeElement(SimpleColorsPicker, knobs);
};
