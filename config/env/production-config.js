const baseConfig = require('./base-config');

module.exports = Object.assign(baseConfig, {
  logLevel: 'info',
  //assetUri: 'https://fmh-finanzberatung.github.io/fmh-simple-site',
  //assetUri: 'https://static.fmh.de/sites/www.fmh.de',
  //baseUri: 'https://www.fmh.de',
  hashedAssetUris: true,
});
