const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  initiator: { type: String }, //发起者
  inittime: { type: Date }, //发起时间
  taskname: { type: String }, //流程名称
  taskcontent: { type: Schema.Types.Mixed } //流程内容
});

const Task = mongoose.model("Task", taskSchema);

module.exports = { Task };
