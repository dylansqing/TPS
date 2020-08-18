const express = require("express");
const router = express.Router();

/* GET HTML. */

/**
 * @description: 获取全部角色网页
 * @param {type}
 * @return {type}
 */
router.get("/rolelist", function(req, res, next) {
  res.render("roleList");
});

/**
 * @description: 获取全部用户网页
 * @param {type}
 * @return {type}
 */
router.get("/userlist", function(req, res, next) {
  res.render("userList");
});

/**
 * @description: 获取网页编辑角色
 * @param {type}
 * @return {type}
 */
router.get("/roleedit", function(req, res, next) {
  res.render("roleEdit");
});

router.get("/roleedit/:id", function(req, res, next) {
  res.render("roleEdit");
});

/**
 * @description: 获取网页编辑用户
 * @param {type}
 * @return {type}
 */
router.get("/useredit", function(req, res, next) {
  res.render("userEdit");
});

router.get("/useredit/:id", function(req, res, next) {
  res.render("userEdit");
});

/**
 * @description:
 * @param {type}
 * @return {type}
 */
router.get("/map", function(req, res, next) {
  res.render("map");
});

/**
 * @description:
 * @param {type}
 * @return {type}
 */
router.get("/usercenter", function(req, res, next) {
  res.render("userCenter");
});

router.get("/analysis", function(req, res, next) {
  res.render("Analysis");
});

router.get("/login", function(req, res, next) {
  res.render("login");
});

router.get("/ED", function(req, res, next) {
  res.render("Edistribution");
});

module.exports = router;
