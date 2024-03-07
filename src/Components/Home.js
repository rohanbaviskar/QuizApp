import React,{Fragment} from "react";
import {Helmet} from 'react-helmet';
import '@mdi/font/css/materialdesignicons.min.css';
import { Link } from "react-router-dom";

const Home =() => (
    <Fragment>
        <Helmet><title>Quiz App - Home </title></Helmet>
        <div id="home">
            <section>
                <div style={{textAlign:'center'}}>
                    <span className="mdi mdi-cube-outline"></span>
                </div>
           
            <h1>Quiz App</h1>
            <div className="play-button-continer">
                <ul>
                    <li><Link className="play-button"to ="/play/instructions">play</Link></li>
                </ul>
            </div>
        <div className="auth-container">
            <Link to="/login" className="auth-buttons"id="login">Login</Link>
            <Link to="/register" className="auth-buttons"id="signup">Signup</Link>
        </div>
        </section>
        </div>
        </Fragment>
);

export default Home;