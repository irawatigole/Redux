const { createStore, combineReducers } =  require('redux');

// categories
const categoryInitialStateData = [];
const categoriesReducer = (state = categoryInitialStateData, action) => {
    switch(action.type) {
        case 'ADD_CATEGORY':
            return [...state, action.category]
        default:
            return state    
    }
}

// products
const productInitialStateData = [];
const productsReducer = (state = productInitialStateData, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.product]
        default:
            return state    
    }
}

const store = createStore(combineReducers({
    categories: categoriesReducer,
    products: productsReducer
}))

function addCategory(category) {
    return {
        type: 'ADD_CATEGORY',
        category
    }
}

function addProduct(product) {
    return {
        type: 'ADD_PRODUCT',
        product
    }
}

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addCategory({id: 1, name: 'electronics'}));
store.dispatch(addProduct({id: 1, name: 'Mobile', price: 2000}));
