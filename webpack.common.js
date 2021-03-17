const path = require('path')

module.exports = {
  mode: 'development',

  entry: './src/index.tsx',

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },

  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.jsx',
    ],
  },
}
