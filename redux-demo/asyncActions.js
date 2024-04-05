const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// action types
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const USERS_REQUEST_SUCCEEDED = "USERS_REQUEST_SUCCEEDED";
const USERS_REQUEST_FAIL = "USERS_REQUEST_FAIL";

// action creators
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const usersRequestSuccess = (userIds) => {
  return {
    type: USERS_REQUEST_SUCCEEDED,
    payload: userIds,
  };
};

const usersRequestFailure = (errors) => {
  return {
    type: USERS_REQUEST_FAIL,
    payload: errors,
  };
};

// reducer
const initialState = {
  loading: false,
  data: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USERS_REQUEST_SUCCEEDED:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };

    case USERS_REQUEST_FAIL:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

// thunk action creator
const fetchRequest = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const userIds = res.data.map((user) => user.id);
        dispatch(usersRequestSuccess(userIds));
      })
      .catch((error) => {
        dispatch(usersRequestFailure(error.message));
      });
  };
};

// create store with middleware
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log("state after dispatch", store.getState());
});

store.dispatch(fetchRequest());
