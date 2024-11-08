import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToWishList } from '../utilities/addToDb';
import { Helmet } from 'react-helmet';

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)
    // console.log(book)

    const { bookId: currentBookId, bookName, author, image, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    const handleWishList = (id) => {
        addToWishList(id);
    }

    return (
            <div className="hero-content flex-col lg:flex-row">
                <Helmet>
                    <title>boi poka | Details</title>
                </Helmet>

                <img src={image} className="rounded-2xl bg-base-200 p-16 h-[564px]" />

                <div>
                    <h1 className="text-5xl font-bold text-black">{bookName} </h1>
                    <h4 className='font-medium text-gray-500'>By: {author} </h4>
                    <div className="divider"></div>

                    <p>{category} </p>
                    <div className="divider"></div>

                    <p>Review: {review} </p>
                    <h4>Tag: {tags} </h4>
                    <div className="divider"></div>

                    <div className='space-y-3'>
                        <p>Number of Pages: {totalPages} </p>
                        <p>Publisher: {publisher} </p>
                        <p>Year of Publishing: {yearOfPublishing} </p>
                        <p>Rating: {rating} </p>
                    </div>

                    <div className='flex gap-3 mt-5'>
                        <button onClick={() =>  handleMarkAsRead(bookId)} className="btn btn-outline btn-accent">Mark as Read</button>
                        <button onClick={() => handleWishList(bookId)} className="btn btn-accent">Add to WishList</button>
                    </div>
                </div>
            </div>
    )
};

export default BookDetail;