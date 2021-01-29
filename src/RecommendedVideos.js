import React from 'react';
import './RecommendedVidos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="The Evolution of System Software"
          views="5.4M Views"
          timestamp="2 hours ago"
          channelImage="./img/sw1.jpg"
          image="./img/sw1.jpg"
        />

        <VideoCard
          title="Tony Elumelu Foundation"
          views="5.4M Views"
          timestamp="2 hours ago"
          channelImage="./img/tony1.png"
          image="./img/tony1.png"
        />

        <VideoCard
          title="Beginners Guide to Cyber Security"
          views="5.4M Views"
          timestamp="2 hours ago"
          channelImage="./img/sw2.jpg"
          image="./img/sw2.jpg"
        />

        <VideoCard
          title="the futur"
          views="5.4M Views"
          timestamp="2 hours ago"
          channelImage="./img/f5.jpg"
          image="./img/f5.jpg"
        />

        <VideoCard
          title="Beginners Guide to Digital Marketing"
          views="5.4M Views"
          timestamp="2 hours ago"
          channelImage="./img/sw3.jpg"
          image="./img/sw3.jpg"
        />

        <VideoCard
          title="UBA"
          views="5.4M Views"
          timestamp="2 hours ago"
          channelImage="./img/uba.jpg"
          image="./img/uba.jpg"
        />

        <VideoCard
          title="TED Fund Grant Day"
          views="5.4M Views"
          timestamp="2 hours ago"
          channelImage="./img/t1.jpg"
          image="./img/t1.jpg"
        />

        <VideoCard
          title="the futur"
          views="5.4M Views"
          timestamp="2 hours ago"
          channelImage="./img/f3.jpg"
          image="./img/f3.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
