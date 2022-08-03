const { log } = require("console");
const glob = require("glob");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("src/components/");
  eleventyConfig.addWatchTarget("src/core-components/");

  const paths = {
    components: path.join(process.cwd(), "src/components/**/*.mk.js"),
    coreComponents: path.join(process.cwd(), "src/core-components/**/*"),
  };

  const components = glob.sync(paths.components);
  const coreComponents = glob.sync(paths.coreComponents);

  for (const component of components) {
    const componentName = path.parse(component).base.replace(/\.mk\.js/, "");
    eleventyConfig.addPairedShortcode(componentName, require(component));
  }

  for (const component of coreComponents) {
    eleventyConfig.addShortcode(path.parse(component).name, require(component));
  }

  return {
    dir: {
      input: "site",
      output: "build",
    },
  };
};
