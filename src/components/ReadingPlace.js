import React from 'react';
import BookList from './BookList';
import Pagination from './Pagination';

const ReadingPlace = () => {
    return (
        <div className="border p-4 mt-5 mb-5">
            <h2>{book.title}</h2>
            <hr/>
            <p>
                {book.pages[pages]}
            </p>
            <Pagination pages={book.pages} setPage={setPage}/>
        </div>
    );
};

export default ReadingPlace;