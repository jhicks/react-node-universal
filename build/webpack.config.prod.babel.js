import webpack from 'webpack';
import path from 'path';
import Manifest from 'webpack-manifest-plugin';

const dist = path.resolve(__dirname, "../dist/assets");
const entry = path.resolve(__dirname, "../src/client");

export default {
  devtool: "source-map",
  entry: { app: entry },
  output: {
    path: dist,
    filename: "[name]-[hash].js",
    chunkFilename: "[name]-[chunkhash].js",
    publicPath: "/assets/"
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__   : true,
      __SERVER__   : false,
      __DEV__      : false,
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new Manifest()
  ],
  resolve: {
    extensions: ['','.js', '.jsx']
  },
  module: {
    loaders : [{
      test : /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders : ['babel?stage=0']
    }]
  }
};

