import React from 'react';
import { Mutation } from "react-apollo";
import gql from 'graphql-tag';

export const ADD_BOOK = gql`
  mutation AddNewBook($title: String!, $isbn: String!, $pageCount: Int, $author: ID!) {
  newBook(
        title: $title,
        isbn: $isbn,
        pageCount: $pageCount,
        author: $author) {
          id title
        }
  }
`;

export class AddNewBook extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
         return (
            <Mutation mutation={ADD_BOOK}>
                {(newBook, {data}) => (
                            <div className="card flex-input">
                                <div className="card-body">
                                    <h5 className="card-title">New Book</h5>
                                    <div>
                                        <input name="title" placeholder="Book Name" className="flex-input"/>
                                        <input name="isbn" placeholder="ISBN Number" className="flex-input"/>
                                        <input name="pageCount" placeholder="Page Count" className="flex-input"/>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input name="firstName" placeholder="First Name" className="flex-input"/>
                                            </div>
                                            <div className="col-md-6">
                                                <input name="lastName" placeholder="Last Name" className="flex-input"/>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary flex-input"
                                                onClick={() => {
                                                    console.log(document.getElementsByName("title").value);
                                                    newBook({
                                                        variables: {
                                                            title: document.getElementsByName("title").value,
                                                            isbn: document.getElementsByName("isbn").value,
                                                            pageCount: document.getElementsByName("pageCount").value,
                                                            author: 1
                                                        }
                                                    })
                                                        .then(res => res)
                                                        .catch(err => console.log(err))
                                                }}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        )
                    // }
                }
            </Mutation>
        )
    }
}