const Buffer = require("safe-buffer").Buffer;

const Keygrip = require("keygrip");
const keys = require("../../config/keys");
const keygrip = new Keygrip([keys.cookieKey]);

module.exports = user => {
  const sessionObject = {
    passport: {
      // user is a Mongoose model
      // user._id is an Object, must be converted to String
      user: user._id.toString()
    }
  };

  // Generate session string and signature
  const session = Buffer.from(JSON.stringify(sessionObject)).toString("base64");

  const sig = keygrip.sign("session=" + session);

  return { session, sig };
};
