Overview

This is a scalable, event-driven Order Processing System built with Node.js, Express, MongoDB, Redis, and AWS. It allows users to place orders, processes them asynchronously, and sends email notifications upon completion.

Tech Stack

- Backend: Node.js, Express.js

- Database: MongoDB

- Caching: Redis

- Authentication: JWT & Refresh Tokens

- Async Processing: AWS SQS (Simple Queue Service)

- Email Notifications: AWS SES (Simple Email Service)

- Deployment: AWS (Optional)



 Features

- User Authentication (JWT & Refresh Tokens)
- Order Management (Create & Fetch Orders)
- Inventory Check (Stock Validation)
- Asynchronous Processing (AWS SQS)
- Redis Caching (Quick Order Retrieval)
- Email Notifications (AWS SES)
- Error Handling & Logging

 Project Structure
order-processing-system/
├── config/             # Configurations (MongoDB, Redis, AWS)
│   ├── db.js           # MongoDB Connection
│   ├── redis.js        # Redis Connection
│   ├── aws.js          # AWS SQS & SES Setup
├── models/            # Database Models
│   ├── User.js         # User Schema
│   ├── Order.js        # Order Schema
│   ├── Inventory.js    # Inventory Schema
├── controllers/       # Business Logic
│   ├── authController.js  # User Authentication
│   ├── orderController.js # Order Management
├── middleware/        # Middleware
│   ├── authMiddleware.js  # JWT Authentication
├── routes/            # API Routes
│   ├── authRoutes.js   # Auth Routes
│   ├── orderRoutes.js  # Order Routes
├── services/          # Services
│   ├── redisService.js # Redis Caching
│   ├── awsService.js   # AWS Integrations
├── workers/           # Background Jobs
│   ├── orderWorker.js  # AWS SQS Order Processing
├── utils/             # Helper Functions
│   ├── jwtUtils.js     # JWT Helper
│   ├── errorHandler.js # Error Handling
├── .env               # Environment Variables
├── server.js          # Main Server File
├── package.json       # Dependencies
├── README.md          # Documentation
└── postman_collection.json # API Testing Collection

- 1️⃣Setup & Installation
git clone https://github.com/Nagesh1089/orderprocessingten.git
cd order-processing-system

-2️⃣installation
npm install

3️⃣ Configure Environment Variables
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
REDIS_HOST=localhost
REDIS_PORT=6379
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
SQS_QUEUE_URL=your_sqs_queue_url
SES_EMAIL=your_verified_email@example.com

4️⃣ Start MongoDB & Redis
# Start MongoDB
mongod

# Start Redis (For Windows using Memurai)
memurai-server.exe

5️⃣ Start the Server
npm start

 API Endpoints

🟢 User Authentication

Method

Endpoint

Description

POST

/api/auth/register

Register a new user

POST

/api/auth/login

User login

POST

/api/auth/refresh

Refresh JWT Token


Example Request (Register User)
POST http://localhost:3000/api/auth/register
{
  "email": "user@example.com",
  "password": "password123"
}

🛍  Order Management

Method

Endpoint

Description

POST

/api/orders

Create an order

GET

/api/orders/:id

Get order details


📦 Inventory Check & Caching

Method

Endpoint

Description

GET

/api/inventory/:id

Check item stock

GET

/api/orders/:id (cached)

Get order from Redis

📧 AWS SES Email Notification

After order processing, an email is sent to the user via AWS SES.

Ensure the sender email (SES_EMAIL) is verified in AWS.


🛠 AWS Integration Guide

🔹 AWS SQS (Simple Queue Service)

Orders are pushed to SQS for asynchronous processing.

Configure AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, and SQS_QUEUE_URL.

🔹 AWS SES (Simple Email Service)

Emails are sent via SES.

Ensure your sender email (SES_EMAIL) is verified in AWS SES.

🧪 Testing with Postman

1️⃣ Import postman_collection.json (included in repo).2️⃣ Run API requests (register, login, create order, etc.)3️⃣ Check responses & verify JWT authentication.

.

🚀 Deployment

You can deploy this on AWS EC2, Elastic Beanstalk, or Vercel.


📌 Conclusion

This Order Processing System demonstrates best practices in authentication, caching, async processing, and AWS integrations.

✅ Built with production-ready features✅ Handles large-scale order processing efficiently✅ Uses modern backend technologies

🚀 Ready to scale & deploy!
