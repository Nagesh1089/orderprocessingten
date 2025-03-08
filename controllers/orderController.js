const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount } = req.body;

    const order = new Order({ userId, items, totalAmount, status: "Pending" });
    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error creating order" });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving order" });
  }
};
