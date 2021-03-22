import './index.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import AppHeader from '../components/Header/AppHeader';
import AppSideBar from '../components/SideBar/AppSideBar';

const AppLayout = ({ children }) => {
  const [activeNav, setNavActive] = useState(false);

  return (
    <div className="app">
      <AppHeader setNavActive={setNavActive} activeNav={activeNav} />
      <div className="app__main-container">
        <AppSideBar activeNav={activeNav} setNavActive={setNavActive} />
        <div className="main">{children}</div>
      </div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node || PropTypes.arrayOf(PropTypes.node),
};

export default AppLayout;
