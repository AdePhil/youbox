import './index.scss';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
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
    getCategoryVideosCallback(decodeURIComponent(id));
  }, [getCategoryVideosCallback, id]);
  const {
    url,
    isLive,
    channelLogo,
    channelName,
    subs,
    videoTitle,
    isMyVideo,
    likes,
    dislikes,
    liked,
    disliked,
    subscribed,
  } = video;

  const [like, setLike] = useState(liked);
  const [dislike, setDislike] = useState(disliked);

  const [subscribe, setSubscribe] = useState(subscribed);

  useEffect(() => {
    setLike(liked);
  }, [liked]);

  useEffect(() => {
    setSubscribe(subscribed);
  }, [subscribed]);

  useEffect(() => {
    setDislike(disliked);
  }, [disliked]);

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
            <div>
              <h2>{videoTitle}</h2>
              <p>{videoTitle}</p>
            </div>
            <div className="video-details__socials">
              <button
                onClick={() => {
                  setLike(!like);
                  setDislike(!dislike);
                }}
                type="button"
                className={
                  like
                    ? 'icon-button like-button active'
                    : 'icon-button like-button'
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  className="style-scope yt-icon"
                >
                  <g className="style-scope yt-icon">
                    <path
                      d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"
                      className="style-scope yt-icon"
                    />
                  </g>
                </svg>
                <span>{likes}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setDislike(!dislike);
                  setLike(!like);
                }}
                className={
                  dislike
                    ? 'icon-button dislike-button active'
                    : 'icon-button dislike-button'
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  className="style-scope yt-icon"
                >
                  <g className="style-scope yt-icon">
                    <path
                      d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
                      className="style-scope yt-icon"
                    />
                  </g>
                </svg>
                <span>{dislikes}</span>
              </button>
            </div>
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
                  <button
                    onClick={() => setSubscribe(!subscribe)}
                    type="button"
                    className={
                      subscribe
                        ? 'video-details__profile-buttons-subscription active'
                        : 'video-details__profile-buttons-subscription'
                    }
                  >
                    {subscribe ? 'Subscribed' : 'Subscribe'}
                  </button>
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
          <div className="video-details__comments">
            <div className="video-details__comments-box">
              <img
                src="https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-70x70.png"
                alt="Avatar"
                className="video-details__comments-box-avatar"
              />
              <div className="video-details__comments-box-input-container">
                <input
                  type="text"
                  className="video-details__comments-box-input"
                />
                <div className="button-wrapper">
                  <button type="button" className="cancel">
                    Cancel
                  </button>
                  <button type="button" className="comment">
                    Comment
                  </button>
                </div>
              </div>
            </div>

            <div className="video-details__user-comments">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnjxpXVKU1i-T_Eb89qHQfMytnTAHAEz1t5CBgj_=s88-c-k-c0x00ffffff-no-rj"
                alt="Avatar"
                className="avatar"
              />
              <div>
                <p className="top">
                  Phoenix 17 <span className="time">1 week ago</span>
                </p>
                <p className="bottom">What a setup at 00:40?</p>
              </div>
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
