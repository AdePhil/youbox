import { useLocation, useParams } from 'react-router';
import './index.scss';
import { useEffect, useState } from 'react';
import { videos, currentChannel } from '../../data';
import VideoUpload from '../../components/VideoUpload/VideoUpload';
import ProfileVideoList from '../../components/ProfileVideoList/ProfileVideoList';

const Profile = () => {
  const { userName } = useParams();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const tab = searchParams.get('tab');
  let channel = {};
  if (userName === 'currentUser') {
    channel = currentChannel;
  } else {
    channel = videos.find((video) => video.username === userName);
  }
  const { channelLogo, channelName, subs, banner } = channel;

  const [activeTab, setActiveTab] = useState(tab);

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);
  return (
    <div className="profile">
      <div
        className="profile__banner"
        style={{
          background: `url(${banner})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="profile__channel-details">
        <div className="content-container">
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
              <button
                type="button"
                className="video-details__profile-buttons-subscription"
              >
                Subscribed
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
          </div>
          <div className="profile__tabs">
            {userName === 'currentUser' && (
              <button
                type="button"
                className={
                  activeTab === 'new-video'
                    ? 'profile__tab active'
                    : 'profile__tab'
                }
                onClick={() => setActiveTab('new-video')}
              >
                Upload Video
              </button>
            )}
            <button
              type="button"
              className={
                activeTab === 'videos' ? 'profile__tab active' : 'profile__tab'
              }
              onClick={() => setActiveTab('videos')}
            >
              Videos
            </button>
          </div>
        </div>
      </div>
      <div className="profile__tabs-container">
        {activeTab === 'new-video' && <VideoUpload />}
        {activeTab === 'videos' && <ProfileVideoList />}
      </div>
    </div>
  );
};

export default Profile;
