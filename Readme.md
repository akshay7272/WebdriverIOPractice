1> To run spec object files from wdio.conf -- npx wdio run ./wdio.conf.js --spec test/specs/HandlingWindowsFrames.js
2> To run suites from wdio.conf.js file --  npx wdio run ./wdio.conf.js --suite endToEndTest
3> To run smoke/regression tests using mocha -- npx wdio run ./wdio.conf.js --mochaOpts.grep smoke/regression 


Added Allure reporting in WebdriverIO for Project Test Reports.

1> npm install @wdio/allure-reporter --save-dev

1.1>  Add Reporter Methods to include--For this we creating allure-results folder(Gives data in xml/json)

1.1.1> //paste this code under/below of reporters: ['spec'],

    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverScreenshotsReporting: false,
    }]],

1.1.2> // Uncomment the afterTest hook and paste this code for take screenshots on test fails

 afterTest: function(test, context, { error, result, duration, passed, retries }) {
      if (error) {
         browser.takeScreenshot();
    }
    },


2> npm i allure-commandline    ---Install this For Generating reports using Commandline in Visual Appearance

2.1> Install the Allure command-line tool, and process the results directory:

    2.2> allure generate [allure_output_dir] && allure open  --brfore this our system have Java JRE
    2.3> npx allure generate allure-results --clean; npx allure open (Another command if not works)

3> Created Scripts on package.json file to run commands directly using npm run scriptname

3.1>  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "SmokeTests": "npx wdio run ./wdio.conf.js --mochaOpts.grep smoke",
    "RegressionTests": "npx wdio run ./wdio.conf.js --mochaOpts.grep regression",
    "GenerateReport": "npx allure generate allure-results --clean",
    "OpenReport": "npx allure open"
  },

3.2> If you want to run SmokeTests then simply use --- npm run SmokeTests