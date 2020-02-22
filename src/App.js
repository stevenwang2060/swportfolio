import React, { useState } from 'react';
import Header from './components/Header/Header';
import Page from './components/Page';
import './App.css';

function App(){
  const [ page, setPage ] = useState(0);

  function handlePageChange(e){
    setPage(parseInt(e.target.id, 10));
  }

  return (
    <div className="app">
      <Header onClick={handlePageChange}/>
      <Page currentPage={page}/>
    </div>
  );
}

export default App;