
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className='font-bold text-4xl text-center'>Books</h2>
            <p>Books: {books.length} </p>
        </div>
    );
};

export default Books;

/**
 * 1. state to store all books
 * 2. useEffect
 * 3. fetch to load data
 * 4. set the data to setData
 */