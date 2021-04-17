const Zabo = require("zabo-sdk-js");

var _zabo;
const zabo = async () => {
  if (_zabo) return _zabo;

  _zabo = await Zabo.init({
    env: "sandbox",
    apiKey: process.env.ZABO_API_KEY,
    secretKey: process.env.ZABO_SECRET_KEY,
  });

  return _zabo;
};

module.exports = { zabo };
