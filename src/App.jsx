import React from 'react'
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skils from "./skils/Skils";
import Projects from "./works/Projects";
import WorksBlock from "./aboutFreelanceBlock/WorksBlock";
import Contacts from "./Contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
            <Skils/>
            <Projects />
            <WorksBlock />
            <Contacts />
            <Footer/>
        </div>
    )
}

export default App;


