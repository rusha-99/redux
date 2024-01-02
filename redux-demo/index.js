const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

// Action creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    };
}

function buyIceCream() {
    return {
        type: BUY_ICE_CREAM,
        info: 'Second redux action'
    }
}

// Reducer
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            };
        default:
            return state;
    }
};

// Store
const store = createStore(reducer); // Pass the reducer function to createStore
console.log('Initial state', store.getState()); // Access the current state which is initial state

// Subscription
store.subscribe(() => console.log('Updated state', store.getState()));

// Dispatching an action
store.dispatch(buyCake()); // Pass the action to dispatch
store.dispatch(buyCake())
store.dispatch(buyIceCream())

store.subscribe(() => console.log('Updated state', store.getState()));