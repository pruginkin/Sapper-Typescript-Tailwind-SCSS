const tailwindcss = require("tailwindcss");
const cssnano = require("cssnano");

module.exports = {
  plugins: [tailwindcss("./tailwind.config.js"), cssnano],
};
