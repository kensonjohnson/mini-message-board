import express from "express";

// Sample Data
const messages = [
  {
    author: "Bob123",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur debitis nam enim quod aliquid laboriosam quas aspernatur voluptatum nisi.",
    createdAt: new Date(),
  },
  {
    author: "Sally89",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore enim nihil nobis minus cumque iste cupiditate aliquid molestias, mollitia porro quaerat quidem perferendis ipsum, iure tempore error. Recusandae, dolore fugiat.",
    createdAt: new Date(),
  },
];

// Create the express router
const router = express.Router();

//------------- Start Routes -------------//
// Index Route
router.get("/", (req, res) => {
  res.render("index", { messages });
});

router.post("/new", (req, res) => {
  messages.unshift({
    author: req.body.author,
    content: req.body.content,
    createdAt: new Date(),
  });
  res.redirect("/");
});

export default router;
