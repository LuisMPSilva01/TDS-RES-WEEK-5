import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import AsideBar from './Components/AsideBar';
import Main from './Components/Main';
import Form from './Components/Form';
import React, { useState } from 'react';
import Footer from './Components/Footer';

const links = [<a href="/home">Home</a>,<a href="/about">About</a>,<a href="/contact">Contact</a>]

const maregaCard = <><h1>Moussa Marega</h1>
                     <p>Legend</p>
                     <a href="/marega"><img src="marega.jpg" alt="Marega1" className="marega"/>
                     </a>
                   </>

function App() {
  const [cards, setCards] = useState([maregaCard,maregaCard,maregaCard,maregaCard]);
  return (
    <div>
        <Header text="Porto Legends"/>
        <Navbar items={links}/>
        <AsideBar items={links}/>
        <Main items={cards}/>
        <Form setCards={setCards}/>
        <Footer text="CopyRight &copy; 2022"/>
    </div>
  );
}


export default App;
