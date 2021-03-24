import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VideoThumnail = ({
  thumnail,
  channelLogo,
  videoTitle,
  views,
  date,
  channelName,
  isLive,
  id,
  username,
}) => (
  <div className="video">
    <Link className="video" to={`/video/${encodeURIComponent(id)}`}>
      <img className="video__img" src={thumnail} alt="video-thumnail" />
    </Link>
    <div className="video__details">
      <Link to={`/profile/${username}?tab=videos`}>
        <img
          id="img"
          alt="avatar"
          width="48"
          src={channelLogo}
          className="video__details-channel-logo"
        />
      </Link>
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
  id: PropTypes.string,
  username: PropTypes.string,
};

VideoThumnail.defualtProps = {
  thumnail: '',
  channelLogo: '',
  videoTitle: '',
  views: '',
  date: '',
  channelName: '',
  isLive: false,
  username: 'currentUser',
};

export default VideoThumnail;
