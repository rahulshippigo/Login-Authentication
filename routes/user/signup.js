const User = require('../../models/user');

const signup = async (req, res) => {
    try {
        const { body } = req;
        const { name, phone, email, password } = body;

        if (!name || !phone || !email || !password) {
            return res.send({
                success: false,
                message: "Invalid Details"
            });
        }
        const existing = await User.findOne({ $or: [{ email }, { phone }] });
        if (existing) {
            return res.send({
                success: false,
                message: "Account already exists"
            });
        }
        await new User({
            name, phone, email, password
        }).save();

        return res.send({
            success: true,
            message: "Registered Successfully"
        });
    } catch (err) {
        return res.send({
            success: false,
            message: err.message
        });
    }
}

module.exports = signup;
