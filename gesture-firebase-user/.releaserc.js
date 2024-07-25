const globalConfig = require('../.releaserc');

/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  ...globalConfig,
  tagFormat: "gesture-firebase-user-v${version}",
};