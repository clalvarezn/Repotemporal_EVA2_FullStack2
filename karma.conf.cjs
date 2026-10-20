module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'test/**/*.spec.js', watched: false },
      { pattern: 'test/**/*.spec.jsx', watched: false },
      { pattern: 'src/**/*.spec.js', watched: false },
      { pattern: 'src/**/*.spec.jsx', watched: false }
    ],
    preprocessors: {
      'test/**/*.spec.js': ['webpack'],
      'test/**/*.spec.jsx': ['webpack'],
      'src/**/*.spec.js': ['webpack'],
      'src/**/*.spec.jsx': ['webpack']
    },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['.js', '.jsx']
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  ['@babel/preset-react', { runtime: 'automatic' }]
                ],
                plugins: [
                  ['babel-plugin-istanbul', {
                    include: ['src/**/*.js', 'src/**/*.jsx']
                  }]
                ]
              }
            }
          }
        ]
      }
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' }
      ]
    },
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--headless=new'
        ]
      }
    },
    singleRun: true,
    browserNoActivityTimeout: 120000,
    client: {
      clearContext: false
    }
  });
};
