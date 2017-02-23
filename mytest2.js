describe ("it is sample test", function(){
	
	it("where we actually test",function(){
		browser.get("http://www.thetestroom.com/jswebapp");
		element(by.model("person.name")).sendKeys("Rammmmm!");
		element(by.binding("person.name")).getText().then(function(text){
		console.log(text);
		browser.sleep(5000);
		})
   
	
	});
});