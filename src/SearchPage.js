import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="../img/f1.jpg"
        channel="The Futur"
        verified
        subs="659k"
        noOfVideos={382}
        description="Learn how to grow a business from scratch"
      />

      <hr />

      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want a FREE course on how to grow your business from scratch?"
        timestamp="58 seconds ago"
        channel="The Futur"
        title="Business Growth 101"
        image="../img/f2.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want a FREE course on how to grow your business from scratch?"
        timestamp="58 seconds ago"
        channel="The Futur"
        title="Business Growth 101"
        image="../img/f3.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want a FREE course on how to grow your business from scratch?"
        timestamp="58 seconds ago"
        channel="The Futur"
        title="Business Growth 101"
        image="../img/f4.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want a FREE course on how to grow your business from scratch?"
        timestamp="58 seconds ago"
        channel="The Futur"
        title="Business Growth 101"
        image="../img/f5.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want a FREE course on how to grow your business from scratch?"
        timestamp="58 seconds ago"
        channel="The Futur"
        title="Business Growth 101"
        image="../img/f2.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want a FREE course on how to grow your business from scratch?"
        timestamp="58 seconds ago"
        channel="The Futur"
        title="Business Growth 101"
        image="../img/f1.jpg"
      />
    </div>
  );
}

export default SearchPage;
