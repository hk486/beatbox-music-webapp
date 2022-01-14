import React, {useState} from 'react'
import {Link} from "react-router-dom";
// import Home from './Home';
// import './';
import { auth, provider} from './firebase'
import { useDispatch } from 'react-redux';
import {login} from "../features/userSlice";
import './Signup.css'

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    // const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            (userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        // uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        // photoUrl: userAuth.user.photoURL,
                    })
                );
            }
        )
        .catch((error) => alert(error));
    };
    const register = () => {
        // if(!name) {
        //     return alert("Please enter a full name!");
        // }
auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL,
            }))
        }).catch(error=>alert(error.message));
    };

    return (

        <div className="main">
             {/* <img src="http://www.mahesh-europe.com/wp-content/uploads/2020/07/Linkedin-Logo-2011%E2%80%932019.png" alt="" /> */}
            <form className="login">
                
                <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Full name(required if registering)" type="text" />
                {/* <input 
                value={profilePic} 
                onChange={(e) => setProfilePic(e.target.value)} 
                placeholder="Profile pic URL (optional)" type="text" /> */}
                <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" type="email"/>
                <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" type="password"/>
                <Link to={"/home"} ><button type="submit" 
                // onClick={loginToApp} 
                >Continue</button>
                </Link>
            </form>
            {/* <p>Not a member?
                {/* <Link to={"/home"} > */}
                {/* <span className="login__register" 
                onClick={register} 
                >Register Now</span> 
            </p> */}
            {/* <Link to={"/Home"} className="btn">
                 Start Listening
           </Link> */}
        </div>
        
    )
}

export default Signup
