exports.config = {
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
	 seleniumAddress: 'http://192.168.99.100:4444/wd/hub', 
     browserName: 'chrome',
	 shardTestFiles: true,
     maxInstances: 2
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',


  specs: ['mytest2.js'],
 
  jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
