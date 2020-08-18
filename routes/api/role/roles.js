const express = require("express");
const router = express.Router();

const { Role } = require("../../../models/role");

/* GET role listing. */
router.get("/lists/:page", async (req, res, next) => {
  let roles = await Role.find({})
    .skip((req.params.page - 1) * 10)
    .sort({ created: -1 })
    .limit(10);
  let lengthOfRoles = (await Role.find()).length;
  res.send({ roleInfo: roles, roleLength: lengthOfRoles });
});

router.get("/lists", async (req, res, next) => {
  let roles = await Role.find();
  res.send(roles);
});

router.get("/list/:id", async (req, res, next) => {
  let id = req.params.id;
  let r = await Role.findById(id);
  res.send(r);
});

router.post("/add", async (req, res, next) => {
  if (req.body.name !== undefined) {
    let role = await Role.create({
      name: req.body.name,
      state: req.body.state,
      isAdmin: req.body.isAdmin,
      limits: req.body.limits
    }).catch((err) => {
      res.status(201).send(err);
    });
    res.send(role);
  } else {
    res.send({ state: "err", message: "信息不全" });
  }
});

router.put("/modify", async (req, res, next) => {
  let e = await Role.findByIdAndUpdate(req.body.id, {
    state: req.body.data.state,
    isAdmin: req.body.data.isAdmin,
    limits: req.body.data.limits
  }).catch((err) => {
    res.status(201).send(err);
  });
  res.send(e);
});

router.delete("/delete/:id", async (req, res, next) => {
  let i = req.params.id;
  let e = await Role.findByIdAndDelete(i);
  res.send(e);
});

module.exports = router;
