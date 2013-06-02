var helper = require('./helper');

var Stooge = {
    
    set: function (name, o) {
        this.options[name] = o;
    },
    
    config: function (o) {
        this.set('config', o);
        return this;
    },
    
    version: function (o) {
        this.set('version', o);
        return this;
    },
    
    models: function (o) {
        this.set('models', o);
        return this;
    },
    
    listen: function (o) {
        this.set('port', o);
        this.start();
        return this;
    },
    
    start: function () {
        
    }
    
};

module.exports = exports = function () {
    
    var ownProperties = {
        options: {}
    };
    
    return Object.create(Stooge, helper.ownProperties(ownProperties));
};