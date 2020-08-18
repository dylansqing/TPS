const express = require("express");
const app = express();

/**
 * @description: 处理请求最开始的部分
 * @param {type}
 * @return:
 */
app.use((req, res, next) => {
  // console.log(req.url)
  next();
});

app.use("/pic", require("./api/pic/pic"));
app.use("/user", require("./api/user/users"));
app.use("/role", require("./api/role/roles"));
app.use("/request", require("./api/method/request"));

module.exports = app;
