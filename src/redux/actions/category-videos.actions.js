import * as t from '../types';
import api from '../../api';

export const getCategoryVideos = () => async (dispatch) => {
  try {
    dispatch({ type: t.GET_CATEGORY_VIDEOS.REQUEST });
    const response = await api.getCategoryVideos();
    if (response.ok) {
      dispatch({
        type: t.GET_CATEGORY_VIDEOS.SUCCESS,
        payload: response.data.data,
      });
    }
  } catch (error) {
    dispatch({
      type: t.GET_CATEGORY_VIDEOS.FAILURE,
    });
  }
};
