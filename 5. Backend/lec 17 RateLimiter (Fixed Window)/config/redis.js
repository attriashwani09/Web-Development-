const redis = require("redis") ;

const redisClient = redis.createClient({
    username: 'default',
    password: 'CRtF278ah3KekWqxQTFn07SwvvIkDKsQ',
    socket: {
        host: 'water-look-sleek-26341.db.redis.io',
        port: 10824
    }
})  


module.exports = redisClient ;