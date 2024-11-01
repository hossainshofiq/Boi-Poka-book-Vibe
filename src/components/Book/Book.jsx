import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, image, bookName, author, tags, category, rating, totalPages } = book;
    return (
        <Link to={`books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl border p-6">
                <figure className='bg-gray-500 py-8 rounded-2xl'>
                    <img className='h-40' src={image} alt={bookName} />
                </figure>


                <div className="mt-6 space-y-4">
                    <div className='flex gap-3'>
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs rounded-full text-green-600 bg-green-100"> {tag} </button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>By : {author} </p>
                    <div className="border-b border-dashed"></div>
                    <div className="card-actions justify-between">
                        <div>{category} </div>
                        <div>No. of Pages: {totalPages}</div>
                        <div className='flex items-center gap-2'>
                            <div>{rating} </div>
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;