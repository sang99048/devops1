const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error.message);
    process.exit(1); // Dừng server nếu kết nối lỗi
  }
};

module.exports = connectDb;
