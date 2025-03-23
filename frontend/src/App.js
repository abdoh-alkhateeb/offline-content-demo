import React from 'react';

const App = () => {
  return (
    <>
      <h1>My Streaming Platform</h1>
      <audio
        controls
        src={`${process.env.FILE_STORAGE_URL}/music.mp3`}
        preload="none"
      ></audio>
      <button title="Listen on the go. No connection required.">
        Save to Device
      </button>
    </>
  );
};

export default App;
