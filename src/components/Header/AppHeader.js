import { useState } from 'react';
import './index.scss';

const AppHeader = () => (
  // const {nav] = useState(false);
  <div className="app__header">
    <div className="flex flex-1 justify-content-between align-items-center">
      <div className="app__header-logo">
        <h2 className="app__header-logo-text">YouBox</h2>
      </div>
      <div className="app__header-search">
        <input
          type="text"
          className="app__header-search-input"
          placeholder="Search"
        />
      </div>
      <div className="flex align-items-center">
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
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
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
        <img
          className="app__header-image"
          alt="User Avatar"
          src="https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-70x70.png"
        />
      </div>
    </div>
  </div>
);
export default AppHeader;
