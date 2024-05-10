// api/book/id
import dotenv from "dotenv";
import mongoose from "mongoose";
import {
  deleteBook,
  getBook,
  updateBook,
} from "@/utils/controllers/books-controllers";

dotenv.config();

export default async function handler(req, res) {
  try{
    await mongoose.connect(process.env.NEXT_ATLAS_URI);
  } catch (err) {
    console.log(err);
  }

  if (req.method === "PUT") {
    return updateBook(req, res);
  } else if (req.method === "DELETE") {
    return deleteBook(req, res);
  } else if (req.method === "GET") {
    return getBook(req, res);
  }
}
