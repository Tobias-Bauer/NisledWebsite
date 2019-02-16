const jwt = require("jsonwebtoken");


module.exports = (req, res, next)  => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, '3NdEfkYB{wMC3;ordd*J4Wn9r7xnH#ekA$D6GAsiLdV3pe4j]r9?8cBnTZJ/[LC@');
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Auth failed'
    })
  }
};
