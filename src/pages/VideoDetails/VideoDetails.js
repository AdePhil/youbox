import './index.scss';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { videos as recommendedVideos } from '../../data';
import VideoSideCard from '../../components/VideoSideCard/VideoSideCard';
import ChatList from '../../components/ChatList/ChatList';
import { getVideoDetails } from '../../redux/actions';
import Loader from '../../components/Loader/Loader';

const VideoDetails = () => {
  const { id = '' } = useParams();
  const dispatch = useDispatch();
  const getCategoryVideosCallback = useCallback(
    (payload) => dispatch(getVideoDetails(payload)),
    [dispatch]
  );

  const { video, fetchingVideoDetails } = useSelector(({ videoDetails }) => ({
    video: videoDetails.video,
    fetchingVideoDetails: videoDetails.fetching.one || false,
  }));

  useEffect(() => {
    const decodedUrlParam = decodeURIComponent(id);
    getCategoryVideosCallback(decodeURIComponent(decodedUrlParam));
  }, [getCategoryVideosCallback, id]);
  const {
    url,
    isLive,
    channelLogo,
    channelName,
    subs,
    videoTitle,
    isMyVideo,
  } = video;
  console.log({ video });
  const videoSettings = {
    width: '100%',
    height: '100%',
    controls: true,
  };

  if (fetchingVideoDetails) {
    return <Loader />;
  }
  return (
    <div className="video-details">
      <div className="video-details__container">
        <div className="video-details__player">
          <ReactPlayer url={url} {...videoSettings} />
          <div className="video-details__title">
            <h2>{videoTitle}</h2>
            <p>{videoTitle}</p>
          </div>
          <div className="video-details__profile">
            <img
              className="video-details__profile-img"
              alt="avatar"
              src={channelLogo}
            />
            <div className="video-details__profile-texts">
              <p className="video-details__profile-channel-name">
                {channelName}
              </p>
              <p className="video-details__profile-subs">{subs}</p>
            </div>
            <div className="flex video-details__profile-buttons">
              {!isMyVideo && (
                <div>
                  <button type="button">Subscribed</button>
                  <button type="button" className="icon-button header-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="video-details__video-list">
          {isLive && <ChatList />}
          {recommendedVideos.map((recommendedVideo) => (
            <VideoSideCard {...recommendedVideo} key={recommendedVideo.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

VideoDetails.propTypes = {
  url: PropTypes.string,
  isLive: PropTypes.bool,
  channelLogo: PropTypes.string,
  channelName: PropTypes.string,
  subs: PropTypes.string,
};

export default VideoDetails;
