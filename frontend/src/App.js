import React from 'react';

const AUDIO_URL = `${process.env.FILE_STORAGE_URL}/music.mp3`;

const cacheAudio = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.active.postMessage({
        type: 'CACHE_AUDIO',
        url: AUDIO_URL,
      });
    });
  }
};

const App = () => {
  return (
    <>
      <h1>My Streaming Platform</h1>
      <audio controls src={AUDIO_URL} preload="none"></audio>
      <button
        title="Listen on the go. No connection required."
        onClick={cacheAudio}
      >
        Save to Device
      </button>
    </>
  );
};

export default App;
