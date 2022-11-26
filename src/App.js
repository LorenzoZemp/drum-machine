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
    e.target.classList.remove("shadow-lg");
    e.target.classList.add("shadow-inner");
    setTimeout(() => {
      e.target.classList.remove("shadow-inner");
      e.target.classList.add("shadow-lg");
    }, 100);
  }

  //Handle key press down
  function handleKeyDown(e) {
    //console.log(e);
    switch (e.code) {
      case "KeyQ":
        playAudio(document.getElementById("Q").children[0]);
        document.getElementById("Q").classList.remove("shadow-lg");
        document.getElementById("Q").classList.add("shadow-inner");
        break;
      case "KeyW":
        playAudio(document.getElementById("W").children[0]);
        document.getElementById("W").classList.remove("shadow-lg");
        document.getElementById("W").classList.add("shadow-inner");
        break;
      case "KeyE":
        playAudio(document.getElementById("E").children[0]);
        document.getElementById("E").classList.remove("shadow-lg");
        document.getElementById("E").classList.add("shadow-inner");
        break;
      case "KeyA":
        playAudio(document.getElementById("A").children[0]);
        document.getElementById("A").classList.remove("shadow-lg");
        document.getElementById("A").classList.add("shadow-inner");
        break;
      case "KeyS":
        playAudio(document.getElementById("S").children[0]);
        document.getElementById("S").classList.remove("shadow-lg");
        document.getElementById("S").classList.add("shadow-inner");
        break;
      case "KeyD":
        playAudio(document.getElementById("D").children[0]);
        document.getElementById("D").classList.remove("shadow-lg");
        document.getElementById("D").classList.add("shadow-inner");
        break;
      case "KeyZ":
        playAudio(document.getElementById("Z").children[0]);
        document.getElementById("Z").classList.remove("shadow-lg");
        document.getElementById("Z").classList.add("shadow-inner");
        break;
      case "KeyX":
        playAudio(document.getElementById("X").children[0]);
        document.getElementById("X").classList.remove("shadow-lg");
        document.getElementById("X").classList.add("shadow-inner");
        break;
      case "KeyC":
        playAudio(document.getElementById("C").children[0]);
        document.getElementById("C").classList.remove("shadow-lg");
        document.getElementById("C").classList.add("shadow-inner");
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
        document.getElementById("Q").classList.add("shadow-lg");
        document.getElementById("Q").classList.remove("shadow-inner");
        break;
      case "KeyW":
        document.getElementById("W").classList.add("shadow-lg");
        document.getElementById("W").classList.remove("shadow-inner");
        break;
      case "KeyE":
        document.getElementById("E").classList.add("shadow-lg");
        document.getElementById("E").classList.remove("shadow-inner");
        break;
      case "KeyA":
        document.getElementById("A").classList.add("shadow-lg");
        document.getElementById("A").classList.remove("shadow-inner");
        break;
      case "KeyS":
        document.getElementById("S").classList.add("shadow-lg");
        document.getElementById("S").classList.remove("shadow-inner");
        break;
      case "KeyD":
        document.getElementById("D").classList.add("shadow-lg");
        document.getElementById("D").classList.remove("shadow-inner");
        break;
      case "KeyZ":
        document.getElementById("Z").classList.add("shadow-lg");
        document.getElementById("Z").classList.remove("shadow-inner");
        break;
      case "KeyX":
        document.getElementById("X").classList.add("shadow-lg");
        document.getElementById("X").classList.remove("shadow-inner");
        break;
      case "KeyC":
        document.getElementById("C").classList.add("shadow-lg");
        document.getElementById("C").classList.remove("shadow-inner");
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
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-1">
          {keys.map((key) => {
            return (
              <button
                className={"h-36 w-36 border-none rounded-md shadow-lg"}
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
    </>
  );
}

export default App;
