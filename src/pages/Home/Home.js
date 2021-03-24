import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import VideoList from '../../components/VideoList/VideoList';
import './index.scss';
import { getCategoryVideos } from '../../redux/actions';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const getCategoryVideosCallback = useCallback(
    (payload) => dispatch(getCategoryVideos(payload)),
    [dispatch]
  );

  const { categoryVideos, fetchingCategoryVideos } = useSelector(
    ({ categoryVideos: videos }) => ({
      categoryVideos: videos.categoryVideos,
      fetchingCategoryVideos: videos.fetching.all || false,
    })
  );

  useEffect(() => {
    getCategoryVideosCallback();
  }, [getCategoryVideosCallback]);

  if (fetchingCategoryVideos) {
    return <Loader />;
  }
  return (
    <div className="home">
      {categoryVideos.map((video) => (
        <VideoList
          videos={video.videos}
          title={video.title}
          key={video.title}
        />
      ))}
    </div>
  );
};

export default Home;
