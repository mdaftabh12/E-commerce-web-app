require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const compression = require("compression");
const { connectMongodb } = require("./config/database");

const PORT = process.env.PORT || 3000;
const url = process.env.YOUR_MONGODB_URI || "mongodb://0.0.0.0:27017/E-commerce"

// connectMongodb(url)
//   .then(() => {
//     getUser();
//     console.log("Connected");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

  
mongoose
  .connect(`${url}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();
app.use(express.json());
app.use(cors());
app.use("/images", express.static("images"));

app.use("/hello", (req, res) =>{
  return res.json({success: true, message: "Hello Md Aftab"});
})
   
app.use(
  compression({
    level: 6,
    threshold: 10 * 1000,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) {
        return false;
      }
      return compression.filter(req, res);
    },
  }),
);

// app.use("/api", require("./routes/userRoute"));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT} 🚀`);
});
