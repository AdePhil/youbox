import * as t from '../types';

const INITIAL_STATE = {
  uploadedVideos: [],
  fetching: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case t.GET_UPLOADED_VIDEOS.REQUEST:
      return { ...state, fetching: { ...state.fetching, all: true } };
    case t.GET_UPLOADED_VIDEOS.SUCCESS:
      return {
        ...state,
        fetching: { ...state.fetching, all: false },
        uploadedVideos: [...action.payload],
      };
    case t.GET_UPLOADED_VIDEOS.FAILURE:
      return { ...state, fetching: { ...state.fetching, all: false } };

    default:
      return state;
  }
};
