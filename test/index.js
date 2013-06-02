var should = require('should'),
    stooge = require('../');

describe('stooge', function(){
    
    it('should expose the API', function(){
        
        stooge()
            .config()
            .version()
            .models()
            .listen();
        
    });
    
});