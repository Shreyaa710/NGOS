const registerVolunteer = (req, res) => {
  res.render("registerVolunteer");
};
const registerStudent = (req, res) => {
  res.render("registerStudent");
};
const loginVolunteer = (req, res) => {
  res.render("loginVolunteer");
};
const loginStudent = (req, res) => {
  res.render("loginStudent");
};
const dashboard = (req, res) => {
  res.render("dashboard");
};
const studentDash = (req, res) => {
  res.render("studentdash");
};
const postRequirement = (req, res) => {
  res.render("postRequirement");
};

module.exports = {
  registerVolunteer,
  registerStudent,
  loginStudent,
  loginVolunteer,
  dashboard,
  studentDash,
  postRequirement,
};
