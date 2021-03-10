const authorize = require("../auth/authorize");
const roles = require("../auth/role");

var express = require("express");
var router = express.Router();
var hc = require("../controllers/hotel");

//#region add hotel
/**
 * @swagger
 * /hotel/addhotel:
 *   post:
 *      summary: Add hotel by manager
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: MyHotel
 *      responses:
 *        200:
 *          description: OK
 */
router.post("/addhotel", authorize(roles.Manager), hc.addHotel);

//#endregion

//#region add room
/**
 * @swagger
 * /hotel/addroom:
 *   put:
 *      summary: Put room into a hotel by manager
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                  type: string
 *               number:
 *                 type: integer
 *               isBooked:
 *                 type: boolean
 *             example:
 *               name: MyHotel
 *               number: 1
 *               isBooked: false
 *      responses:
 *        200:
 *          description: OK
 */
router.put("/addroom", authorize(roles.Manager), hc.addRoom);

//#endregion

//#region List available rooms
/**
 * @swagger
 * /hotel/listrooms:
 *   post:
 *      summary: List available rooms
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: MyHotel
 *      responses:
 *        200:
 *          description: OK
 */
router.post("/listrooms", hc.listRooms);

//#endregion

//#region List all hotels
/**
 * @swagger
 * /hotel/listhotel:
 *   get:
 *      summary: List hotels
 *      responses:
 *        200:
 *          description: List all hotels
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id: string
 */
router.get("/listhotel", hc.listHotels);

//#endregion

module.exports = router;
