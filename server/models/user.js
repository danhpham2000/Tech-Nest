/* eslint-disable no-undef */
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    default: "User" + this._id,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  storage: {
    blogs: [
      {
        blogId: {
          type: Schema.Types.ObjectId,
          ref: "Blog",
          required: true,
        },
      },
    ],
    quantity: {
      type: Number,
      required: true,
    },
  },
});

userSchema.post("save", function (doc, next) {
  console.log("New user created!");
  next();
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  console.log("Password is being hashed!");
  next();
});

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("All field must be filled!");
  }
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw new Error("Incorrect password!");
  }
  throw new Error("Incorrect email!");
};

userSchema.methods.addBlog = function (blog) {
  const updatedStorageBlogs = [...this.storage.blogs];
  let quantity = 1;
  if (this.blogs.quantity === 0) {
    updatedStorageBlogs.push(blog._id);
    this.quantity = quantity;
  } else {
    updatedStorageBlogs.push(blog._id);
    this.quantity += 1;
  }

  const updatedStorage = {
    blogs: updatedStorageBlogs,
  };
  this.storage = updatedStorage;
  return this.save();
};

module.exports = mongoose.model("User", userSchema);
