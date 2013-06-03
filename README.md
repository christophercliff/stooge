# Stooge

A stupid node.js module for creating a self-documenting REST web service from [Dino](https://github.com/christophercliff/dino) models.

## Installation

```
$ npm install stooge
```

## Usage

```js
require('stooge')() 
    .config({
        accessKeyId: 'YOUR_KEY',
        secretAccessKey: 'YOUR_SECRET',
        region: 'us-east-1'
    })
    .version(1)
    .models({
        'users': require('./models/user'),
        'posts': require('./models/post'),
        'replies': require('./models/reply')
    })
    .listen(8080);
```