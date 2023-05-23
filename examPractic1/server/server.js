const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

app.use(cors());
dotenv.config();
app.use(bodyParser.json());

const BlogSchema = new mongoose.Schema({
  date: Number,
  title: String,
  desc: String,
  likeCount: Number,
  commentsCount: Number,
  imageURL: String,
});

const BlogModel = new mongoose.model("Blogs", BlogSchema);

//get all
app.get("/api/blogs", async (req, res) => {
  const { name } = req.query;
  const blogs = await BlogModel.find();
  if (!name) {
    res.status(200).send(blogs);
  } else {
    res
      .status(200)
      .send(
        blogs.filter((x) =>
          x.title.toLowerCase().trim().includes(name.toLowerCase().trim())
        )
      );
  }
});

//post blog
app.post("/api/blogs", async (req, res) => {
  const { title, desc, likeCount, commentsCount, imageURL } = req.body;
  const newBlog = new BlogModel({
    title: title,
    desc: desc,
    likeCount: likeCount,
    commentsCount: commentsCount,
    imageURL: imageURL,
  });
  newBlog.date = new Date();
  await newBlog.save();
  res.status(201).send({ massage: "Posted!" });
});

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server: İşliyirəm");
});

//delete
app.delete("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;
  await BlogModel.findByIdAndDelete(id);
  res.status(203).send({ massage: "deleted" });
});

//edit
app.put("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const { title, desc, likeCount, commentsCount, imageURL } = req.body;
  const editedBlog = {
    title: title,
    desc: desc,
    likeCount: likeCount,
    commentsCount: commentsCount,
    imageURL: imageURL,
  };
  await BlogModel.findByIdAndUpdate(id, editedBlog);
  res.status(200).send({ massage: "updated" });
});

DB_CONNECTION = process.env.DB_CONNECTION;
DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
  console.log("MongoDB: Məndə İşliyirəm");
});
