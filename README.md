```js
require('stooge') 
    .config({
        accessKeyId: 'YOUR_KEY',
        secretAccessKey: 'YOUR_SECRET',
        region: 'us-east-1'
    })
    .version(1)
    .models({
        'users': require('./models/user'),
        'posts': require('./models/post')
    })
    .listen(3002);

GET '/1/users/:hash_key/:range_key'
PUT '/1/users/:hash_key'
DELETE '/1/users/:hash_key'
```