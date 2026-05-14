const mongoose = require("mongoose");


const blacklistTokenSchema = new mongoose.Schema(
{
  token: {
    type: String,
    required: true,
  }
},
{
  timestamps: true
}
);

const tokenBlacklistToken = mongoose.model("BlacklistToken", blacklistTokenSchema);

module.exports = tokenBlacklistToken;