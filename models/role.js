/**
 * @description: 创建一个角色对象模型，设置名称，状态以及是否是管理员与用户级别1~9
 * @param {type} 
 * @return: 
 */
const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost/blog-info', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

const roleSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    state: Boolean,
    isAdmin: Boolean,
    limits: Array
})

const Role = mongoose.model('Role', roleSchema);

module.exports = { Role }