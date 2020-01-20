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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      },
      // {
      //   test: /\.css$/i,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //     },
      //     { 
      //       loader: "css-loader",
      //       options: {
      //         modules: true,
      //         localIdentName: "[name]__[local]__[hash:base64:5]",
      //       }
      //     },
      //   ],
      // },
      {
        test: /\.(sass|scss)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              sass: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          {
            loader: 'sass-loader',
          },
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
      '@reducer': path.resolve(__dirname, 'src/reducers'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@constant': path.resolve(__dirname, 'src/constants'),
      '@action': path.resolve(__dirname, 'src/actions'),
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