import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 py-20 px-36">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bannerImg}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='space-y-5'>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <button className="btn btn-primary">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;