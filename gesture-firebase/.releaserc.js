const { releaseRules } = require("semantic-release-npm-github-publish");
const customTransform = require("semantic-release-npm-github-publish/commit-transform");
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
  writerOpts: {
    transform: (commit, context) => {
      if (commit?.scope === 'no-release') {
        return null;
      }
      return customTransform(commit, context);
    }
  },
};