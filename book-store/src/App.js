import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from './components/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import About from './components/About';
import BookDetail from './components/Book/BookDetail';


function App() {
  return (
    <div>
      <React.Fragment>
        <header>
          <Header/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home/>} exact></Route>
            <Route path='/add' element={<AddBook/>} exact></Route>
            <Route path='/books' element={<Books/>} exact></Route>
            <Route path='/about' element={<About/>} exact></Route>
            <Route path='/books/:id' element={<BookDetail/>} exact></Route>
          </Routes>
        </main>
      </React.Fragment>
      
    </div>
  );
}

export default App;

