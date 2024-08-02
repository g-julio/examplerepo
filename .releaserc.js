/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
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
};