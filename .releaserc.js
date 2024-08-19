const { releaseRules } = require("semantic-release-npm-github-publish");
const customTransform = require("semantic-release-npm-github-publish/commit-transform");

/**
 * Gesture Semantic Release Configuration Factory
 * @type {import('semantic-release').GlobalConfig} semantic-release configuration object.
 */
module.exports = {
  tagFormat: "v${version}",
  branches: [
    "production"
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator"
  ],
  releaseRules: [
    ...releaseRules,
    { scope: "no-release", release: false }
  ]
};