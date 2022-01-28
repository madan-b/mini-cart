import { connect } from "react-redux";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import CartStyles from './Cart.module.css';
import { initialState } from '../../store/CartReducer';

const getSubTotal = (cartData) => {
    return cartData.reduce((acc, item) => {
        return (acc + (item.quantity * item.price));
    }, 0)
}

const Cart = (props) => {
    let { cartData, increaseQty, decreaseQty, removeItem } = props;
    //need some clarification
    // if(cartData.length === initialState.data.length){
    //     cartData = JSON.parse(window.localStorage.getItem("CartData"));
    // }
    return (
        <div className={CartStyles.cartContainer}>
            <div>
                <div className={CartStyles.cartTitle}>{cartData.length} Item's added to your cart</div>
                <div>
                    {cartData.length === 0 ? <div>Your cart is empty</div> : null}
                </div>
                <div>
                    {cartData.map(item => {
                        return <CartItem key={item.id} item={item} removeItem={() => removeItem(item.id)} increaseQty={() => increaseQty(item.id)} decreaseQty={() => decreaseQty(item.id)} />
                    })}
                </div>
            </div>
            <div className={CartStyles.subTotalActionsContainer}>
                <div className={CartStyles.totalContainer}>
                    <div className={CartStyles.subTotal}>
                        <div>Subtotal</div>
                        <div className={CartStyles.subTotal}>${getSubTotal(cartData)}</div>
                    </div>
                </div>
                <div className={CartStyles.actionsContainer}>
                    <Button lable="View Cart" />
                    <Button lable="Checkout" isInverted />
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        cartData: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseQty: (id) => dispatch({ type: "INC", payload: id }),
        decreaseQty: (id) => dispatch({ type: "DEC", payload: id }),
        removeItem: (id) => dispatch({ type: "REMOVE", payload: id })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);