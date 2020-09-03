const express = require('express');
const router = express.Router();


const controller = require('../controller')

/**
 * @swagger
 * /user/signup:
 *    post:
 *       description: use to get user by email id
 *       responses:
 *          200: A successful response
 */
router.post('/signup', controller.signup);

/**
 * @swagger
 * /user/login:
 *    post:
 *       description: use for user login
 *       responses:
 *          200: A successful response
 */
router.post('/login', controller.login);

/**
 * @swagger
 *  /user/getuser/punts@gmail.com:
 *      get:
 *          description: use to get user by email id
 *          responses:
 *              404:
 *                  description: User Doesn't exist
 *              200: 
 *                  description: A successful response
 * 
 */
router.get('/getuser/:email', controller.getUser)

module.exports = router



// router.delete('/:userId', (req, res, next) => {
//     User.remove({ _id: new ObjectId(req.params.userId) })
//         .exec()
//         .then(result => {
//             res.status(200).json({
//                 message: "User Deleted"
//             })
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: err
//             })
//         })
// })
