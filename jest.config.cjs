module.exports = {  
    transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
    moduleNameMapper: {
        '^uuid$': 'uuid/dist/esm/index.js', // Example mapping for 'uuid'
      },
    testEnvironment: "jsdom",
  }