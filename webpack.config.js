const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
      // { test: /\.(jpe?g|png|gif|svg)$/i,
      //   use: [
      //     'url-loader?limit=10000',
      //     'img-loader'
      //   ]
      // },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader?name=/GitHub-Mark/PNG/GitHub-Mark-32px.png',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(svg)$/i,
        use: [
          {
            loader: 'file-loader?name=linkedin-brands.svg',
            loader: 'file-loader?name=free-code-camp-brands.svg',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      // {
      //   test: /\.(svg)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader?name=free-code-camp-brands.svg',
      //       options: {
      //         limit: 10000,
      //       },
      //     },
      //   ],
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}