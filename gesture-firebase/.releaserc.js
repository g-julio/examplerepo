const globalConfig = require('../.releaserc');

/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  ...globalConfig,
  tagFormat: "v${version}",
};