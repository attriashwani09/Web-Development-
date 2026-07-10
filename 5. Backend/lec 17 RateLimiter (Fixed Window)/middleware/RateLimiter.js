const redisClient = require("../config/redis");

const rateLimiter = async (req, res, next) => {
  try {
    const ip = req.ip;

    const count = await redisClient.incr(ip);

    // It means i 1 hr only 60 requests can be made 

    if (count > 60) {
      throw new Error(" Limits exceeds ");
    }

    if (count == 1) {
      await redisClient.expire(ip, 3600); // Expires in 60 mins 
    } 

    next() ;

  } 
  catch (err) {
    res.send("Err : " + err.message);
  }
}; 


module.exports = rateLimiter ;
