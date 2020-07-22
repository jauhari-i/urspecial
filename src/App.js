import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import "./App.css";
import More from "./more.svg";
import ReactTooltip from "react-tooltip";
import { SnackbarProvider, useSnackbar } from "notistack";
import socketIOClient from "socket.io-client";

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
        <div className="row-content">
          {h % 24 >= 19 && <h1>Selamat Malam, {name}</h1>}
          {h % 24 >= 3 && h % 24 < 11 && <h1>Selamat Pagi, {name}</h1>}
          {h % 24 >= 11 && h % 24 < 15 && <h1>Selamat Siang, {name}</h1>}
          {h % 24 >= 15 && h % 24 < 19 && <h1>Selamat Sore, {name}</h1>}
          {h % 24 >= 0 && h % 24 < 3 && <h1>Selamat Petang, {name}</h1>}
          <img src={More} width="20px" alt="more" className="more" data-tip="React-tooltip" />
        </div>
        <ReactTooltip place="top" type="light" effect="float" multiline={true}>
          <Message h={h} />
        </ReactTooltip>
      </div>
      <div className="footer">
        <p className="quote">{quote.content}</p>
        <p>~{quote.author}</p>
      </div>
    </div>
  );
}

function Content({ children }) {
  const time = new Date();
  const h = time.getHours();
  return (
    <div
      id={
        h % 24 >= 19 || h % 24 < 3
          ? "app-night"
          : h % 24 >= 3 && h % 24 < 11
          ? "app-morning"
          : h % 24 >= 11 && h % 24 < 15
          ? "app-noon"
          : h % 24 >= 15 && h % 24 < 19 && "app-evening"
      }
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {h % 24 >= 19 || h % 24 < 3 ? (
        <Night />
      ) : h % 24 >= 3 && h % 24 < 11 ? (
        <Morning />
      ) : h % 24 >= 11 && h % 24 < 15 ? (
        <Noon />
      ) : (
        h % 24 >= 15 && h % 24 < 19 && <Evening />
      )}
      <div>{children}</div>
    </div>
  );
}

function MyApp() {
  return (
    <SnackbarProvider
      maxSnack={4}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <App />
    </SnackbarProvider>
  );
}

function App() {
  const [name, setName] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (name) {
      const interval = setInterval(() => {
        const socket = socketIOClient("https://api-urspecial.herokuapp.com");
        socket.on("tweet", (data) => {
          enqueueSnackbar(data.text);
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [name]);

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

const Night = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 400,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
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
  );
};

const Morning = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
  );
};

const Noon = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 150,
            density: {
              enable: false,
            },
          },
          size: {
            value: 10,
            random: true,
            anim: {
              speed: 0.5,
              size_min: 0.3,
            },
          },
          move: {
            direction: "right",
            out_mode: "out",
          },
          line_linked: {
            enable: false,
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "remove",
            },
          },
          modes: {
            remove: {
              particles_nb: 10,
            },
          },
        },
      }}
    />
  );
};

const Evening = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 80,
          },
          size: {
            value: 2,
            random: true,
          },
          move: {
            direction: "left",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
};

const Message = ({ h }) => {
  if (h % 24 >= 0 && h % 24 < 2) {
    return (
      <p>
        Kok belum tidur? Sudah malem lo.... <br />
        Kesehatannya dijaga dong. Jangan begadang terus...
      </p>
    );
  }
  if (h % 24 >= 2 && h % 24 < 4) {
    return <p>Sholat tahajud dulu yuk...</p>;
  }
  if (h % 24 >= 4 && h % 24 < 5) {
    return <p>Sudah sholat subuh belum? Kalo belum sholat dulu ya!</p>;
  }
  if (h % 24 >= 5 && h % 24 < 6) {
    return <p>Selamat pagi! Semangat jalani harinya</p>;
  }
  if (h % 24 >= 7 && h % 24 < 9) {
    return (
      <p>
        Ayo sholat dhuha biar dipermudah segala urusannya! <br /> Jangan lupa sarapan juga!{" "}
      </p>
    );
  }
  if (h % 24 >= 9 && h % 24 < 11) {
    return <p>Selamat Beraktifitas !</p>;
  }
  if (h % 24 >= 11 && h % 24 < 15) {
    return (
      <p>
        Sholat zuhur yuk! udah masuk waktunya nih! <br /> Jangan lupa makan siang juga ya{" "}
      </p>
    );
  }
  if (h % 24 >= 15 && h % 24 < 16) {
    return <p>Sudah masuk waktu ashar nih! Sholat yuk! habis itu main lagi</p>;
  }
  if (h % 24 >= 16 && h % 24 < 18) {
    return <p>Mandi sana bau ih....</p>;
  }
  if (h % 24 >= 18 && h % 24 < 19) {
    return <p>Maghrib woy!!</p>;
  }
  if (h % 24 >= 19 && h % 24 < 20) {
    return <p>Isya telah datang! Sholat dulu yuk biar nanti malem nggak kelupaan</p>;
  }
  if (h % 24 >= 20 && h % 24 < 22) {
    return (
      <p>
        Lagi ngapain nih? Udah makan apa belum? <br /> Kalo belum makan dulu ya?
      </p>
    );
  }
  if (h % 24 >= 22 && h % 24 < 24) {
    return <p>Tidur dong udah jam {h % 12} nih! jangan begadang ya?</p>;
  }
  return <p>Hai!!</p>;
};

export default MyApp;
