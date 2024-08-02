const { releaseRules } = require("semantic-release-npm-github-publish");
const customTransform = require("semantic-release-npm-github-publish/commit-transform");
const globalConfigFactory = require('../.releaserc');

/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  ...globalConfigFactory(customTransform, releaseRules),
  tagFormat: "gesture-firebase-user-v${version}",
};