import React, { useEffect, useState } from "react";
import "./App.css";

const keys = [
  {
    key: "Q",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Heater 1",
  },
  {
    key: "W",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater 2",
  },
  {
    key: "E",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Heater 3",
  },
  {
    key: "A",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Heater 4",
  },
  {
    key: "S",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Clap",
  },
  {
    key: "D",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Open Hi-Hat",
  },
  {
    key: "Z",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    name: "Kick n' Hat",
  },
  {
    key: "X",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "Kick",
  },
  {
    key: "C",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "Closed Hi-Hat",
  },
];

function App() {
  const [padName, setPadName] = useState("Drum Pad");

  //Called on page load to add keydown and keyup event listener to page
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("keyup", handleKeyUp, true);
  });

  //Handle button clicks
  function handleClick(e) {
    setPadName(e.target.children[0].className);
    playClip(e.target.id);
    animateDown(e.target.id);
    setTimeout(() => {
      animateUp(e.target.id);
    }, 150);
  }

  //Handle key press down
  function handleKeyDown(e) {
    setPadName(
      document.getElementById(e.key.toUpperCase()).children[0].className
    );
    playClip(e.key.toUpperCase());
    animateDown(e.key.toUpperCase());
  }

  //Handle Key Release
  function handleKeyUp(e) {
    animateUp(e.key.toUpperCase());
  }

  function playClip(id) {
    const audioElement = document.getElementById(id).children[0];

    if (audioElement.paused === false) {
      audioElement.pause();
      audioElement.currentTime = 0.0;
      audioElement.play();
    } else {
      //ELSE play normally
      audioElement.play();
    }
  }

  function animateDown(id) {
    document.getElementById(id).classList.remove("bg-neu-linear-gradient-out");
    document.getElementById(id).classList.add("bg-neu-linear-gradient-in");
  }

  function animateUp(id) {
    document.getElementById(id).classList.remove("bg-neu-linear-gradient-in");
    document.getElementById(id).classList.add("bg-neu-linear-gradient-out");
  }

  return (
    <div className="bg-neu-gray h-screen flex flex-col justify-center items-center">
      <div>
        <div className="mx-8 mb-14 py-4 rounded-xl bg-neu-linear-gradient-out text-center shadow-neu-shadow">
          <h1 className="text-2xl text-gray-600">{padName}</h1>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {keys.map((key) => {
            return (
              <button
                className={`h-24 w-24 lg:h-36 lg:w-36 bg-neu-linear-gradient-out rounded-30 shadow-neu-shadow text-gray-600 outline-none`}
                onClick={handleClick}
                id={key.key}
                key={key.name}
              >
                {key.key}
                <audio className={`${key.name}`} src={key.audioSrc}></audio>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
