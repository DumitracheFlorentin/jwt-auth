import { Router } from 'express'
import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from '../controllers/user.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'

const router = Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)

// secured
router.route('/logout').post(verifyJWT, logoutUser)
router.route('/refresh-token').post(verifyJWT, refreshAccessToken)

export default router
