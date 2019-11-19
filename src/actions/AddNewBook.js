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
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value }= e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
         return (
            <Mutation mutation={ADD_BOOK}>
                {(newBook, {data}) => (
                    <div className="card flex-input">
                        <div className="card-body">
                            <h5 className="card-title">New Book</h5>
                            <div>
                                <input name="title" placeholder="Book Name" className="flex-input" value={this.state.title} onChange={this.handleChange}/>
                                <input name="isbn" placeholder="ISBN Number" className="flex-input" value={this.state.isbn} onChange={this.handleChange}/>
                                <input name="pageCount" placeholder="Page Count" className="flex-input" value={this.state.pageCount} onChange={this.handleChange}/>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input name="firstName" placeholder="First Name" className="flex-input" value={this.state.firstName} onChange={this.handleChange}/>
                                    </div>
                                    <div className="col-md-6">
                                        <input name="lastName" placeholder="Last Name" className="flex-input" value={this.state.lastName} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <button className="btn btn-primary flex-input"
                                    onClick={() => {
                                        newBook({
                                            variables: {
                                                title: this.state.title,
                                                isbn: this.state.isbn,
                                                pageCount: this.state.pageCount,
                                                author: 1
                                            }
                                        })
                                            .then(res => res)
                                            .catch(err => console.log(err))
                                    }}>Submit</button>
                            </div>
                        </div>
                    </div>
                )}
            </Mutation>
        )
    }
}