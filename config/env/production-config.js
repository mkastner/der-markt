const baseConfig = require('./base-config');

module.exports = Object.assign(baseConfig, {
  logLevel: 'info',
  //assetUri: 'https://fmh-finanzberatung.github.io/fmh-simple-site',
  assetUri: 'https://www.der-markt.com',
  baseUri: 'https://www.der-markt.com',
  hashedAssetUris: true,
});
