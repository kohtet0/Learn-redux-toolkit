const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const bindActionCreators = redux.bindActionCreators; // Corrected the variable name
const combineReducers = redux.combineReducers;
const logger = require("redux-logger");

// action
const CAKE_ORDERED = "CAKE_ORDERED";
const RESTOCK_CAKE = "RESTOCK_CAKE";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";

const cakeOrdered = (qty = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
};

const restockCake = (qty = 1) => {
  return {
    type: RESTOCK_CAKE,
    payload: qty,
  };
};

const iceCreamOrdered = (qty = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
};

const restockIceCream = (qty = 1) => {
  return {
    type: RESTOCK_ICECREAM,
    payload: qty,
  };
};

// reducer
// (preState, action) => newState
const initialStateOfCake = {
  numOfCakes: 10,
};

const initialStateOfIceCream = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialStateOfCake, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case RESTOCK_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialStateOfIceCream, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    case RESTOCK_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };

    case CAKE_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// store
const store = createStore(rootReducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("update state", store.getState());
});

// Use bindActionCreators correctly to bind action creators to the store's dispatch
const actions = bindActionCreators(
  { cakeOrdered, restockCake, iceCreamOrdered, restockIceCream },
  store.dispatch
);

// Now you can use the bound action creators to dispatch actions
actions.cakeOrdered();
actions.cakeOrdered();
actions.cakeOrdered();
actions.restockCake(3);
actions.iceCreamOrdered();
actions.iceCreamOrdered();
actions.iceCreamOrdered();
actions.restockIceCream(3);

unsubscribe(); // Properly unsubscribe
