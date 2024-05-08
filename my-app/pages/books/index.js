import BookList from "@/components/BooksList";
import { getAllBooks } from "@/utils/frontend/utils";


function BooksHome({books}) {
    return <BookList data={books}></BookList>
}

export default BooksHome;

export const getStaticProps = async () => {
    const books = await getAllBooks();

    return {
        props: {
            books,
        },
    };
};