const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// Action Types
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';

// Action Creators
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
    };
}

// Reducer Functions
const reduceCakes = (state = initialCakeState, action) => {
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

const reduceIceCream = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            };
        default:
            return state;
    }
};

// Combine Reducers
const rootReducer = combineReducers({
    cake: reduceCakes,
    iceCream: reduceIceCream
});

// Create Store
const store = createStore(rootReducer);
console.log('Initial state', store.getState());

// Subscription
store.subscribe(() => console.log('Updated state', store.getState()));

// Dispatching Actions
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());

store.subscribe(() => console.log('Updated state', store.getState()));
