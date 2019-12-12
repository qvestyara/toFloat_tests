module.exports = function(config) {
  config.set({
    files: ["src/index.js", "test/test.js"],
    mutate: ["src/*.js"],
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text"],
    testRunner: "mocha",
    testFramework: "mocha",
    coverageAnalysis: "off",
    webpack: {
      configFile: "webpack.config.js"
    },
    babel: {
      // Location of your .babelrc file, set to `null` to
      optionsFile: ".babelrc",
      // Override options here:
      options: {
        // presets: ['@babel/env'],
        // plugins: ['transform-es2015-spread']
      },
      // Add extensions here
      extensions: [
        /*'.ts'*/
      ]
    },
    transpilers: [
      "babel" // Enable the babel transpiler
    ]
  });
};
