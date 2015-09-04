// Bootstrap the development environment: webpack dev server + app server

require("babel/register");

const config = require('./config/server');
require('./build/webpack.server')(config);

require('./src/server');
