import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
// import AvatarImage from "../assets/img/avatar.jpg";
// import gursparsh from "../assets/img/gursparsh.jpg"
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developers</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    {/* <img src={AvatarImage} alt="Profile"/> */}
                    <div className={"Card-details"}>
                        <h3>Minor Project</h3>
                        <p>By Group: 12</p>
                        <p>Under the guidance of</p>
                        <h4>Manmeet Singh</h4>
                    </div>
                    
                </div>
                <div className="Developer-profileDetails">
                    <p>This project is made by:-</p>
                    <ul>
                        <li>
                            
                            Japneet Kaur
                        </li>
                        <li>
                            
                            Harmeet Kaur
                        </li>
                        <li>
                          
                            Harleen Kaur
                        </li>
                        <li>
                            
                            Janisha Sachdeva
                        </li>
                        <li>
                            
                            Gursparsh Kaur
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Developer;
