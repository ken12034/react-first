const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const CleanWebpackPlugin = require('clean-webpack-plugin');

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    main: [
      './src/index.tsx',
    ]
  },
  output: {
    filename: "main.js",
    path: path.join(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
              loader: 'awesome-typescript-loader'
            }
        ]
      },
      // {  //'style-loader', 由於某種原因不能共存
      //   test: /\.css$/,
      //   exclude: [/node_modules/],
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: "css-loader",
      //       options: {
      //         modules: true,
      //         importLoaders: 1,
      //         localIdentName: "[name]__[local]__[hash:base64:5]",
      //       },
      //     }
          
      //   ],
      // },
      {
        test: /\.(sass|scss)$/,
        exclude: [/node_modules/],
        use: [
          // 'css-hot-loader',
         MiniCssExtractPlugin.loader,
          "css-modules-typescript-loader",
          { loader: "css-loader", options: { modules: true } },
          'sass-loader',
        ]
      },
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".css", ".sass", ".ts", ".tsx"],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@scss': path.resolve(__dirname, 'src/scss'),
    },
    modules: [
      path.resolve(__dirname, 'src/'),
      path.resolve(__dirname, 'node_modules/'),
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};