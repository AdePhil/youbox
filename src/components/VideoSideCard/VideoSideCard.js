import './index.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const VideoSideCard = ({ thumnail, channelName, views, date, videoTitle }) => (
  <Link className="video-side-card">
    <img
      id="img"
      alt="avatar"
      width="48"
      src={thumnail}
      className="video-side-card__image"
    />
    <div className="video-side-card__details-description">
      <p className="video-side-card__details-description-video-title">
        {videoTitle}
      </p>
      <p className="video-side-card__details-description-channel-name">
        {channelName}
      </p>
      {views && (
        <p className="video-side-card__details-description-video-extra">
          <span>{views}</span> • <span> {date}</span>
        </p>
      )}
    </div>
  </Link>
);

VideoSideCard.propTypes = {
  thumnail: PropTypes.string,
  channelName: PropTypes.string,
  views: PropTypes.string,
  date: PropTypes.string,
  videoTitle: PropTypes.string,
};
export default VideoSideCard;
