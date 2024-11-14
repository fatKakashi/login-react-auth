const mongoose = require("mongoose");

const mahasiswaSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const MahasiswaModel = mongoose.model("login", mahasiswaSchema);


module.exports = MahasiswaModel;
