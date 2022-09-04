import { combineReducers } from 'redux';
import * as types from '@/store/pure_js_redux/constants/types'
 
const initialState = {
    user: {
      name: "Mark",
      email: "mark@facebook.com"
    },
    cart: {
      products: []
    }
  };
  
  const productReducer = (state = initialState, action) => {
    console.log('productReducer (state, action):', state, action)

    if (action.type === types.product.CHANGE_USER_EMAIL) {
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.email
        }
      };
    }
    if (action.type === types.product.ADD_PRODUCT) {
      return {
        ...state,
        cart: {
          ...state.cart,
          products: [...state.cart.products, action.payload.product]
        } 
      };
    }
    return state;
  };


  const userReducer = (user = initialState.user, action) => {
    if (action.type === types.product.CHANGE_USER_EMAIL) {
      return {
        ...user,
        email: action.payload.email
      };
    }
    return user;
  }
  
  const cartReducer = (cart = initialState.cart, action) => {
    if (action.type === types.product.ADD_PRODUCT) {
      return {
        ...cart,
        products: [...cart.products, action.payload.product]
      };
    }
    return cart;
  }

  const rootProductReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default rootProductReducer;