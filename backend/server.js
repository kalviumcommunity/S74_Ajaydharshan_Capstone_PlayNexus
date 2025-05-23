  // const express = require('express');
  // const mongoose = require('mongoose');
  // const cors = require('cors');
  // const dotenv=require('dotenv');

  // dotenv.config();

  // const app = express();
  // const PORT = process.env.PORT || 8000;

  // app.use(express.json());
  // app.use(cors());



  // mongoose.connect("mongodb+srv://ajays74:ajayplay@cluster0.jma0ojw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  //   .then(() => console.log("✅ MongoDB connected"))
  //   .catch(err => console.error("❌ MongoDB connection error:", err));


  // const entityRoutes = require('./routes/entityRoutes');


  // app.listen(PORT, () => {
  //   console.log(`Server is running on port http://localhost:${PORT}`);
  // });
  // server.js
  const express = require('express');
  const mongoose = require('mongoose');
  const dotenv = require('dotenv');
  const cors = require('cors');

  const authRoutes = require('./routes/authRoutes');
  const userRoutes = require('./routes/userRoutes');
  const eventRoutes = require('./routes/eventRoutes');
  const cafeRoutes = require('./routes/cafeRoutes');

  const { errorHandler } = require('./middleware/errorMiddleware');

  dotenv.config();
  const PORT=process.env.PORT

  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/events', eventRoutes);
  app.use('/api/cafes', cafeRoutes);

  // Error handling middleware
  app.use(errorHandler);

  mongoose.connect(process.env.MONGO_URI)
  .then(()=>(console.log("DB connected")))
  .catch((err)=>console.log(err,"connection failed"))


  

  app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
  })

