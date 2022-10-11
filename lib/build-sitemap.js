const SitemapBuilder = require('simple-site/lib/build/sitemap.js');
const env = process.env.NODE_ENV || development;
const config = require(`../config/env/${env}-config.js`); 
const Path = require('path');
const log = require('mk-log');

const absoluteDistDir = Path.resolve(config.distDir); 

log.info('absoluteDistDir', absoluteDistDir);

async function main() {
  const sitemapBuilder = await SitemapBuilder({
    hostName: config.baseUri,
    rootDir: absoluteDistDir,
    targetDir: absoluteDistDir,
  });

  //log.info('DirLocations', DirLocations.dist.absolute);
  //log.info('sitemapBuilder', sitemapBuilder);

  await sitemapBuilder.build();
};

main();
