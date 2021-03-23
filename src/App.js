import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';

const Home = React.lazy(() => import('./pages/Home/Home'));
const VideoDetails = React.lazy(() =>
  import('./pages/VideoDetails/VideoDetails')
);
const Profile = React.lazy(() => import('./pages/Profile/Profile'));
function App() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Router>
        <AppLayout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/video/:id">
              <VideoDetails />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </AppLayout>
      </Router>
    </React.Suspense>
  );
}

export default App;
