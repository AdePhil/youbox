import './index.scss';
import PropTypes from 'prop-types';
import AppHeader from '../components/Header/AppHeader';
import AppSideBar from '../components/SideBar/AppSideBar';

const AppLayout = ({ children }) => (
  <div className="app">
    <AppHeader />
    <div className="app__main-container">
      <AppSideBar />
      <div className="main">{children}</div>
    </div>
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.node || PropTypes.arrayOf(PropTypes.node),
};

export default AppLayout;
