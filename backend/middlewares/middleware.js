module.exports = {
  checkAuth: function(req, res, next){
    if(!req.session.user) {
      res.status(401).json({
        error: 'You are not logged in'
      })
    }else{
      next();
    }
  },

  checkAdmin: function(req, res, next){
    if(!req.session.user || req.session.user.isAdmin == false) {
      res.status(401).json({error: 'You are not admin'})
    }else{
      next();
    }
  }
}