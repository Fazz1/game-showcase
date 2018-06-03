
const User = require('../models/User');

module.exports = {
  signup: async (req, res) => {
    // console.log(req.body);
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          error: 'This email is already in use. Please choose another one'
        })
      }

      const newUser = await User.create(req.body);
      return res.json({
        message: 'Successfully signedup',
        user: newUser
      });      
    } catch (err) {
      return res.status(400).json({
        error: 'Please input correctly to sign up'
      })
    }
  },

  signin: async (req, res) => {
    try {
      const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      }).lean();
      
      if (user) {
        req.session.user = user;
        const user1 = Object.assign({}, user);
        delete user1.password;
        return res.json({
          message: 'Successfully logged in',
          user: user1
        });
      } else {
        return res.status(400).json({
          error: 'Invalid credentials'
        });
      }
    } catch(err) {
      return res.status(400).json({
        error: 'Something went wrong'
      })
    }
  },
  checkAuth: (req, res) => {
    if (req.session.user) {
      return res.json({
        message: 'logged in status'
      })
    } else {
      return res.status(401).json({
        error: 'not logged in'
      })
    }
  },
  logout: (req, res) => {
    delete req.session.user;
    return res.json({
      message: 'Successfully logged out'
    })
  },
};
