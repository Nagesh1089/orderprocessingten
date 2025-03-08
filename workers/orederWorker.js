const { receiveMessageFromQueue } = require("../services/awsService");
const { setCache } = require("../services/redisService");
const Order = require("../models/Order");
const { sendOrderEmail } = require("../services/awsService");

async function processOrders() {
  setInterval(async () => {
    console.log("Checking for new orders in SQS queue...");
    const message = await receiveMessageFromQueue();
    if (!message) return;

    const { orderId } = message;
    const order = await Order.findOne({ orderId });
    if (!order) return console.error("Order not found", orderId);

    order.status = "Processed";
    await order.save();

    // Cache order details in Redis
    await setCache(`order:${orderId}`, order);

    // Send email notification
    await sendOrderEmail(order.userId, orderId, order.items, "Processed");

    console.log(`Order ${orderId} processed successfully.`);
  }, 5000);
}

processOrders();
