const { releaseRules } = require("semantic-release-npm-github-publish");

/**
 * Gesture Semantic Release Configuration Factory
 * @type {import('semantic-release').GlobalConfig} semantic-release configuration object.
 */
module.exports = {
  tagFormat: "v${version}",
  branches: [
    "production",
    "staging"
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/npm",
      {
        "npmPublish": false
      }
    ]
  ],
  releaseRules: [
    ...releaseRules,
    { scope: "no-release", release: false }
  ]
};
