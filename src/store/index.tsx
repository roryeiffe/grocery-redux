import {createStore} from 'redux';

// initial state:
const initialState = {
    categories: {
        categoryId: 0,
        subCategoryId: 0
    },
    user: {
        isLoggedIn: false,
        cart: []
    }
}

// reducer:
const groceryReducer:any = (state = initialState, action:any) => {
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
    // user logs in:
    else if (action.type === 'LOGIN') {
        return {
            ...state,
            user: {
                ...state.user,
                isLoggedIn: true
            }
        }
    }
    // add item to cart:
    else if (action.type === 'ADD_ITEM') {
        return {
            ...state,
            user: {
                ...state.user,
                cart: [...state.user.cart, action.payload]
            }
        }
    }
    // increase the quantity of an item:
    else if (action.type === 'INCREMENT_QUANTITY') {
        let itemId = action.payload;
        return {
            // copy the rest of the state
            ...state,
            user: {
                // copy everything from the previous user state:
                ...state.user,
                // update the cart:
                cart: state.user.cart.map((item:any) => {
                    if(item.productName === itemId){
                        return {...item, quantity: item.quantity + 1}
                    }
                    else {
                        return item;
                    }
                })
            }
        }
    }
    // decrease the quantity of an item:
    else if (action.type === 'DECREMENT_QUANTITY') {
        let itemId = action.payload;
        return {
            // copy the rest of the state
            ...state,
            user: {
                // copy everything from the previous user state:
                ...state.user,
                // update the cart:
                cart: state.user.cart.map((item:any) => {
                    if(item.productName === itemId){
                        // make sure we can't have negative items:
                        return {...item, quantity: Math.max(item.quantity - 1,0)}
                    }
                    else {
                        return item;
                    }
                })
            }
        }
    }
        // remove an item from the cart:
        else if (action.type === 'REMOVE_ITEM') {
            let itemId = action.payload;
            console.log(itemId);
            return {
                // copy the rest of the state
                ...state,
                user: {
                    // copy everything from the previous user state:
                    ...state.user,
                    // filter out items that have the name of the item we are deleting:
                    cart: state.user.cart.filter((item:any) => item.productName !== itemId )
                }
            }
        }
    return state;
}


// create store:
const store = createStore(groceryReducer);

// export store:
export default store;