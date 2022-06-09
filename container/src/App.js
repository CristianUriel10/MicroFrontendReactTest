import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const defaultHistory = createBrowserHistory();

const { REACT_APP_DOGS_HOST: dogsHost, REACT_APP_CATS_HOST: catsHost } =
  process.env;

function Header() {
  return (
    <div className="banner">
      <h1 className="banner-title">&#128571; Cats and Dogs &#128021;</h1>
      <h4>Random pics of cats and dogs</h4>
    </div>
  );
}

function Dogs({ history }) {
  return <MicroFrontend history={history} host={dogsHost} name="Dogs" />;
}

function Cats({ history }) {
  return <MicroFrontend history={history} host={catsHost} name="Cats" />;
}

function GreetingCat({ history }) {
  return (
    <div>
      <Header />
      <div className="home">
        <MicroFrontend history={history} host={catsHost} name="Cats" />
      </div>
    </div>
  );
}

function Home({ history }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const handleOnClick = () => {
    // history.push(`/cat/${input}`);
    navigate(`/cat/${input}`);
  };

  return (
    <div>
      <Header history={history} />
      <div className="home">
        <input
          placeholder="Insert a greeting"
          defaultValue={input}
          onBlur={(e) => setInput(e.target.value)}
        />
        <button onClick={handleOnClick}>Greet Me</button>
      </div>

      <div className="home">
        <div className="content">
          <div className="cat">
            <Cats history={history} />
          </div>
          <div className="dog">
            <Dogs history={history} />
          </div>
        </div>
      </div>
    </div>
  );
}

function App({ history = defaultHistory }) {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Home history={history} />} />
          <Route
            exact
            path="/cat/:greeting"
            element={<GreetingCat history={history} />}
          />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
