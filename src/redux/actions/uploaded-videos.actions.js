import * as t from '../types';
import api from '../../api';

export const getUploadedVideos = () => async (dispatch) => {
  try {
    dispatch({ type: t.GET_UPLOADED_VIDEOS.REQUEST });
    const response = await api.getUploadedVideos();
    if (response.ok) {
      console.log(response.data.data);
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
