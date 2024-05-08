import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";
import React from "react";
import Link from 'next/link';
const BookItem = ({ title, price, id, author, imageUrl, featured }) => {
    return <Card sx={{
        width: "100%", height: "100%", borderRadius: 3, boxShadow: "5px 5px 10px #ccc", ":hover": {
            boxShadow: "10px 10px 20px #ccc"
        },
    }}>
        <div style={{ width: "100%", height: "70%", position:"relative" }}>
            {featured && (<div style={{position:"absolute", top:0, background:"#0F5132", width:"70px", padding:"2px", color:"white"}}>
                Favorite
            </div>)}
            <img src={imageUrl} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
        <CardContent sx={{ width: "100%", height: "20%" }}>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {author}
            </Typography>
        </CardContent>

        <CardActions>
            <Link href={`/books/${id}`}>
                {" "}
            <Button size="small" color="primary">
                Edit
            </Button>
            </Link>
            
            <Button size="small" color="primary">
                Delete
            </Button>
        </CardActions>
    </Card>
};

export default BookItem;