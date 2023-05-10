import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.get("/",(req,res)=>{
  console.log("Server is running successfully");

  res.send({
    message: "Server has started successfully"
  })
})

app.listen(PORT, () => {
  console.log(`Application is running on PORT ${PORT}`);
});
