import React, { useEffect } from "react";
import "./App.css";

const keys = [
  {
    key: "Q",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  //Called on page load to add keydown event listener to page
  useEffect(() => {
    console.log("useEffect");
    document.addEventListener("keydown", handleKeyPress, true);
  });

  //Handle button clicks
  function handleClick(e) {
    playAudio(e.target.children[0]);
  }

  //Handle key presss
  function handleKeyPress(e) {
    switch (e.code) {
      case "KeyQ":
        playAudio(document.getElementById("Q").children[0]);
        break;
      case "KeyW":
        playAudio(document.getElementById("W").children[0]);
        break;
      case "KeyE":
        playAudio(document.getElementById("E").children[0]);
        break;
      case "KeyA":
        playAudio(document.getElementById("A").children[0]);
        break;
      case "KeyS":
        playAudio(document.getElementById("S").children[0]);
        break;
      case "KeyD":
        playAudio(document.getElementById("D").children[0]);
        break;
      case "KeyZ":
        playAudio(document.getElementById("Z").children[0]);
        break;
      case "KeyX":
        playAudio(document.getElementById("X").children[0]);
        break;
      case "KeyC":
        playAudio(document.getElementById("C").children[0]);
        break;
      default:
        break;
    }
  }

  function playAudio(audioElement) {
    //IF audio is already playing STOP audio where it is and play it again
    if (audioElement.paused === false) {
      audioElement.pause();
      audioElement.currentTime = 0.0;
      audioElement.play();
    } else {
      //ELSE play normally
      audioElement.play();
    }
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-1">
        {keys.map((key) => {
          return (
            <button
              className="h-12 w-12 border-black border-2"
              onClick={handleClick}
              id={key.key}
              key={key.key}
            >
              {key.key}
              <audio src={key.audioSrc}></audio>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default App;
