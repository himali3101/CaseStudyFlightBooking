const jwt = require('jsonwebtoken')

exports.verifyToken = function (req, res, next) {

    let token = req.body.headers["x-access-token"];
    if (!token) {
        console.log("**************token**************" + token)
        return res.status(403).send({
            message: "No token provided!",

            token: token
        });
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