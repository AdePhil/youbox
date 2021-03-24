import * as t from '../types';
import api from '../../api';

export const getVideoDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: t.GET_VIDEO_DETAILS.REQUEST });
    const response = await api.getVideoDetails(id);
    if (response.ok) {
      dispatch({
        type: t.GET_VIDEO_DETAILS.SUCCESS,
        payload: response.data.data,
      });
    }
  } catch (error) {
    dispatch({
      type: t.GET_VIDEO_DETAILS.FAILURE,
    });
  }
};
