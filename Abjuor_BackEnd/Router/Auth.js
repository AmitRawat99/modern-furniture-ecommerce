import { RegisterUser, LoginUser , getUserAccounts } from "../Controllers/UserController.js";
import express from 'express'

const router = express.Router()

router.post('/register', RegisterUser)
router.post('/login', LoginUser)
router.get('/logout', (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: '/'
    });
    res.status(200).json({ message: "Logged out successfully" });
});

router.get('/all-accounts' , getUserAccounts)

export default router;