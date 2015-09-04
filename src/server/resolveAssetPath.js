import config from '../../config/server';

export default (asset, type) => {
  if(__DEV__) {
    // running in a dev environment so load the assets from webpack dev server
    return `http://localhost:${config.devPort}/assets/${asset}.${type}`
  } else {
    // load the manifest file
    const assets = require('../../dist/assets/manifest.json');
    return `/assets/${assets[`${asset}.${type}`]}`;
  }
}
