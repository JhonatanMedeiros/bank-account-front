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
  allScriptsTimeout: 120000,
  getPageTimeout: 120000,
  useAllAngular2AppRoots: true,
  restartBrowserBetweenTests: true,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  multiCapabilities: [
    {
      'browserName': 'chrome',
      'name': 'Protractor suite tests',
      chromeOptions: CHROME_OPTIONS,
      loggingPrefs: {
        performance: 'ALL',
        browser: 'ALL',
      },
    },
    // {
    //   'browserName': 'firefox',
    //   'name': 'Protractor suite tests',
    //   'moz:firefoxOptions': {
    //     'args': ['--safe-mode', '--headless']
    //   }
    // }
  ],
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    defaultTimeoutInterval: 120000,
    print: function(msg) { console.log(msg); },
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
