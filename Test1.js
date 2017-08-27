var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'firefox' } };
var client = webdriverio.remote(options);
client
    .init()
    // 1 - Go to webdriver.io
    .url('http://webdriver.io/')

    // 2 - Click on "Developer Guide"
    .click('/html/body/nav/ul/li[3]/a')

    // 3 - Click on "Services"
    .click('/html/body/section/div/section/nav/h3[5]/a')
	
	// 4 - Click on "Selenium Standalone"
    .click('/html/body/section/div/section/nav/div[5]/a[5]')
	
	// 5 - Get title, must be "WebdriverIO - Selenium Standalone Service"
	
    .getTitle().then(function(title) {
		if (title=='WebdriverIO - Selenium Standalone Service')
		{	console.log('OK! title was: "' + title + '"');
		} else {
			console.log('ERROR, title was NOT : "WebdriverIO - Selenium Standalone Service", it was:' + title + '""');
		}
	})
    .end();