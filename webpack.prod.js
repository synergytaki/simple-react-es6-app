const config = require('./webpack.base');

const basePath = process.cwd();
config.output.path = `${basePath}/dist`;
config.mode = 'production';
config.performance = {
  hints: false,
};

module.exports = config;