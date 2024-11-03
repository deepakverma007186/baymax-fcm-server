require("dotenv").config();

const express = require("express");
const connectDB = require("./config/connect");
const notificationRoutes = require("./routes");

const app = express();
app.use(express.json());

app.use("/notifications", notificationRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT || 3001, () =>
      console.log(`HTTP Servier is running on port: ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(`Error starting server ⛔🤚: ${error}`);
  }
};

start();
