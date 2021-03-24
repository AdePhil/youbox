import * as t from '../types';
import api from '../../api';

export const getUploadedVideos = (userName) => async (dispatch) => {
  try {
    dispatch({ type: t.GET_UPLOADED_VIDEOS.REQUEST });
    const response = await api.getUploadedVideos(userName);
    if (response.ok) {
      dispatch({
        type: t.GET_UPLOADED_VIDEOS.SUCCESS,
        payload: response.data.data,
      });
    }
  } catch (error) {
    dispatch({
      type: t.GET_UPLOADED_VIDEOS.FAILURE,
    });
  }
};
