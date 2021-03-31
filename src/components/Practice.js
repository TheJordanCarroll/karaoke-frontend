import React from "react";

function Practice() {
    return (
      <div>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/dSHHecZM5DA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        {/* <a href="#" target="_blank" onClick="window.open('https://youtube.com','popup','width=600,height=600')">Youtube</a> */}
        <a
          href="https://youtube.com"
          target="popup"
          onclick="window.open('https://youtube.com','popup','width=600,height=600'); return false;"
        >
          Open Link in Popup
        </a>
      </div>
      //     <div
      //   className="video"
      //   style={{
      //     position: "relative",
      //     paddingBottom: "56.25%" /* 16:9 */,
      //     paddingTop: 25,
      //     height: 0
      //   }}
      // >
      //   <iframe
      //     style={{
      //       position: "absolute",
      //       top: 0,
      //       left: 0,
      //       width: "100%",
      //       height: "100%"
      //     }}
      //     src={`https://www.youtube.com/embed`}
      //     frameBorder="0"
      //   />
      // </div>
    );
  }
  
  export default Practice;