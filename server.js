import express from "express";
import indexRouter from "./routes/index.js";
import dotenv from "dotenv";
import methodOverride from "method-override";

dotenv.config();

// Create the express app
const app = express();

// ---------- Configure express ---------- //
// Sets the view engine to ejs
app.set("view engine", "ejs");
// Let's us use data from within the request body
app.use(express.urlencoded({ extended: false }));
// Let's us use methods other than just POST or GET
app.use(methodOverride("_method"));
// Use Static files
app.use(express.static("public"));

// -------------- Setup Routes -------------- //
app.use("/", indexRouter);

// -------------- Open Port -------------- //

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  if (app.settings.env === "development")
    console.log(`App started. \nVisit localhost:${PORT} in your browser`);
});
