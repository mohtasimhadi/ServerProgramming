const express = require('express')
const router = express.Router()
const { ensureAuthenticated, addUserData } = require('../middlewares/auth.middlewares')
const {getMO, postMO, getMOList, deleteMO} = require('../controller/mathOlympiad.controller')

router.get('/register', ensureAuthenticated, addUserData, getMO)
router.post('/register', ensureAuthenticated, addUserData, postMO)
router.get('/list', ensureAuthenticated, addUserData, getMOList)

module.exports = router