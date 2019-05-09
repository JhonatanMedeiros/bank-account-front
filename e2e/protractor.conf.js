// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

const CHROME_OPTIONS = {
  'args': ['--js-flags=--expose-gc', '--no-sandbox', '--headless', '--disable-dev-shm-usage'],
  'perfLoggingPrefs': {
    'traceCategories':
      'v8,blink.console,devtools.timeline,disabled-by-default-devtools.timeline,blink.user_timing'
  }
};

exports.config = {
  allScriptsTimeout: 11000,
  useAllAngular2AppRoots: true,
  restartBrowserBetweenTests: true,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: CHROME_OPTIONS,
    loggingPrefs: {
      performance: 'ALL',
      browser: 'ALL',
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    print: function(msg) { console.log(msg); },
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
