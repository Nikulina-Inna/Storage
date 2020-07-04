const mongoose = require("mongoose");
const express = require("express");
const config = require("config");
const cors = require("cors");

const app = express();

const PORT = config.get("port") || 4000;
const URI = config.get("mongoUri");

app.use(cors());
app.use(express.json({extended: true}));
app.use("/api/auth", require("./routes/reg.route.js"));
app.use("/api/auth", require("./routes/login.route.js"));

app.use("/api/data", require("./routes/dataAdd.route.js"));
app.use("/api/data", require("./routes/dataFilter.route.js"));
app.use("/api/data", require("./routes/dataGetById.route.js"));

app.use("/api/data", require("./routes/subscribe.route.js"));

app.use("/api/check", require("./routes/tokenCheck.route.js"));
app.use("/api/order", require("./routes/orderForming.route.js"));
app.use("/api/order", require("./routes/activeOrder.route.js"));
app.use("/api/order", require("./routes/deleteActiveOrder.route.js"));
app.use("/api/order", require("./routes/confirmOrder.route.js"));
app.use("/api/order", require("./routes/completeOrders.route.js"));
app.use("/api/order", require("./routes/processingOrders.route.js"));
app.use("/api/order", require("./routes/orderAction.route.js"));
app.use("/api/user", require("./routes/userById.route.js"));
app.use("/api/user", require("./routes/updateUserInfo.route.js"));


async function start() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`server has been started on port ${PORT}`));
  } catch (err) {
    console.log("server error", err.massage);
    process.exit(1);
  }
}

start();


