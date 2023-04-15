module.exports = async (req, res, next) => {
  console.log("Hello Log\n\n");
  console.log(req.session);
  if (req.session.user) {
    console.log("Logged In");
    req.isLoggedIn = true;
  } else {
    console.log("Not Logged In");
    res.redirect("/profile");
    req.isLoggedIn = false;
  }
  next();
};
