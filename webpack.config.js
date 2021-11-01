const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: 'index.js',
  output: {
    filename: 'main.js',,
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }
  module: {
    rules: [
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass');
          }
        }
      ]
    ]
  }
}