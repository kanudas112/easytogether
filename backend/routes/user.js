const express = require('express');
const { createUser, login, logout, updatePassword, updateProfile, myProfile } = require('../controllers/user');
const { isAuthenticated } = require('../middlewares/auth');
const router = express.Router();

router.route("/register").post(createUser)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/me").get(isAuthenticated,myProfile)
router.route("/update/password").put(isAuthenticated,updatePassword)
router.route("/update/profile").put(isAuthenticated,updateProfile)

module.exports = router