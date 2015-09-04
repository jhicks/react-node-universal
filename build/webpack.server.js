import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import webpackConfig from './webpack.config.dev';

export default (appConfig) => {
  const server = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: { colors: true }
  });

  return server.listen(appConfig.devPort,'localhost', function() {
    console.log('webpack dev server running at localhost:3001');
  });
}
