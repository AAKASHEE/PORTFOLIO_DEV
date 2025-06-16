const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGO_URI; // or replace with direct URI if not using dotenv

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log(`[${new Date().toLocaleTimeString()}] ✅ Pinged Contact DB`);

    // Ping a real or dummy collection
    await mongoose.connection.db.collection('messages').findOne({});

    mongoose.connection.close();
  })
  .catch(err => {
    console.error(`[${new Date().toLocaleTimeString()}] ❌ Contact Ping Failed:`, err.message);
  });
