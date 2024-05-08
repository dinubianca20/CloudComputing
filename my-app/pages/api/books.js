// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDatabase } from "@/lib/mongodb";
import { addBook, getAllBooks } from "@/utils/controllers/books-controllers";
import mongoose from "mongoose";

export default function handler(req, res) {
	mongoose.connect("mongodb+srv://dinubianca20:arPuPvKF0daFApD9@cloud.tecfw2v.mongodb.net/")
	.then(() => console.log("Connected")).catch((err) => console.log(err));

	// connectToDatabase();

	if(req.method === "GET") {
		return getAllBooks(req, res);
	}
	else if (req.method === "POST"){
		return addBook(req,res);
	}
}