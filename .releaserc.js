const { releaseRules } = require("semantic-release-npm-github-publish");
const customTransform = require("semantic-release-npm-github-publish/commit-transform");

/**
 * Gesture Semantic Release Configuration Factory
 * @type {import('semantic-release').GlobalConfig} semantic-release configuration object.
 */
module.exports = {
  tagFormat: "v${version}",
  ci: false,
  branches: [
    "production"
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        draftRelease: true,
        successComment: false,
        failTitle: false,
        failComment: false,
      }
    ]
  ],
  extends: "semantic-release-npm-github-publish",
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