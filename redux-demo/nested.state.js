const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Ko htet",
  address: {
    street: "kan street",
    city: "hlaing",
  },
};

const UPDATE_STREET = "UPDATE_STREET";

const updateStreet = (street) => {
  return {
    type: UPDATE_STREET,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

const store = redux.createStore(reducer);

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

store.dispatch(updateStreet("mingaladon"));

unsubscribe();
