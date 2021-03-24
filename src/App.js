import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppLayout from './layout/AppLayout';
import { store } from './redux/store';
import 'nprogress/nprogress.css';
import './App.scss';
import Loader from './components/Loader/Loader';

const Home = React.lazy(() => import('./pages/Home/Home'));
const VideoDetails = React.lazy(() =>
  import('./pages/VideoDetails/VideoDetails')
);
const Profile = React.lazy(() => import('./pages/Profile/Profile'));
function App() {
  return (
    <Provider store={store}>
      <React.Suspense fallback={<Loader />}>
        <Router>
          <AppLayout>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/video/:id">
                <VideoDetails />
              </Route>
              <Route path="/profile/:userName">
                <Profile />
              </Route>
            </Switch>
          </AppLayout>
        </Router>
      </React.Suspense>
    </Provider>
  );
}

export default App;
