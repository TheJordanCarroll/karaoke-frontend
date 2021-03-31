import React, { useState } from "react";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";
import "../recorder.css"

const DEFAULT_AUDIO_DETAILS = {
  url: null,
  blob: null,
  chunks: null,
  duration: {
    h: 0,
    m: 0,
    s: 0,
  },
};

function Record() {
  const [audioDetails, setAudioDetails] = useState(DEFAULT_AUDIO_DETAILS);

  function handleAudioStop(data) {
    console.log(data);
    setAudioDetails(data);
  }

  function handleAudioUpload(file) {
    console.log(file);
  }

  function handleRest() {
    setAudioDetails(DEFAULT_AUDIO_DETAILS);
  }

  return (
    <div className="recorderContainer">
      <Recorder
        record={true}
        title={"Voice Recorder"}
        audioURL={audioDetails.url}
        showUIAudio
        handleAudioStop={(data) => handleAudioStop(data)}
        handleAudioUpload={(data) => handleAudioUpload(data)}
        handleRest={() => handleRest()}
      />
    </div>
  );
}

export default Record;
