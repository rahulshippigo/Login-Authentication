const Work = require('../../models/data');

const addDataController = async (req, res) => {
    try {
        const { body, user } = req;
        const { work } = body;
        const { _id: userId } = user;

        if (!work) {
            return res.send({
                success: false,
                messsage: "Invalid Details"
            });
        }

        await new Work({
            work, user: userId
        }).save();

        return res.send({
            success: true,
            message: "Work Saved"
        });
    } catch (err) {
        return res.send({
            success: false,
            message: err.message
        });
    }
}

module.exports = addDataController;
