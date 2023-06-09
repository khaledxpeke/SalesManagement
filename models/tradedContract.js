const Mongoose = require("mongoose");
const TradedContractSchema = new Mongoose.Schema({
  tradeInOffer: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "Device",
    required: true,
  },
  tradedDevice: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "Device",
    required: true,
  },
  owner: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  client: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["Waiting", "Traded"],
    default: "Waiting",
  },
  
});

const TradedContract = Mongoose.model("TradedContract", TradedContractSchema);
module.exports = TradedContract;
