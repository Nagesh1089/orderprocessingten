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
