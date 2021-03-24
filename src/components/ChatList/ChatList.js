import './index.scss';

const ChatList = () => (
  <div className="video-details__video-chat">
    <div className="video-details__video-chat-header d-flex">
      <h3>Live Chat</h3>
      <div className="icon-button">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="style-scope yt-icon"
        >
          <g className="style-scope yt-icon">
            <path
              d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              className="style-scope yt-icon"
            />
          </g>
        </svg>
      </div>
    </div>
    <div className="video-details__video-chat-body d-flex">
      <div className="chat d-flex">
        <img
          className="chat-img"
          alt="avatar"
          src="https://yt4.ggpht.com/ytc/AAUvwngfK9LWbuDty9aCj0EGb1gDTr-PdTElSJ1ZwCP5rw=s32-c-k-c0x00ffffff-no-rj"
        />
        <p>
          <span className="chat-title">Tobi Adeyanju</span>
          <span className="chat-text">yes!!!</span>
        </p>
      </div>
      <div className="chat d-flex">
        <img
          className="chat-img"
          alt="avatar"
          src="https://yt4.ggpht.com/ytc/AAUvwnhRf4taMcWEa4fa-VQgifwLiYlaWCrSoMh3LxVh=s32-c-k-c0x00ffffff-no-rj"
        />
        <p>
          <span className="chat-title">Tunde Max</span>
          <span className="chat-text">Good music</span>
        </p>
      </div>
      <div className="chat d-flex">
        <img
          className="chat-img"
          alt="avatar"
          src="https://yt4.ggpht.com/ytc/AAUvwnjmpCntya-NWV7zz_6cgWDq0TmudQVTLgIa6Up6=s32-c-k-c0x00ffffff-no-rj"
        />
        <p>
          <span className="chat-title">The CS Content</span>
          <span className="chat-text">Awesome work Guys</span>
        </p>
      </div>
      <div className="chat d-flex">
        <img
          className="chat-img"
          alt="avatar"
          src="https://yt4.ggpht.com/ytc/AAUvwnhRf4taMcWEa4fa-VQgifwLiYlaWCrSoMh3LxVh=s32-c-k-c0x00ffffff-no-rj"
        />
        <p>
          <span className="chat-title">The CS Content</span>
          <span className="chat-text">This live is Amazing!!</span>
        </p>
      </div>
      <div className="chat d-flex">
        <img
          className="chat-img"
          alt="avatar"
          src="https://yt4.ggpht.com/ytc/AAUvwnjukZH_pgSEv4tGDTa1K5-G7fSSzWpWnGhFiEG3Agg=s32-c-k-c0x00ffffff-no-rj"
        />
        <p>
          <span className="chat-title">The CS Content</span>
          <span className="chat-text">Youbox you rock</span>
        </p>
      </div>
      <div className="chat d-flex">
        <img
          className="chat-img"
          alt="avatar"
          src="https://yt4.ggpht.com/ytc/AAUvwnhRf4taMcWEa4fa-VQgifwLiYlaWCrSoMh3LxVh=s32-c-k-c0x00ffffff-no-rj"
        />
        <p>
          <span className="chat-title">The CS Content</span>
          <span className="chat-text">yes!!!</span>
        </p>
      </div>
    </div>
    <div className="video-details__video-chat-footer ">
      <div className="chat-footer d-flex">
        <img
          className="chat-footer-img"
          alt="avatar"
          src="https://yt4.ggpht.com/yti/ANoDKi5Qzqyej03XqHUuIetDkuL3gI5mOuR-9j4D5_GarA=s64-c-k-c0x00ffffff-no-rj"
        />
        <p>
          <span className="user-name">Tunde &nbsp; Alex</span>
          <input type="text" className="chat-input" placeholder="Type..." />
        </p>
      </div>
    </div>
  </div>
);

export default ChatList;
