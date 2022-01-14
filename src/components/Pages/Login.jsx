import React from "react";
import HeadPhone from '../assets/img/headphones.svg';
import './css/Login.css';
import {Link} from "react-router-dom";
// import Signup from "./Signup"

class Login extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/">Beat-Box</a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={HeadPhone} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Beat-Box</h1>
                            <h3><i>Music Melody !!</i></h3>
                            <p>Without music, life would be a mistake</p>
                            <Link to={"/home"} className="btn">
                                Start Listening
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;