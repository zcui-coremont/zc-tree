module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config) {
    // customize the Vite config here
    config.base = "/zc-tree/";

    return config;
  },
};
