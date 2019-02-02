const router = require('express').Router()

router.route('/')
.get((req, res, next) => {
    res.status(200).json({
        message: "You requested index page"
    })
})
.post()


module.exports = router