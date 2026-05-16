const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const middleware = require("../middlewares/auth.middleware");
const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register", authController.registerUserController); 

/**
 * @route POST /api/auth/login
 * @description Login a user
 * @access Public
 */
authRouter.post("/login", authController.loginUserController);

/**
 * @route POST /api/auth/logout
 * @description clear the token cookie and blacklist the token
 * @access Public
 */
authRouter.get("/logout", authController.logoutUserController);

/**
 * @route GET /api/auth/get-me
 * @description get the details of the logged in user, expects token in the cookie
 * @access Private
 */
authRouter.get("/get-me", middleware.authUser, authController.getMeController);
module.exports = authRouter;
