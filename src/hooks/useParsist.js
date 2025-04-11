import { useEffect, useState } from "react";

export const useParsist=(STRAGE_KEY)=>{
    
  const [books,setBooks] = useState(()=>{
    const save= localStorage.getItem(STRAGE_KEY)
    const parseJson = JSON.parse(save)
    return parseJson || []
  });
  
  useEffect(()=>{
    if (books.length > 0) {  // ✅ 空でないときのみ保存
      localStorage.setItem(STRAGE_KEY, JSON.stringify(books));
    }
  }, [books])

    return [books,setBooks]
}