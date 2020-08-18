const express = require("express");
const router = express.Router();

const { Role } = require("../../../models/role");
const { User } = require("../../../models/user");

/* GET user listing. */
router.get("/lists/:page", async (req, res, next) => {
  let users = await User.find({})
    .populate("Role")
    .skip((req.params.page - 1) * 10)
    .sort({ created: -1 })
    .limit(10);
  let lengthOfUsers = (await User.find()).length;
  res.send({ userInfo: users, userLength: lengthOfUsers });
});

router.get("/lists", async (req, res, next) => {
  let users = await User.find().populate("Role");
  res.send(users);
});

router.get("/list/:id", async (req, res, next) => {
  let id = req.params.id;
  let u = await User.findById(id);
  res.send(u);
});

router.post("/add", async (req, res, next) => {
  let mm = Math.random();
  let UIDcode = "";
  if (mm > 0.1) {
    UIDcode = Math.round(mm * 1000000);
  } else {
    mm += 0.1;
    UIDcode = Math.round(mm * 1000000);
  }

  if (req.body.Name !== undefined) {
    let user = await User.create({
      Name: req.body.Name,
      PWD: req.body.PWD,
      Tel: req.body.Tel,
      Email: req.body.eMail,
      Role: req.body.Role,
      UID: UIDcode
    }).catch((err) => {
      res.status(201).send(err);
    });
    res.send({ user: user, state: "success", UID: UIDcode });
  } else {
    res.send({ state: "err", message: "信息不全" });
  }
});

router.put("/modify", async (req, res, next) => {
  let e = await Role.findByIdAndUpdate(req.body.id, {
    Name: req.body.Name,
    PWD: req.body.PWD,
    Tel: req.body.Tel,
    Email: req.body.eMail,
    Role: req.body.Role
  }).catch((err) => {
    res.status(201).send(err);
  });
  res.send(e);
});

router.delete("/delete/:id", async (req, res, next) => {
  let i = req.params.id;
  let e = await User.findByIdAndDelete(i);
  res.send(e);
});

router.post("/login", async (req, res, next) => {
  res.send("ok");
});

module.exports = router;
