const {default: AUTH} = require('../actionsTypes');

const initialState = {
  token: '',
  userProfile: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case AUTH.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
