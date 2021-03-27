// import React from "react";
import React, { useState, useEffect } from "react";
// import p5 from "p5";
// import p5 from "react-p5";
import * as ml5 from "ml5";
// import Sketch from "react-p5";
// import P5Wrapper from "react-p5-wrapper";
// import sketch from "./sketch";
// import AudioContext from "react-p5";
import "p5/lib/addons/p5.sound";

function PitchPage() {
  // const [audioContext, setAudioContext] = useState(new AudioContext())
  const [mic, setMic] = useState();
  const [pitch, setPitch] = useState();
  // const [stream, setStream] = useState()
  const [frequency, setFrequency] = useState(100);
  const shouldBeListening = true;

  useEffect(() => {
    setup();
    return  () => {
        window.pitch = null
    }
  }, []);

  // let audioContext;
  //     let mic;
  // let pitch;
  //     let stream;

  const setup = async () => {
    let audioContext = new AudioContext();
    let stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    window.pitch = ml5.pitchDetection(
      "./model/",
      audioContext,
      stream,
      modelLoaded
    );
    //   startPitch(stream, audioContext);
    console.log("hi");
  };
  // setup();

  // const startPitch = (stream, audioContext) => {
  //   pitch = ml5.pitchDetection('./model/', audioContext, stream, modelLoaded);
  // }

  const modelLoaded = () => {
    //   document.querySelector('#status').textContent = 'Model Loaded';
    getPitch();
  };

  const getPitch = () => {
    console.log("getPitch", frequency);
    window.pitch?.getPitch((err, f) => {
      console.log("f", f);
      if (f) {
        //   document.querySelector('#result').textContent = frequency;
        setFrequency(f);
        console.log(f);
      } else {
        //   document.querySelector('#result').textContent = 'No pitch detected';
        setFrequency("nothing detected");
      }
    });
    
    if (window.pitch) {
      setTimeout(() => {
        getPitch();
      }, 100);
    }
  };
  // console.log(react-p5)
  // console.log(typeof p5)
  return (
    <div>
      <h1>Pitch Detection Example</h1>
      <p id="status">Loading Model...</p>
      <p id="result">No pitch detected</p>
      {frequency}

      {/* <h1>Find Your Vocal Range</h1>
    <h2>1. To find your lowest note, click the start button below, then sing your lowest note. The letter name of your lowest note will appear after three seconds. </h2>
    <button>Start</button>
    <p>Your lowest note is {lowestNote}</p>
    <h2>1. To find your highest note, click the start button below, then sing your highest note. The letter name of your highest note will appear after three seconds. </h2>
    <button>Start</button>
    <p>Your highest note is {highestNote}</p>
    <h2>Your vocal range is {lowestNote}-{highestNote}</h2> */}
    </div>
  );
}

export default PitchPage;
