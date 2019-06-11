const User = require('../models/user');

exports.post = async (req, res, next) => {
    const { data } = req.body
    const newUser = await (new User({ data })).save()

    res.json({ status: true, data: newUser })
}