import { combineReducers } from 'redux';
import categoryVideos from './category-videos.reducer';

const appReducer = combineReducers({
  categoryVideos,
});

export default appReducer;
