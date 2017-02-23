describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
		console.log("hello");
        browser.get('https://core.opentext.com/users/#/signin');
        element(by.id('emailInput')).sendKeys('svallapu@opentext.com');
        element(by.id('passwordInput')).sendKeys('Smokers123$');
       element(by.css('.btn.btn-default')).click();
       browser.sleep(5000);


    });
});
