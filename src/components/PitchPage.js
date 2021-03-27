// import React from "react";
import React from "react";
// import p5 from "p5";
// import p5 from "react-p5";
import * as ml5 from "ml5";
// import Sketch from "react-p5";
// import P5Wrapper from "react-p5-wrapper";
// import sketch from "./sketch";
// import AudioContext from "react-p5";
import 'p5/lib/addons/p5.sound';

function PitchPage() {
    let audioContext;
        let mic;
        let pitch;
        let stream;

        async function setup() {
          audioContext = new AudioContext();
          stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
          startPitch(stream, audioContext);
          console.log("hi")
        }
        setup();

        function startPitch(stream, audioContext) {
          pitch = ml5.pitchDetection('./model/', audioContext, stream, modelLoaded);
        }

        function modelLoaded() {
          document.querySelector('#status').textContent = 'Model Loaded';
          getPitch();
        }

        function getPitch() {
          pitch.getPitch(function (err, frequency) {
            if (frequency) {
              document.querySelector('#result').textContent = frequency;
              console.log(frequency)
            } else {
              document.querySelector('#result').textContent = 'No pitch detected';
            }
            getPitch();
          })
        }
    // console.log(react-p5)
    // console.log(typeof p5)
    return (
        <div>
    <h1>Pitch Detection Example</h1>
    <p id='status'>Loading Model...</p>
    <p id='result'>No pitch detected</p>

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