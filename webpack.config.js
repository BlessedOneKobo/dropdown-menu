const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/test.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'test'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  }
};