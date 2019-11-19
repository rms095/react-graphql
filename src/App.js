import React from 'react';
import './App.css';
//import { ApolloProvider } from "react-apollo";
import { ApolloProvider } from "@apollo/react-hooks"

import ApolloClient from "apollo-boost";
import Books from "./Books";
import {AddNewBook} from "./actions/AddNewBook";


const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
});

const App = () => (
    <ApolloProvider client={client}>
        <div className="container">
            <nav className="navbar navbar-dark bg-primary">
                <label className="navbar-brand">Book Store Application</label>
            </nav>
            <div className="row">
                <div className="col-md-8">
                    <Books />
                </div>
                <div className="col-md-4">
                    <AddNewBook />
                </div>
            </div>
        </div>
    </ApolloProvider>
);

export default App;
