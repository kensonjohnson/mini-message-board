import mongoose from "mongoose";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";

const purify = DOMPurify(new JSDOM("").window);

const MessageSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
});

MessageSchema.pre("validate", function (next) {
  if (this.author) {
    this.author = purify.sanitize(this.author);
  }
  if (this.content) {
    this.content = purify.sanitize(this.content);
  }

  next();
});

export default mongoose.model("Message", MessageSchema);
