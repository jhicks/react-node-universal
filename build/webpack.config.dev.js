import webpack from 'webpack';
import path from 'path';
import config from '../config/server';

const dist = path.resolve(__dirname, "../dist");

export default {
  devtool: 'inline-source-map',
  entry: [
    `webpack-dev-server/client?http://localhost:${config.devPort}`,
    'webpack/hot/only-dev-server',
    './src/client' // root is proess.cwd() : http://webpack.github.io/docs/configuration.html#context
  ],
  output: {
    path: dist,
    filename: 'app.js',
    publicPath: `http://localhost:${config.devPort}/assets/`
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__   : true,
      __SERVER__   : false,
      __DEV__      : true,
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['','.js', '.jsx']
  },
  module: {
    loaders : [{
      test : /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders : ['react-hot', 'babel?stage=0']
    }]
  }
};
