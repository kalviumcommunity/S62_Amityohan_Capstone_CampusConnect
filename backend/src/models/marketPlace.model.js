const mongoose = require("mongoose");

const MarketplaceSchema = new mongoose.Schema({
  
  itemName: { type: String, required: true },
  itemImage:{type:String , required: false },
  itemDescription: String,
  price: { type: Number, required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" ,required:true}, // References User
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Marketplace", MarketplaceSchema);
