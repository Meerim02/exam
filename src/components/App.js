import React, {useState}from 'react';
import initailBooks from '../data';
import BookItem from './BookItem';
import BookList from './BookList';
import SearchForm from './SearchForm';




const App = () => {
     const [books,setBooks] = useState (initailBooks)
     const [current,setCurrent] = useState({book:0,page:0})






     const filterBook = (search)=>{
         const filteredBooks = initailBooks.filter((book)=>{
         return( book.title.toLowerCase().includes(search.toLowerCase()))
       } )
       setBooks([...filteredBooks])
     }





     const setBook = (index) =>()=>{
         setCurrent({book :index,page:0})
     }




     const setPage = (index) =>()=> {
         setCurrent({...current,book:index})
     }






    return (
        <div className="container border shadow mt-5 p-4">
            <h1 className="text center">Library</h1>
            <SearchForm filterBook={filterBook}/>
             {books.length === 0 &&<p>Kitep jok</p>}
             {books.length > 0 && 
             <BookList setBook={setBook} books={books.slice(0,4)}/>}
             {books.Length > 0 && 
            <BookItem setPage={setPage} book={books[current.book]} page={current.page}/>}
            
           
           
        </div>
    );
};

export default App;