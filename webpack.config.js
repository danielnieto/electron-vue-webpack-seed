var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
watch: true,
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/js/index.js",
  resolve: {
    alias: {vue: 'vue/dist/vue.js'}
},
  output: {
    path: __dirname + "/app/bundles",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false }),
  ],
};
