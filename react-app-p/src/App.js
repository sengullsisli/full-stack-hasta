import React from 'react';
import Login from "./components/login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";


import PatientInfo from "./components/patientinfo";
import Footer from "./components/footer";
import Logout from "./components/logout";


const App = () => {
    return (
        <div className="R-app">


            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Login/> }/>
                    <Route path='/login' element={<Login/> }/>
                    <Route path ='/home' element ={<Home/>}/>
                    <Route path= '/logout' element={<Logout/>}/>
                    <Route path='/hasta' element ={<PatientInfo/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </div>
    )

};

export default App;