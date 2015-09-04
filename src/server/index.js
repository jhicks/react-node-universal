// This is the entry point to the server
// Its main purpose is to load babel for es2015 support and bootstrap the server

// use harmony features
require("babel/register");

// Prevent issues with libraries using this var (see http://tinyurl.com/pcockwk)
delete process.env.BROWSER;

const config = require('../../config/server');

require('./init')(config, function(cfg, app) {
  console.log('koa server is running on port ' + cfg.port);
});
