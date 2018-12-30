import { fetchDreams, createDream } from '../../shared/api';

export const GET_DREAMS = 'GET_DREAMS';
export const GET_DREAMS_ERROR = 'GET_DREAMS_ERROR';
export const GET_DREAMS_SUCCESS = 'GET_DREAMS_SUCCESS';

export const POST_DREAM = 'POST_DREAM';
export const POST_DREAM_ERROR = 'POST_DREAM_ERROR';
export const POST_DREAM_SUCCESS = 'POST_DREAM_SUCCESS';

export const getDreams = () => (dispatch) =>
  fetchDreams()
    .then(payload =>
      dispatch(getDreamsSuccess(payload)))
    .catch(error => 
      dispatch(getDreamsError())
    );

export const getDreamsError = () => ({
  type: GET_DREAMS_ERROR,
  payload: 'Error getting dreams',
});

export const getDreamsSuccess = (payload) => ({
  type: GET_DREAMS_SUCCESS,
  payload,
});


export const postDream = (dream) => (dispatch) =>
  createDream(dream)
    .then(() => {
      dispatch(postDreamSuccess());
      dispatch(getDreams());
    })
    .catch(error => 
      dispatch(postDreamError())
    );

export const postDreamError = () => ({
  type: POST_DREAM_ERROR,
  payload: 'Error getting dreams',
});

export const postDreamSuccess = (payload) => ({
  type: POST_DREAM_SUCCESS,
  payload,
});
