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
  const [frequency, setFrequency] = useState(null);
  const [realNote, setRealNote] = useState("")
  const shouldBeListening = true;
  const hertzArray = [27.50, 29.13, 30.86, 32.70, 34.64, 36.70, 38.89, 41.20, 43.65, 46.24, 48.99, 51.91, 55.00, 58.27, 61.73, 65.40, 69.29, 73.41, 77.78, 82.40, 87.30, 92.49, 97.99, 103.82, 110.00, 116.54, 123.47, 130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 184.99, 195.99, 207.65, 220.00, 233.08, 246.94, 261.62, 277.18, 293.66, 311.12, 329.62, 349.22, 369.99, 391.99, 415.30, 440.00, 466.16, 493.88, 523.25, 554.36, 587.32, 622.25, 659.25, 698.45, 739.98, 783.99, 830.60, 880.00, 932.32, 987.76, 1046.50,  1108.73, 1174.65, 1244.50, 1318.51, 1396.91, 1479.97, 1567.98, 1661.21, 1760.00, 1864.65, 1975.53, 2093.00, 2217.46, 2349.31, 2489.01, 2637.02, 2793.82, 2959.95, 3135.96, 3322.43, 3520.00, 3729.31, 3951.06, 4186.00]
  const noteArray = ["A0", "A#0", "B0", "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1", "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6", "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7", "C8"]

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
        setFrequency(null);
      }
    });
    
    if (window.pitch) {
      setTimeout(() => {
        getPitch();
      }, 300);
    }
  };

  let closestPitch = hertzArray.reduce((a, b) => {
    return Math.abs(b - frequency) < Math.abs(a - frequency) ? b : a;
  });

  function hertzToNote(hertz) {
      const hertzIndex = hertzArray.indexOf(hertz)
      return noteArray[hertzIndex]
  }
  // function convertFrequency(frequency) {
  //   let closestPitch = hertzArray.reduce((a, b) => {
  //       return Math.abs(b - frequency) < Math.abs(a - frequency) ? b : a;
  //   });
  //   let hertzIndex = hertzArray.indexOf(closestPitch)
  //   return noteArray[hertzIndex]
  // }
  // setRealNote(convertFrequency())

  // console.log(react-p5)
  // console.log(typeof p5)
  return (
    <div>
      <div class="card song-page">
      <div class="container-fluid padding">
      <div class="row welcome text-center">
      <div class="col-12">
			<h1 class="display-4">Range Finder</h1>
		  </div>
      <hr></hr>
      <div class="col-12">
			<p class="lead">Use the steps below to determine what your vocal range is.</p>
			<p>1. First, sing your lowest note. The name of your lowest note will appear below.</p>
			<p>2. Next, sing your highest note. The name of your highest note will appear below.</p>
			<p>3. Your vocal range is your lowest note to your highest note (e.g. A2-G4).</p>

	    </div>
      {/* <h1>Your Pitch</h1> */}
      {/* <p id="status">Loading Model...</p>
      <p id="result">No pitch detected</p> */}
      {console.log(frequency, "this is the frequency")}
      <div class="col-12">
      <h2 class="display-4">{ frequency ? hertzToNote(closestPitch) : "" }</h2>
      </div>
      {/* <h1>Find Your Vocal Range</h1>
    <h2>1. To find your lowest note, click the start button below, then sing your lowest note. The letter name of your lowest note will appear after three seconds. </h2>
    <button>Start</button>
    <p>Your lowest note is x</p>
    <h2>1. To find your highest note, click the start button below, then sing your highest note. The letter name of your highest note will appear after three seconds. </h2>
    <button>Start</button>
    <p>Your highest note is y</p>
    <h2>Your vocal range is x-y</h2> */}
    </div>
    </div>
    </div>
    </div>
  );
}

export default PitchPage;

// ~~ Closest Hertz ~~ //
// let meanFrequency = 27.98;

// let closestPitch = hertzArray.reduce((a, b) => {
//     return Math.abs(b - meanFrequency) < Math.abs(a - meanFrequency) ? b : a;
// });

// console.log(closestHertz); Output: 27.50

// ~~ Hertz to Note ~~ //
// const hertzArray = [27.50, 29.13, 30.86, 32.70, 34.64, 36.70, 38.89, 41.20, 43.65, 46.24, 48.99, 51.91, 55.00, 58.27, 61.73, 65.40, 69.29, 73.41, 77.78, 82.40, 87.30, 92.49, 97.99, 103.82, 110.00, 116.54, 123.47, 130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 184.99, 195.99, 207.65, 220.00, 233.08, 246.94, 261.62, 277.18, 293.66, 311.12, 329.62, 349.22, 369.99, 391.99, 415.30, 440.00, 466.16, 493.88, 523.25, 554.36, 587.32, 622.25, 659.25, 698.45, 739.98, 783.99, 830.60, 880.00, 932.32, 987.76, 1046.50,  1108.73, 1174.65, 1244.50, 1318.51, 1396.91, 1479.97, 1567.98, 1661.21, 1760.00, 1864.65, 1975.53, 2093.00, 2217.46, 2349.31, 2489.01, 2637.02, 2793.82, 2959.95, 3135.96, 3322.43, 3520.00, 3729.31, 3951.06, 4186.00]

// const noteArray = ["A0", "A#0", "B0", "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1", "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6", "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7", "C8"]

// function hertzToNote(hertz) {
//   const hertzIndex = hertzArray.indexOf(hertz)
//   return noteArray[hertzIndex]
// }

