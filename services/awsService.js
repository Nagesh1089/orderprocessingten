const { sqs, ses } = require('../config/aws');

// Send message to AWS SQS Queue
exports.sendMessageToQueue = async (message) => {
  const params = {
    MessageBody: JSON.stringify(message),
    QueueUrl: process.env.SQS_URL,
  };
  try {
    await sqs.sendMessage(params).promise();
    console.log("Message sent to SQS");
  } catch (error) {
    console.error("Error sending message to SQS:", error);
  }
};

// Receive message from AWS SQS Queue
exports.receiveMessageFromQueue = async () => {
  const params = {
    QueueUrl: process.env.SQS_URL,
    MaxNumberOfMessages: 1,
    VisibilityTimeout: 30,
    WaitTimeSeconds: 10,
  };
  try {
    const data = await sqs.receiveMessage(params).promise();
    if (data.Messages && data.Messages.length > 0) {
      return JSON.parse(data.Messages[0].Body);
    }
  } catch (error) {
    console.error("Error receiving message from SQS:", error);
  }
  return null;
};

// Send email using AWS SES
exports.sendOrderEmail = async (email, orderId, items, status) => {
  const params = {
    Source: process.env.SES_EMAIL,
    Destination: { ToAddresses: [email] },
    Message: {
      Subject: { Data: `Order ${orderId} Status Update` },
      Body: {
        Text: { Data: `Your order ${orderId} has been ${status}.\nItems: ${JSON.stringify(items)}` },
      },
    },
  };
  try {
    await ses.sendEmail(params).promise();
    console.log("Order email sent via SES");
  } catch (error) {
    console.error("Error sending email via SES:", error);
  }
};