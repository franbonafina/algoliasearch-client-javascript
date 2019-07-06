module.exports = {
  extends: ["algolia/jest", "algolia/typescript"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      { packageDir: "./", devDependencies: true }
    ],
    "no-bitwise": ["off"],
    "import/no-extraneous-dependencies": ["off"]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts"]
      }
    }
  }
};