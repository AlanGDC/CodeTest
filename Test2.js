var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
client
    .init()
    // 1 - Go to webdriver.io
    .url('http://webdriver.io/')

    // 2 - Click on "API"
    .click('/html/body/nav/ul/li[4]/a')

    // 3 - Complete "Search"
    .setValue('/html/body/section/div/section[1]/input','addValue')
	
	// 4 - Click on "addValue"
    .click('/html/body/section/div/section[2]/nav/div[1]/a[1]')
	
	// 5 - Get title, must be "WebdriverIO - Selenium Standalone Service"
	
    .getTitle().then(function(title) {
		if (title=='WebdriverIO - addValue')
		{	console.log('OK! title was: "' + title + '"');
		} else {
			console.log('ERROR, title was NOT : "WebdriverIO - addValue", it was:" ' + title + ' "');
		}
	})
    .end();