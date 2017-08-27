var assert = require('assert');
describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
		
		// 1 - Go to webdriver.io
		browser.url('http://webdriver.io');
		
		// 2 - Click on "Developer Guide"
		browser.click('/html/body/nav/ul/li[3]/a')

		// 3 - Click on "Services"
		browser.click('/html/body/section/div/section/nav/h3[5]/a')
	
		// 4 - Click on "Selenium Standalone"
		browser.click('/html/body/section/div/section/nav/div[5]/a[5]')

		
		// 5 - Get title, must be "WebdriverIO - Selenium Standalone Service"
		var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - Selenium Standalone Service');

		});
});

