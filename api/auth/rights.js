module.exports = {
  admin(req, res, next) {

    if(req.user.is_admin) {
      next()
    } else {
      res.status(401).json({ error: "You don't have rights to use this endpoint" });
    }

  },

  coach(req, res, next) {

    if(req.user.is_admin || req.user.is_coach) {
      next();
    } else {
      res.status(401).json({ error: "You don't have rights to use this endpoint" });
    }

  }
}
