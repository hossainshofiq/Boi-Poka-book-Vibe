import { toast } from "react-toastify";

const getStoredReadList = () =>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredReadList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id, 'Already exist')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast ('This book is added to your read list')
    }
}


const getStoredWishList = () =>{
    const wishListStr = localStorage.getItem('wish-list');
    if(wishListStr){
        const wishList = JSON.parse(wishListStr);
        return wishList;
    }
    else{
        return [];
    }
}

const addToWishList = (id) =>{
    const wishList = getStoredWishList();
    if(wishList.includes(id)){
        console.log(id, 'Already exist')
    }
    else{
        wishList.push(id);
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem('wish-list', wishListStr);
        // ideally triggerd toast from the component
        toast ('This book is added to your wish list')
    }
}

export{addToStoredReadList, addToWishList, getStoredReadList}