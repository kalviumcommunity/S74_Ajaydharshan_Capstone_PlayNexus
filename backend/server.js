const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv=require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());



mongoose.connect("mongodb+srv://ajays74:ajayplay@cluster0.jma0ojw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


const entityRoutes = require('./routes/entityRoutes');

app.use('/api/entities', entityRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});