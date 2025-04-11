import { useState } from "react"

export function bookIndexSearch (books,value,setBackFlg,setBooks,setOriginalBooks){
    if (!value) return
    setBackFlg(true);
    setOriginalBooks(books);
    
    const filtered = books.filter(data=>data.title.toLowerCase().includes(value));
    setBooks(filtered);
    // console.log(filtered);
}