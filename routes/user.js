const authorize = require("../auth/authorize");
const roles = require("../auth/role");

var express = require("express");
var router = express.Router();
var uc = require("../controllers/user");

//#region Register
/**
 * @swagger
 * /user/register:
 *   post:
 *      summary: Register user. (Different roles can be selected for test purposes)
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *             example:
 *               username: user
 *               password: pass1234
 *               role: User
 *      responses:
 *        200:
 *          description: OK
 */
 router.post("/register", uc.register);

 //#endregion

//#region Login
/**
 * @swagger
 * /user/login:
 *   post:
 *      summary: Get auth key on login
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: user
 *               password: pass1234
 *      responses:
 *        200:
 *          description: OK
 */
router.post("/login", uc.login);

//#endregion

//#region Change role
/**
 * @swagger
 * /user/role:
 *   patch:
 *      summary: Admin can change role of user
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               role:
 *                 type: string
 *             example:
 *               username: user
 *               role: Manager
 *      responses:
 *        200:
 *          description: OK
 */
router.patch("/role", authorize(roles.Admin), uc.role);

//#endregion

module.exports = router;
