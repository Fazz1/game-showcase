const Showcase = require('../models/Showcase');

module.exports = {
  create: async (req, res) => {
    try {
      const showcase = new Showcase(req.body);
      showcase.creator = req.session.user._id;
      await showcase.save();

      return res.json({
        message: 'Successfully created showcase',
        showcase
      })
    } catch(err) {
      return res.status(400).json({
        error: 'something went wrong'
      })
    }   
  },
  delete: async (req, res) => {
    try {
      const showcase = await Showcase.findOne({ _id: req.body._id });
      if (!showcase) {
        return res.status(400).json({
          error: 'Can not find the showcase'
        })
      }

      if (req.session.user.isAdmin || showcase.creator == req.session.user._id) {
        await showcase.remove();
        return res.json({
          message: 'Successfully removed the showcase',
        })
      } else {
        return res.status(400).json({
          error: 'You do not have permission for this showcase'
        })
      }


    } catch (err) {
      return res.status(400).json({
        error: 'You can not delete this'
      })
    }
  },
  all: async (req, res) => {
    try {
      const showcases = await Showcase.find({}).sort({ createdAt: -1 });
      return res.json({
        showcases
      })
    } catch (err) {
      return res.status(400).json({
        error: 'something went wrong'
      })
    }
  }
};
