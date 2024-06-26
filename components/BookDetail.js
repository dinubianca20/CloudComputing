import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getBookFromId, updateBook } from "@/utils/frontend/utils";
import Form from "./Form";

const BookDetail = () => {
  const [book, setBook] = useState();
  const router = useRouter();

  useEffect(() => {
    const id = router.query.id;

    if (!id) return;

    getBookFromId(id)
      .then((data) => {
        console.log(data);
        setBook(data);
      })
      .catch((err) => console.log(err));
  }, [router.query.id]);

  const getFormData = (data) => {
    const id = router.query.id;

    if (!id) return;

    updateBook(id, data)
      .then((value) => console.log(value))
      .then(() => {
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {book ? <Form data={book} onSubmit={getFormData} /> : <p>Loading</p>}
    </div>
  );
};

export default BookDetail;
