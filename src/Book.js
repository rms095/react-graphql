import React from 'react';
const Book = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{props.book.title}
                <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
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
);
export default Book;