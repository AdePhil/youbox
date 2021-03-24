import './index.scss';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import VideoThumnail from '../VideoThumnail/VideoThumnail';
import { getUploadedVideos } from '../../redux/actions';
import Loader from '../Loader/Loader';

const ProfileVideoList = ({ userName }) => {
  const dispatch = useDispatch();
  const getUploadedVideosCallback = useCallback(
    (payload) => dispatch(getUploadedVideos(payload)),
    [dispatch]
  );

  const { uploadedVideos, fetchingUploadedVideos } = useSelector(
    ({ uploadedVideos: videos }) => ({
      uploadedVideos: videos.uploadedVideos,
      fetchingUploadedVideos: videos.fetching.all || false,
    })
  );

  useEffect(() => {
    getUploadedVideosCallback(userName);
  }, [getUploadedVideosCallback, userName]);

  if (fetchingUploadedVideos) {
    return <Loader />;
  }
  return (
    <div className="profile_videos content-container">
      {uploadedVideos.map((video) => (
        <VideoThumnail {...video} key={video.id} />
      ))}
    </div>
  );
};

ProfileVideoList.propTypes = {
  userName: PropTypes.string,
};
export default ProfileVideoList;
