import dotenv from "dotenv";
import connectDB from "./db/connection.js";

dotenv.config();

connectDB().then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at port: ${process.env.PORT}`);
  });
});
