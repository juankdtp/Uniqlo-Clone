const Redis = require("ioredis");
const redis = new Redis({
  port: 16864, // Redis port
  host: "redis-16864.c292.ap-southeast-1-1.ec2.cloud.redislabs.com", // Redis host
  username: "default", // needs Redis >= 6
  password: process.env.REDIS_PASS,
});

module.exports = redis;
