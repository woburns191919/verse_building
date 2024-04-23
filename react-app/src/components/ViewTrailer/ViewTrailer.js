
import React from 'react';

const ViewTrailer = () => {
  const youtubeVideoId = 'eOhH639mypHYzPSz';
  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <iframe
        width="750"
        height="500"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Game Trailer"
      ></iframe>
      <p>Enjoy the trailer!</p>
    </div>
  );
};

export default ViewTrailer;
