import axios from "axios";

export const getAllBooks = async () => {
    const res = await axios.get("http://localhost:3000/api/books");
    if (res.status !== 200) {
        return new Error("Internal server error");
    }
    const data = await res.data?.books;

    return data;
}

export const getFeaturedBooks = async () => {
    const books = await getAllBooks();
    if (books.length == 0) {
        return [];
    }
    const featuredBooks = books.filter((book) => book.featured == true)

    return featuredBooks;
}

export const sendBook = async (data) => {
    const res = await axios.post("http://localhost:3000/api/books", {
        title: data.title,
        author: data.author,
        imageUrl: data.imageUrl,
        featured: Boolean(data.featured),
        price: Number(data.price),
    });

    if (res.status !== 201) {
        return new Error("database request rejected");
    }
    const resData = await res.data;
    return resData;
}

export const getBookFromId = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/book/${id}`);
    if (res.status !== 200) {
        return new Error("unable to fetch book from id");
    }
    const data = await res.data;
    return data.book;
};

export const updateBook = async (id, data) => {
    const res = await axios.put(`http://localhost:3000/api/book/${id}`, {
        title: data.title,
        author: data.author,
        imageUrl: data.imageUrl,
        featured: Boolean(data.featured),
        price: Number(data.price),
    });
    if(res.status !== 200) {
        return new Error("unable to update");
    }
    const resData = await res.data;
    return resData;
}

export const deleteBook = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/book/${id}`);
    if(res.status !== 200) {
        return new Error("unable to delete");
    }
    const resData = await res.data;
    return resData;
}