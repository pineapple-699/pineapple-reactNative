import { createAction, handleActions } from 'redux-actions';

const defaultState = {
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  isAuthenticated: false,
};

// ACTIONS

const setProfile = createAction('SET_PROFILE');
const setAuthentication = createAction('SET_AUTHENTICATION');

const reducer = handleActions(
  {
    [setProfile]: (state, { payload }) => ({
      ...state,
      username: payload.username,
      email: payload.email,
      firstName: payload.first_name,
      lastName: payload.last_name,
    }),
    [setAuthentication]: (state, { payload }) => {
      if (payload === true) {
        return { ...state, isAuthenticated: true };
      }

      return { ...state, isAuthenticated: false };
    },
  },
  defaultState
);

const getAuthInfo = (state) => state.login;

export default reducer;
export { setProfile, setAuthentication, getAuthInfo };
