const redisClient = require("../config/redis");

// Set data in Redis with expiration time
exports.setCache = async (key, value, expiration = 600) => {
  try {
    await redisClient.setEx(key, expiration, JSON.stringify(value));
    console.log(`Cached data for key: ${key}`);
  } catch (error) {
    console.error("Error setting cache:", error);
  }
};

// Get data from Redis cache
exports.getCache = async (key) => {
  try {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error retrieving cache:", error);
    return null;
  }
};

// Delete data from Redis cache
exports.deleteCache = async (key) => {
  try {
    await redisClient.del(key);
    console.log(`Cache deleted for key: ${key}`);
  } catch (error) {
    console.error("Error deleting cache:", error);
  }
};
