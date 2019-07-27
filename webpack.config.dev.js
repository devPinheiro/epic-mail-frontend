const webPackMerge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.config");

module.exports = webPackMerge(baseConfig, {
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "app.js",
    publicPath: "/"
  }
});
