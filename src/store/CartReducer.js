import ProductData from './ProductData.json';
export const initialState = ProductData;

const updateLocalStorage = (data) => {
    window.localStorage.setItem("CartData", JSON.stringify(data));
}

const CartReducer = (state = initialState, action) => {
    let cartItems;
    switch(action.type){
        case "INC":
            cartItems = [...state.data];
            cartItems.forEach((item) => {
                if(item.id === action.payload){
                    item.quantity = item.quantity + 1;
                }
            })
            updateLocalStorage(cartItems);
            return { ...state, data: [...cartItems] };
        case "DEC":
            cartItems = [...state.data];
            cartItems.forEach((item) => {
                if(item.id === action.payload){
                    item.quantity = item.quantity - 1;
                }
            })
            updateLocalStorage(cartItems);
            return { ...state, data: [...cartItems] };
        case "REMOVE":
            cartItems = [ ...state.data ];
            const removeIdx = cartItems.findIndex(item => item.id === action.payload);
            cartItems.splice(removeIdx, 1);
            updateLocalStorage(cartItems);
            return { ...state, data: [...cartItems] };
        default:
            return state;
    }
}

export default CartReducer;