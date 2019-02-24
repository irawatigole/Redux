const store = {
    state: {
        count: 0
    },
    getState: function(){
        return this.state
    },
    dispatch: function(action) {
        switch(action.type) {
            case 'increment':
            this.state.count = this.state.count + 1
            break;
            case 'decrement':
            this.state.count = this.state.count - 1
            break;
            case 'reset':
            this.state.count = 0
            break;
        }
    }
}


// console.log(store.state.count)
console.log(store.getState());

// functions which returns an action = action generators

function increment(){
    return {
        type: 'increment'
    }
}

function decrement(){
    return {
        type: 'decrement'
    }
}

function reset(){
    return {
        type: 'reset'
    }
}

// { type: 'imcrement'} = action
// store.dispatch({type: 'increment'});
store.dispatch(increment());
console.log(store.getState());