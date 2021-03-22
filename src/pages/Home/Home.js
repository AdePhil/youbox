import VideoList from '../../components/VideoList/VideoList';
import './index.scss';
import { videos, liveVideos } from '../../data';

const Home = () => (
  <div className="home">
    <VideoList videos={liveVideos} title="Live broadcast" />
    <VideoList videos={videos} title="Programming" />
    <VideoList videos={videos} title="Entertainment" />
  </div>
);

export default Home;
