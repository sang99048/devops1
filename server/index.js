const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const exportRoute = require('./router/export.route');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
connectDb();

// Routes
app.use('/api/v1', exportRoute);

// Route mặc định kiểm tra server
app.get('/', (req, res) => {
  res.send('🚀 Server is running successfully!');
});

// Chạy server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
