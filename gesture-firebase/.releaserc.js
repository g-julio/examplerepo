const { releaseRules } = require("semantic-release-npm-github-publish");
const globalConfig = require('../.releaserc');

/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  ...globalConfig,
  tagFormat: "gesture-firebase-v${version}",
  releaseRules: [
    ...releaseRules,
    { scope: "no-release", release: false }
  ],
};