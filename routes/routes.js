const express = require('express')

const { blogpost } = require('../controllers/controllers')

const router = express.Router()

router.post('/blogpost', blogpost.postBlogpost)

module.exports = router