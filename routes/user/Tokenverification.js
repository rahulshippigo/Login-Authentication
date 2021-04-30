const jwt = require('jsonwebtoken');

const User = require('../../models/user');

const Tokenverification = async (req, res, next) => {
    try {
        const { headers } = req;
        const { token } = headers;

        if (!token) {
            return res.send({
                success: false,
                message: "Token is Invalid"
            });
        }

        const decoded = jwt.verify(token, req.app.get("SECRET_KEY"));

        let user = await User.findOne({ _id: decoded.id }, { password: 0 });
        if (!user) {
            return res.send({
                success: false,
                message: "User Not Found"
            });
        }

        req.user = user;

        return next();
    } catch (err) {
        return res.send({
            success: false,
            message: err.message
        });
    }
}

module.exports = Tokenverification;
