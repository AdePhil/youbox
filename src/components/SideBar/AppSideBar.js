import './index.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Channel from '../Channel/Channel';
import { videos as subscriptions } from '../../data';
import api from '../../api';

const AppSideBar = ({ activeNav, setNavActive }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    api.getUserLocation().then((res) => {
      const response = res.data.countryCode;
      setLocation(response);
    });
  }, []);
  return (
    <div className={activeNav ? 'active app__sidebar' : 'app__sidebar'}>
      <div className="app__header-logo d-inline-flex mobile">
        <button
          type="button"
          className="icon-button"
          onClick={() => setNavActive(!activeNav)}
        >
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
          >
            <g className="style-scope yt-icon">
              <path
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                className="style-scope yt-icon"
              />
            </g>
          </svg>
        </button>
        <h2 className="app__header-logo-text">YouBox</h2>
      </div>
      {location === 'US' && (
        <div className="app__sidebar-banner">
          You're from the US, get 50% off by subscribing to for a premium
          account.
          <Link to="#" />
        </div>
      )}
      <div className="app__sidebar-title">CHANNEL SUGGESTIONS</div>
      <div className="channels">
        {subscriptions.map((subscription) => (
          <Channel {...subscription} key={subscription.id} />
        ))}
      </div>
      <div className="app__sidebar-title">SUBSCRIPTIONS</div>
      <div className="channels">
        {subscriptions.map((subscription) => (
          <Channel {...subscription} key={subscription.id} />
        ))}
      </div>
    </div>
  );
};

AppSideBar.propTypes = {
  activeNav: PropTypes.bool,
  setNavActive: PropTypes.func,
};

export default AppSideBar;
