import { combineReducers } from 'redux';
import categoryVideos from './category-videos.reducer';
import uploadedVideos from './uploaded-videos.reducer';
import videoDetails from './video-details.reducer';

const appReducer = combineReducers({
  categoryVideos,
  uploadedVideos,
  videoDetails,
});

export default appReducer;
