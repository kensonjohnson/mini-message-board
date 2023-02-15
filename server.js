import express from "express";
import messageRouter from "./routes/messages.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Message from "./models/Messages.js";
import methodOverride from "method-override";

dotenv.config();

// Create the express app
const app = express();

// Connect to MongoDB Atlas
mongoose.set("strictQuery", false);
const mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_NAME}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

main().catch((err) => console.log(err));
async function main() {
  mongoose.connect(mongoDB, () => {
    console.log("Connected to DB");
  });
}

// ---------- Configure express ---------- //
// Sets the view engine to ejs
app.set("view engine", "ejs");
// Let's us use data from within the request body
app.use(express.urlencoded({ extended: false }));
// Let's us use methods other than just POST or GET
app.use(methodOverride("_method"));

// Setting up routes and routers
// app.use("/articles", articleRouter);

// app.get("/", async (req, res) => {
//   const articles = await Article.find().sort({
//     createdAt: "desc",
//   });
//   res.render("articles/index", { articles });
// });

const PORT = process.env.PORT || 5050;

app.listen(PORT);
