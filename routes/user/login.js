const jwt = require('jsonwebtoken');

const User = require('../../models/user');

const login = async (req, res) => {
    try {
        const { body } = req;
        const { email, password } = body;

        if (!email || !password) {
            return res.send({
                success: false,
                message: "Invalid Details"
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.send({
                success: false,
                message: "Please register first"
            });
        }

        if (user.password !== password) {
            return res.send({
                success: false,
                message: "Wrong Password"
            });
        }

        const token = jwt.sign({ id: user._id }, req.app.get("SECRET_KEY"));

        return res.send({
            success: true,
            message: "Login Successful",
            token
        })

    } catch (err) {
        return res.send({
            success: false,
            message: err.message
        });
    }
}

module.exports = login;
