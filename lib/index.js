var dino = require('dino'),
    restify = require('restify'),
    helper = require('./helper');

var Stooge = {
    
    get: function (name) {
        return this.options[name];
    },
    
    set: function (name, o) {
        this.options[name] = o;
        return this;
    },
    
    config: function (o) {
        return this.set('config', o);
    },
    
    version: function (o) {
        return this.set('version', o);
    },
    
    models: function (o) {
        return this.set('models', o);
    },
    
    port: function (o) {
        return this.set('port', o);
    },
    
    listen: function (o) {
        return this.port(o).start();
    },
    
    start: function () {
        
        var models = this.get('models'),
            version = this.get('version'),
            server = restify.createServer({
                version: version
            });
        
        for (name in models)
        {
            routes(server, name, models[name]);
        }
        
        documentation(server);
        
        server.listen(8080, function(){
          console.log('%s listening at %s', server.name, server.url);
        });
        
        return this;
    }
    
};

var routes = function (server, name, Model) {
    
    server.get([name, ':hash'].join('/'), function(req, res, next){
        Model.find({}, function(err, collection){
            res.send(collection.toJSON());
        });
    });
    
};

var documentation = function (server) {
    
    server.get('/', function(req, res, next){
        res.send();
    });
    
};

module.exports = exports = function () {
    
    var own = {
            options: {
                config: {},
                version: 1,
                models: {},
                port: 8080
            }
        };
    
    return Object.create(Stooge, helper.ownProperties(own));
};