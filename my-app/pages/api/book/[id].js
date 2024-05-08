// api/book/id

import mongoose from "mongoose";
import { deleteBook, getBook, updateBook } from "@/utils/controllers/books-controllers";

export default async function handler(req, res) {
    mongoose.connect("mongodb+srv://dinubianca20:arPuPvKF0daFApD9@cloud.tecfw2v.mongodb.net/")
	.then(() => console.log("Connected")).catch((err) => console.log(err));

    if(req.method === "PUT") {
        return updateBook(req, res);
    }
    else if (req.method === "DELETE") {
        return deleteBook(req, res);
    }
    else if(req.method === "GET") {
        return getBook(req, res);
    }
}