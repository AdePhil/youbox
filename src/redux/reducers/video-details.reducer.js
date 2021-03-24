import * as t from '../types';

const INITIAL_STATE = {
  video: {},
  fetching: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case t.GET_VIDEO_DETAILS.REQUEST:
      return { ...state, fetching: { ...state.fetching, one: true } };
    case t.GET_VIDEO_DETAILS.SUCCESS:
      return {
        ...state,
        fetching: { ...state.fetching, one: false },
        video: { ...action.payload },
      };
    case t.GET_VIDEO_DETAILS.FAILURE:
      return { ...state, fetching: { ...state.fetching, one: false } };

    default:
      return state;
  }
};
