module.exports = {
  "stories": [
    "../../src/components/**/*.stories.mdx",
    "../../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "refs": {
    otherdemo: {
      title: "Other project from different repo",
      url: "https://632045bbdda27045fcd04467-pidpxkzuqp.chromatic.com/"
    }
  }
}