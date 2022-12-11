const path = require("path");

module.exports = {
  entry: "./src/index.js",
  target: "node",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimize: false,
  },
};
