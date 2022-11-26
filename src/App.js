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
  //Called on page load to add keydown and keyup event listener to page
  useEffect(() => {
    console.log("useEffect");
    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("keyup", handleKeyUp, true);
  });

  //Handle button clicks
  function handleClick(e) {
    playAudio(e.target.children[0]);
    e.target.classList.remove("bg-neu-linear-gradient-out");
    e.target.classList.add("bg-neu-linear-gradient-in");
    setTimeout(() => {
      e.target.classList.remove("bg-neu-linear-gradient-in");
      e.target.classList.add("bg-neu-linear-gradient-out");
    }, 150);
  }

  //Handle key press down
  function handleKeyDown(e) {
    //console.log(e);
    switch (e.code) {
      case "KeyQ":
        playAudio(document.getElementById("Q").children[0]);
        document
          .getElementById("Q")
          .classList.remove("bg-neu-linear-gradient-out");
        document.getElementById("Q").classList.add("bg-neu-linear-gradient-in");
        break;
      case "KeyW":
        playAudio(document.getElementById("W").children[0]);
        document
          .getElementById("W")
          .classList.remove("bg-neu-linear-gradient-out");
        document.getElementById("W").classList.add("bg-neu-linear-gradient-in");
        break;
      case "KeyE":
        playAudio(document.getElementById("E").children[0]);
        document
          .getElementById("E")
          .classList.remove("bg-neu-linear-gradient-out");
        document.getElementById("E").classList.add("bg-neu-linear-gradient-in");
        break;
      case "KeyA":
        playAudio(document.getElementById("A").children[0]);
        document
          .getElementById("A")
          .classList.remove("bg-neu-linear-gradient-out");
        document.getElementById("A").classList.add("bg-neu-linear-gradient-in");
        break;
      case "KeyS":
        playAudio(document.getElementById("S").children[0]);
        document
          .getElementById("S")
          .classList.remove("bg-neu-linear-gradient-out");
        document.getElementById("S").classList.add("bg-neu-linear-gradient-in");
        break;
      case "KeyD":
        playAudio(document.getElementById("D").children[0]);
        document
          .getElementById("D")
          .classList.remove("bg-neu-linear-gradient-out");
        document.getElementById("D").classList.add("bg-neu-linear-gradient-in");
        break;
      case "KeyZ":
        playAudio(document.getElementById("Z").children[0]);
        document
          .getElementById("Z")
          .classList.remove("bg-neu-linear-gradient-out");
        document.getElementById("Z").classList.add("bg-neu-linear-gradient-in");
        break;
      case "KeyX":
        playAudio(document.getElementById("X").children[0]);
        document
          .getElementById("X")
          .classList.remove("bg-neu-linear-gradient-out");
        document.getElementById("X").classList.add("bg-neu-linear-gradient-in");
        break;
      case "KeyC":
        playAudio(document.getElementById("C").children[0]);
        document
          .getElementById("C")
          .classList.remove("bg-neu-linear-gradient-out");
        document.getElementById("C").classList.add("bg-neu-linear-gradient-in");
        break;
      default:
        break;
    }
  }

  //Handle key release up
  function handleKeyUp(e) {
    // console.log(e.beingPressed);
    switch (e.code) {
      case "KeyQ":
        document
          .getElementById("Q")
          .classList.add("bg-neu-linear-gradient-out");
        document
          .getElementById("Q")
          .classList.remove("bg-neu-linear-gradient-in");
        break;
      case "KeyW":
        document
          .getElementById("W")
          .classList.add("bg-neu-linear-gradient-out");
        document
          .getElementById("W")
          .classList.remove("bg-neu-linear-gradient-in");
        break;
      case "KeyE":
        document
          .getElementById("E")
          .classList.add("bg-neu-linear-gradient-out");
        document
          .getElementById("E")
          .classList.remove("bg-neu-linear-gradient-in");
        break;
      case "KeyA":
        document
          .getElementById("A")
          .classList.add("bg-neu-linear-gradient-out");
        document
          .getElementById("A")
          .classList.remove("bg-neu-linear-gradient-in");
        break;
      case "KeyS":
        document
          .getElementById("S")
          .classList.add("bg-neu-linear-gradient-out");
        document
          .getElementById("S")
          .classList.remove("bg-neu-linear-gradient-in");
        break;
      case "KeyD":
        document
          .getElementById("D")
          .classList.add("bg-neu-linear-gradient-out");
        document
          .getElementById("D")
          .classList.remove("bg-neu-linear-gradient-in");
        break;
      case "KeyZ":
        document
          .getElementById("Z")
          .classList.add("bg-neu-linear-gradient-out");
        document
          .getElementById("Z")
          .classList.remove("bg-neu-linear-gradient-in");
        break;
      case "KeyX":
        document
          .getElementById("X")
          .classList.add("sbg-neu-linear-gradient-out");
        document
          .getElementById("X")
          .classList.remove("bg-neu-linear-gradient-in");
        break;
      case "KeyC":
        document
          .getElementById("C")
          .classList.add("bg-neu-linear-gradient-out");
        document
          .getElementById("C")
          .classList.remove("bg-neu-linear-gradient-in");
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
    <div className="bg-neu-gray h-screen">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-10">
          {keys.map((key) => {
            return (
              <button
                className={
                  "h-36 w-36 bg-neu-linear-gradient-out rounded-30 shadow-neu-shadow"
                }
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
      </div>
    </div>
  );
}

export default App;
