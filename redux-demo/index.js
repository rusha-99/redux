const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';

// Action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    };
}

// Reducer
const initialState = {
    numOfCakes: 10
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        default:
            return state;
    }
};

// Store
const store = createStore(reducer); // Pass the reducer function to createStore
console.log('Initial state', store.getState()); // Access the current state

// Subscription
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

// Dispatching an action
store.dispatch(buyCake()); // Pass the action to dispatch
store.dispatch(buyCake())

// Unsubscribe
unsubscribe();
