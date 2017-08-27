var assert = require('assert');
describe('ERROR ', function() {
    it(' Not the results "addValue"  :' , function () {
				
		// 1 - Go to webdriver.io
		browser.url('http://webdriver.io');
		
		// 2 - Click on "API"
		browser.click('/html/body/nav/ul/li[4]/a')

		// 3 - Complete "Search" with 'addValue'
		browser.setValue('/html/body/section/div/section[1]/input','addValue')
	
		// 4 - Click on "addValue"
		browser.click('/html/body/section/div/section[2]/nav/div[1]/a[1]')

		
		// 5 - Get title, must be "WebdriverIO - addValue"
		var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - addValue');

		});
});

