# WebdriverIO 
WebdriverIO example

How to run it locally:

 1- install nodejs:
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - sudo apt-get install 

 2- Install WebdriverIO:
npm install -save-dev webdriverio

 3- Download Selenium-standalone server:
npm install -g selenium-standalone

 4- Create dir repository:
mkdir code-test

 6- Download repository:
git clone https://github.com/AlanGDC/CodeTest.git

 7- Install Selenium-standalone and start:
selenium-standalone install
selenium-standalone start

 8- Execute Test1.js and Test2.js individualy (opcinaly for test):
node Test1.js
node Test2.js

 9- Execute wdio config:
./node_modules/.bin/wdio config

 10- Select this answers to config:
Q: Where do you want to execute your tests?
A: On my local machine

Q: Which framework do you want to use?
A: mocha

Q: Shall I install the framework adapter for you?
A: Yes (just press enter)

Q: Where are your test specs located?
A: ./test/specs/*/.js (just press enter)

Q: Which reporter do you want to use?
A: dot (just press space and enter)

Q: Shall I install the reporter library for you?
A: Yes (just press enter)

Q: Do you want to add a service to your test setup?
A: none (just press enter, let’s skip this for simplicity)

Q: Level of logging verbosity:
A: silent (just press enter)

Q: In which directory should screenshots gets saved if a command fails?
A: ./errorShots/ (just press enter)

Q: What is the base url?
A: http://localhost (just press enter)



 10- Execute wdio :
./node_modules/.bin/wdio wdio.conf.js
