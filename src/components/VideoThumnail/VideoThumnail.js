import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const VideoThumnail = ({
  thumnail,
  channelLogo,
  videoTitle,
  views,
  date,
  channelName,
  isLive,
}) => (
  <div className="video">
    <img className="video__img" src={thumnail} alt="video-thumnail" />
    <div className="video__details">
      <img
        id="img"
        alt="avatar"
        width="48"
        src={channelLogo}
        className="video__details-channel-logo"
      />
      <div className="video__details-description">
        <p className="video__details-description-video-title">{videoTitle}</p>
        <p className="video__details-description-channel-name">{channelName}</p>
        <p className="video__details-description-video-extra">
          <span>{views}</span> • <span> {date}</span>
        </p>
      </div>
    </div>
    {isLive && <div className="video__live">LIVE</div>}
  </div>
);

VideoThumnail.propTypes = {
  thumnail: PropTypes.string,
  channelLogo: PropTypes.string,
  videoTitle: PropTypes.string,
  views: PropTypes.string,
  date: PropTypes.string,
  channelName: PropTypes.string,
  isLive: PropTypes.bool,
};

export default VideoThumnail;
