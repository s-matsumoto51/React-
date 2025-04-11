// import { createTheme } from '@mui/material/styles';
import Layout from "./common/Layout";
import {Routes,Route} from "react-router-dom";
import { BookIndex } from './page/books/BookIndex';
import { BookSearch } from './page/books/BookSearch';
import { BookEdit } from './page/books/BookEdit';
import { BookDetail } from './page/books/BookDetail';
import { useEffect, useState } from 'react';
import { useParsist } from "./hooks/useParsist";
import { Input, TextField, Typography } from "@mui/material";
import { usePracice } from "./hooks/usePractice";

 function App() {
//   const[data,loading,error] = usePracice('https://jsonplaceholder.typicode.com/posts') 

//   console.log(data);

//   return (
//     <div>
//       {data.map((data)=>{
//         return <p>{data.id}</p>
//       })}
//     </div>
//   );
  const STRAGE_KEY ='books';

  const[books,setBooks] = useParsist(STRAGE_KEY);

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<BookIndex books={books} setBooks={setBooks}/>}/>
        {/* <Route path="serchResult" element={<BookIndex books={books} />}/> */}
        <Route path='search' element={<BookSearch book={books} setBook={setBooks}/>}/>
        <Route path='edit' element={<BookEdit books={books}/>}>
          <Route path=':id' element={<BookDetail books={books} setBooks={setBooks}/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
