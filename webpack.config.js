const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watchOptions: {
    ignored: /node_modules/,
    ignored: /styles/,
    ignored: /dist/
  },
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {  test: /\.m?js$/,
         exclude: /node_modules/,
         use: {
           loader: "babel-loader",
           options: {
             presets: ['@babel/preset-env', '@babel/preset-react']
           }
          }
      },
      { test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/assets/[name].[ext]',
              limit: 10000,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "dist", "index.html"),
    }),
  ],
}