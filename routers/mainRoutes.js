const express = require("express");
const mainControllers = require("../controllers/mainControllers");
const loggedIn = require("../middleware/isLoggedIn");
const isLoggedIn = require("../middleware/isLoggedIn");

const router = express.Router();
console.log("use route");
router.get("/register-volunteer", mainControllers.registerVolunteer);
router.get("/register-student", mainControllers.registerStudent);
router.get("/login-volunteer", mainControllers.loginVolunteer);
router.get("/login-student", mainControllers.loginStudent);
router.get("/dashboard", mainControllers.dashboard);
router.get("/studentDash", mainControllers.studentDash);
router.get("/post", isLoggedIn, mainControllers.postRequirement);
router.get("/applicant", isLoggedIn, mainControllers.applicant);
router.get("/volunteerDash", isLoggedIn, mainControllers.applicant);
router.get("/applyForm", isLoggedIn, mainControllers.applyForm);
router.get("/withdraw", isLoggedIn, mainControllers.withdraw);

module.exports = router;
