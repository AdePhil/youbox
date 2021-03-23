import './index.scss';
import PropTypes from 'prop-types';
import VideoThumnail from '../VideoThumnail/VideoThumnail';
import { videos } from '../../data';

const ProfileVideoList = () => (
  <div className="profile_videos content-container">
    {videos.map((video) => (
      <VideoThumnail {...video} key={video.id} />
    ))}
  </div>
);

ProfileVideoList.propTypes = {
  title: PropTypes.string,
  videos: PropTypes.arrayOf(PropTypes.shape({})),
};
export default ProfileVideoList;
