const path = require('path');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const imageminMozjpeg = require('imagemin-mozjpeg');
const TerserPlugin = require('terser-webpack-plugin');
const imageminGifsicle = require("imagemin-gifsicle");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");
const imageminMozjpeg = require('imagemin-mozjpeg');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c|le)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `${__dirname}/postcss.config.js`,
                ctx: {
                  env: 'production',
                },
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: './assets/images/[name].[ext]',
            },
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                imageminGifsicle({
                    interlaced: false
                }),
                imageminMozjpeg({
                    progressive: true,
                    arithmetic: false
                }),
                imageminPngquant({
                    floyd: 0.5,
                    speed: 2
                }),
                imageminSvgo({
                    plugins: [
                        { removeTitle: true },
                        { convertPathData: false }
                    ]
                })
            ]
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: 'style.[contentHash].css',
      chunkFilename: '[id].css'
    }),
   ],
  output: {
    filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, 'build'),
  },
});
