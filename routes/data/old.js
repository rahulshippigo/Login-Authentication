const Work = require('../../models/data');

exports.all = async (req, res) => {
    try {
        const { user } = req;
        const work = await Work.find({ user: user._id });

        return res.send({
            success: false,
            message: "Work",
            data: work
        });
    } catch (err) {
        return res.send({
            success: false,
            message: err.message
        });
    }
}

exports.single = async (req, res) => {
    try {
        const { user, params } = req;

        const work = await Work.findOne({ user: user._id, _id: params.id });

        return res.send({
            success: false,
            message: "Work",
            data: work
        });
    } catch (err) {
        return res.send({
            success: false,
            message: err.message
        });
    }
}