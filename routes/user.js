"use strict";

const express = require('express')
const router = express.Router()
const {register, login, running}  = require('../controllers/users')


router.post('/register', register)
router.post('/login', login)
router.post('/', running)



module.exports = router