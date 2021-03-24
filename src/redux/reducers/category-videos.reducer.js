import * as t from '../types';

const INITIAL_STATE = {
  categoryVideos: [],
  fetching: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case t.GET_CATEGORY_VIDEOS.REQUEST:
      return { ...state, fetching: { ...state.fetching, all: true } };
    case t.GET_CATEGORY_VIDEOS.SUCCESS:
      return {
        ...state,
        fetching: { ...state.fetching, all: false },
        categoryVideos: [...action.payload],
      };
    case t.GET_CATEGORY_VIDEOS.FAILURE:
      return { ...state, fetching: { ...state.fetching, all: false } };

    default:
      return state;
  }
};
