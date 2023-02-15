import React from 'react'
import Header from '../../component/Header';
import Main from '../../component/Main';
import Footer from '../../component/Footer';
import '../../App.css';

function Home() {
  return (
    <main className="App">
        <Header />
        <Main />
        <Footer />
    </main>
  )
}

export default Home