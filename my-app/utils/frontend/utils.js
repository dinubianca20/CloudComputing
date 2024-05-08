import axios from "axios";

export const getAllBooks = async () => {
    const res = await axios.get("http://localhost:3000/api/books");
    if (res.status !== 200) {
        return new Error("Internal server error");
    }
    const data = await res.data?.books;

    return data;
}

export const getFeaturedBooks = async() => {
    const books = await getAllBooks();
    if(books.lenght == 0) {
        return [];
    }
    const featuredBooks = books.filter((book) => book.featured == true)

    return featuredBooks;
}