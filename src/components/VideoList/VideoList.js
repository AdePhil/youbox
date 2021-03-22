import PropTypes from 'prop-types';
import VideoThumnail from '../VideoThumnail/VideoThumnail';
import './index.scss';

const VideoList = ({ videos, title }) => (
  <div className="videos">
    <h2 className="videos__title">{title}</h2>
    {videos.map((video) => (
      <VideoThumnail {...video} key={video.id} />
    ))}
  </div>
);

VideoList.propTypes = {
  title: PropTypes.string,
  videos: PropTypes.arrayOf(PropTypes.shape({})),
};
export default VideoList;
