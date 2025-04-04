import "@axa-fr/design-system-slash-css/dist/Title/Title.scss";
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Title",
};

export default meta;

const MODIFIERS = ["", "content"];

export const Default: StoryObj = {
  render: (args) => {
    const title = document.createElement(args.heading);
    title.innerHTML = args.text;

    title.className += [
      "af-title",
      args.classModifier ? `af-title--${args.classModifier}` : "",
    ].join(" ");

    return title;
  },
  args: {
    text: "Sample Title",
    heading: "h2",
    classModifier: "",
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
    },
    heading: {
      options: ["h2", "h3", "h4"],
      control: { type: "radio" },
    },
  },
};
