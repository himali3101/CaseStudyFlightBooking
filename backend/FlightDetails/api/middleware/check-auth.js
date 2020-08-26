const jwt = require('jsonwebtoken')

exports.verifyToken = function (req, res, next) {

    let token = req.headers["x-access-token"];
    console.log(token)
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            console.log(err)
            return res.status(401).send({ message: "Unauthorized!" + err });
        }
        req.userId = decoded.userId;
        console.log(req.userId)
        next();
    });


}