import React from 'react';

const ErrorPage = () => {
    return (
        <div className='space-y-5 text-center my-40'>
            <h2 className='font-bold text-red-600 text-5xl'>Page not found</h2>
            <p className='font-bold text-red-500'>Status: 404</p>
        </div>
    );
};

export default ErrorPage;