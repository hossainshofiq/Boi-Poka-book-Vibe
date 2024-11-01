import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../utilities/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList)
    }, [])

    const handleSort = sortType => {
        setSort(sortType)

       if(sortType === 'Number of Pages'){
        const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
        setReadList(sortedReadList)
       }
       if(sortType === 'Ratings'){
        const sortedReadList = [...readList].sort((a, b) => b.rating - a.rating);
        setReadList(sortedReadList)
       }
    }

    return (
        <div className=''>
            <h2 className='text-2xl my-8'>Book List</h2>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">{
                    sort ? `Sort By: ${sort}` : 'Sort By'
                }
                    </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={() => handleSort('Number of Pages')}><a>Number of Pages</a></li>
                    <li onClick={() => handleSort('Publisher Year')}><a>Publisher Year</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Books I read {readList.length} </h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My Wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;