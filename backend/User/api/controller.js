const mongoose = require('mongoose')
const User = require('../Model/User')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signup = (req, res) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "User already exists"
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        console.log(req.body.username)
                        var bDate = new Date()
                        bDate = req.body.birthdate
                        const user = new User({
                            _id: new mongoose.Types.ObjectId,
                            email: req.body.email,
                            password: hash,
                            username: req.body.username,
                            gender: req.body.gender,
                            birthdate: bDate,
                            phoneNo: req.body.phoneNo
                        });
                        user.save()
                            .then(result => {
                                res.status(201).json({
                                    message: "User created",
                                    user: user
                                })
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err
                                })
                            })
                    }
                })
            }
        })
}

exports.getUser = (req, res) => {
    User.findOne({ email: req.params.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(404).json({
                    message: "User Doesn't exist"
                })
            } else {

                res.status(200).json(user)
            }
        })
}

exports.login = (req, res) => {
    console.log("login" + req.body.email)
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(404).json({
                    message: "Auth failed"
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
                if (result) {
                    const token = jwt.sign({
                        email: user[0].email,
                        userId: user[0]._id
                    }, process.env.JWT_KEY,
                        {
                            expiresIn: '1h'
                        })
                    return res.status(200).json({
                        message: 'Auth successful',
                        Token: token,
                        user: user[0]
                    })
                }
                res.status(401).json({
                    message: 'Auth failed'
                })
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}
