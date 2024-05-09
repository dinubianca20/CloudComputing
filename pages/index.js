import BookList from "@/components/BooksList";
import { getFeaturedBooks } from "@/utils/frontend/utils";

function Home({books}) {

  return <BookList data={books}/>;
}

export default Home;

export const getStaticProps = async () => {
    const books = await getFeaturedBooks();

    return {
      props: {
        books,
      },
    };
};