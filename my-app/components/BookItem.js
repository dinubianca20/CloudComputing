import { Card, CardContent, CardActions, Button, Typography, Snackbar, Alert } from "@mui/material";
import React, { Fragment, useState } from "react";
import Link from 'next/link';
import { deleteBook } from "@/utils/frontend/utils";
import { useRouter } from "next/router";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const BookItem = ({ title, price, id, author, imageUrl, featured }) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleDelete = () => {
        deleteBook(id).then(() => setOpen(true)).catch(err => console.log(err));
    };
    return <Fragment>
        <Card sx={{
            width: "300px", height: "500px", borderRadius: 3, boxShadow: "5px 5px 10px #ccc", ":hover": {
                boxShadow: "10px 10px 20px #ccc"
            },
        }}>
            <div style={{ width: "100%", height: "70%", position: "relative" }}>
                {featured && (<div style={{ position: "absolute", top: 0, background: "#0F5132", width: "70px", padding: "2px", color: "white" }}>
                    Favorite
                </div>)}
                <img src={imageUrl} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
            <CardContent sx={{ width: "100%", height: "20%" }}>
                <Typography gutterBottom variant="h5" component="div" >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {author}
                </Typography>
                <Typography sx = {{mt : 1}} fontFamily="monospace "variant="body2" color="text.secondary">
                    {`$${price}`}
                </Typography>
            </CardContent>

            <CardActions>
                <Link href={`/books/${id}`}>
                    {" "}
                    <Button endIcon={<EditIcon></EditIcon>}size="small" color="success">
                        Edit
                    </Button>
                </Link>

                <Button endIcon={<DeleteIcon></DeleteIcon>} onClick={handleDelete} size="small" color="success">
                    Delete
                </Button>
            </CardActions>
        </Card>

        {open && (<Snackbar open={open} autoHideDuration={3000} onClose={()=>{
            
            
            setOpen(false);
            router.push("/books");
            }}>
            <Alert
                onClose={() => setOpen(false)}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                Succesfully deleted
            </Alert>
        </Snackbar>)}

    </Fragment>
};

export default BookItem;