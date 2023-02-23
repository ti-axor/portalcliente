import React from 'react'
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
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