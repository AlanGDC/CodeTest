var myChromeBrowser = browser.select('myChromeBrowser');
var myFirefoxBrowser = browser.select('myFirefoxBrowser');
 
myChromeBrowser
    .setValue('#message', 'Hi, I am Chrome')
    .click('#send');
 
myFirefoxBrowser
    .waitForExist('.messages', 5000)
    .getText('.messages').then(function(messages) {
        assert.equal(messages, 'Hi, I am Chrome');
    });