const express = require("express");
const userRouter = require("./routers/user.route");
const { dbConnect } = require("./config/dbConnect");

const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send("Welcome to my server, Please use /user to get all users");
});

app.use("/users", userRouter);

async function start() {
  await dbConnect();
}

app.listen(4000, (err) => {
  console.log("Listening on port: " + 4000);
});

start();
