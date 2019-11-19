import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Book from "./Book";

const Books = () => (
    <Query
        query={gql`
      {
        findAllBooks {
        id
        isbn
        title
        pageCount
        author {
          firstName
          lastName
        }
      }
      }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) {
                console.log(error);
                return <p>Error :(</p>;
            }
            return data.findAllBooks.map((currentBook) => (
                <Book book={currentBook}/>
            ));
        }}
    </Query>
);

export default Books;