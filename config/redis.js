const redis = require('redis');
const client = redis.createClient({ url: process.env.REDIS_URI });
client.connect().then(() => console.log("Redis connected"));
module.exports = client;