import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export const DELETE_BOOK = gql`
  mutation DeleteBook($bookId: ID!) {
  deleteBook(
     id: $bookId
     )
  }
`;

const Book = (props) => (
    <Mutation mutation={DELETE_BOOK}>
        {(deleteBook, {data}) => (
            <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
                <div className="card-body">
                    <h5 className="card-title">{props.book.title}
                        <button type="button" className="close" aria-label="Close" style={{'outline': 'none'}}>
                            <span aria-hidden="true" onClick={() => {
                                deleteBook({
                                    variables: {
                                        bookId: props.book.id
                                    }
                                })
                                    .then(res => res)
                                    .catch(err => console.log(err))
                            }}>&times;</span>
                        </button></h5>
                    <h6 className="card-subtitle mb-2 text-muted">Page Count {props.book.pageCount}</h6>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="card-text">Author - {props.book.author.firstName} {props.book.author.lastName}</p>
                        </div>
                        <div className="col-md-6">
                            <p className="card-text">ISBN No. - {props.book.isbn}</p>
                        </div>
                    </div>
                </div>
            </div>
        )}</Mutation>
);
export default Book;