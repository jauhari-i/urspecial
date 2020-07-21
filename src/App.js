import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import "./App.css";

function getName() {
  const name = localStorage.getItem("myName");
  return name;
}

function Spinner() {
  return (
    <div className="spinner" id="container">
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#fc6767" />
          </filter>
        </defs>
        <circle
          id="spinner"
          style={{
            fill: "transparent",
            stroke: "#fc6767",
            strokeWidth: "2px",
            strokeLinecap: "round",
            filter: "url(#shadow)",
          }}
          cx="50"
          cy="50"
          r="45"
        />
      </svg>
    </div>
  );
}

function FormName() {
  const [name, setName] = useState("");
  const onChange = (e) => {
    setName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("myName", name);
    setName("");
    window.location.reload();
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="name">Siapa Kamu?</label>
        <input
          className="inputan"
          onChange={(e) => onChange(e)}
          type="text"
          name="name"
          id="name"
        />
        <button className="button" type="submit"></button>
      </form>
      <div className="form-footer">Kenalan dulu yuk!</div>
    </div>
  );
}

function Main({ name }) {
  const [time, setTime] = useState(new Date());
  const update = () => {
    setTime(new Date());
  };
  useEffect(() => {
    setInterval(update, 1000);
  }, [time]);

  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((data) => data.json())
      .then((data) => setQuote(data));
  }, []);

  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();

  return (
    <div className="container">
      <div className="content">
        <h1 style={{ fontSize: "4rem" }}>
          {h % 24}:{m < 10 ? "0" + m : m}:{s < 10 ? "0" + s : s}
        </h1>
        {h % 24 >= 19 && <h1>Selamat Malam, {name}</h1>}
        {h % 24 >= 15 && h <= 19 && <h1>Selamat Sore, {name}</h1>}
        {h % 24 >= 11 && h <= 15 && <h1>Selamat Siang, {name}</h1>}
        {h % 24 >= 5 && h <= 11 && <h1>Selamat Pagi, {name}</h1>}
        {h % 24 >= 1 && h <= 5 && <h1>Selamat Petang, {name}</h1>}
      </div>
      <div className="footer">
        <p className="quote">{quote.content}</p>
        <p>~{quote.author}</p>
      </div>
    </div>
  );
}

function Content({ children }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.02,
              },
              move: {
                direction: "right",
                speed: 0.05,
              },
              size: {
                value: 1,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
        {children}
      </div>
    </div>
  );
}

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    return setName(getName());
  }, []);

  if (!name)
    return (
      <Content>
        <FormName />
      </Content>
    );
  if (name)
    return (
      <Content>
        <Main name={name} />
      </Content>
    );
  return <Spinner />;
}

export default App;
