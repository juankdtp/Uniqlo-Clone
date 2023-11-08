const { tokenVerification } = require("../helpers/jwt");

const authentication = (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw new Error("TOKEN_INVALID");
    }

    const verified = tokenVerification(access_token);

    const { userId, userEmail } = verified;

    req.additionalData = {
      userId,
      userEmail,
    };

    next();
  } catch (err) {
    console.log(err, "authentication");
    next(err);
  }
};

module.exports = authentication;
