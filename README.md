# WebdriverIOv5
WebdriverIO v5, Selenium WebDriver, JavaScript, Chai &amp; More!

# Install Dependencies

1. npm i --save-dev webdriverio@latest
2. npm i --save-dev @wdio/cli
3. npm i --save-dev mocha@latest
4. npm i --save-dev selenium-standalone@latest
5. npm i --save-dev @wdio/selenium-standalone-service

# Config wdio file
1. ./node_modules/.bin/wdio config (on terminal)
2. Set the options
- @wdio/local-runner
- @wdio/mocha-framework
- @wdio/spec-reporter
- wdio-chromedriver-service
- @wdio/sync
- chromedriver

# Config Babel
1. npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
2. Create file babel.config.js
3. Setup babel on wdio file in: before: function() {
    require('@babel/register')
},
4. Setup mocha Options add line: compilers: ['js:@babel/register']  

# Install Seleniun Standalone
1. ./node_modules/.bin/selenium-standalone install 
2. ./node_modules/.bin/selenium-standalone start
3. add ./node_modules/.bin/selenium-standalone start in json scripts

# Altering Selenium Server Port Number
1. In wdio file in services change for:
services: ['selenium-standalone'],
port: 9999,
seleniumArgs:{
    seleniumArgs:['-port','9999']
},

# ChromeDriver Setup
1. npm install wdio-chromedriver-service --save-dev
2. npm install chromedriver --save-dev
3. In wdio file , in services change services: ['selenium-standalone'] for services: ['chromedriver'],
4. Remove:
 port: 9999,
    seleniumArgs:{
    seleniumArgs:['-port','9999']
5. Uncomment the path




