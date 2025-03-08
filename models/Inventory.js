const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  stock: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Inventory', InventorySchema);