const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// mongoose.connect('mongodb://localhost/blog-info', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

const userSchema = new mongoose.Schema({
  Name: { type: String },
  UID: { type: Number, unique: true },
  PWD: {
    type: String,
    set(val) {
      return bcrypt.hashSync(val, 10);
    }
  },
  Tel: { type: String },
  Email: { type: String },
  Role: { type: mongoose.SchemaTypes.ObjectId, ref: "Role" } //type: mongoose.SchemaTypes.ObjectId, ref: 'Roles'
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
