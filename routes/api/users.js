const express = require("express");
const router = express.Router();
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");

// @desc     Register user
// @route    POST api/users
// @access   Public
router.post(
  "/",
  [check("name", "Name is required")
        .not()
        .isEmpty(),
    check("email" , "Please include a valid email").isEmail(),
    check('password' , 'Please enter a password with 6 or more characters').isLength({
        min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exits by email
      let user = await User.findOne({email});

      if(user){
        return res.status(400).json({errors: [{msg : 'User already exits'}]});
      }


      // Get users gravatar
      const avator = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      })

      user = new User({
        name,
        email,
        avator,
        password
      });

      // Encrypt password using Bcrypt
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken when user register he has to be logged in in frontend

      res.send("User registered");
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }

    
  }
);

module.exports = router