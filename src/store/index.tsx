import {createStore} from 'redux';

// initial state:
const initialState = {
    categories: {
        categoryId: 0,
        subCategoryId: 0
    }
}

// reducer:
const groceryReducer = (state = initialState, action:any) => {
    // update which category we display:
    if(action.type === 'UPDATE_CATEGORY') {
        return {
            ...state, 
            categories: {
                ...state.categories,
                categoryId: action.payload
            }
        }
    }
    // update which sub-category we display:
    else if(action.type === 'UPDATE_SUB_CATEGORY') {
        return {
            ...state, 
            categories: {
                ...state.categories,
                subCategoryId: action.payload
            }
        }
    }
    return state;
}


// create store:
const store = createStore(groceryReducer);

// export store:
export default store;