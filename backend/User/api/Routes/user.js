const express = require('express');
const router = express.Router();

const controller = require('../controller')

router.post('/signup', controller.signup);
router.post('/login', controller.login)

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
