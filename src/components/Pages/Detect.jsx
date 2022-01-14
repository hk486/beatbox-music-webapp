import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Search from "./Search";
import Radio from "./Radio";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./css/Detect.css"

function Detect() {
  const commands = [
    {
      command: ["Go to * page", "Go to *", "Open * page", "Open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");
  const pages = ["home", "about", "search", "radio"];
  const urls = {
    home: "/home",
    about: "/home/about",
    search: "/home/search",
    radio: "/home/radio",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]} />;
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>;
    }
  }

  return (
    <div className="detect">
        <h1>Navigation Page</h1>
      <BrowserRouter>
        {/* <div id="links">
          <Link to="/home">Home</Link>
          <Link to="/home/about">About</Link>
          <Link to="/home/search">Search</Link>
          <Link to="/home/radio">Radio</Link>
        </div> */}

        <Route path="/home" exact component={Home} />
        {/* <Route path="/home" component={Home} /> */}
        <Route path="/home/about" exact component={About} />
        <Route path="/home/search" component={Search} />
        <Route path="/home/radio" component={Radio} />

        {redirect}
      </BrowserRouter>

      <p id="transcript">Transcript: {transcript}</p>

      <button onClick={SpeechRecognition.startListening}>Start</button>
    </div>
  );
}

export default Detect;
