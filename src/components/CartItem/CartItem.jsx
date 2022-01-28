import CartItemStyles from './CartItem.module.css';
import boatHeadphone from '../../assets/boatheadphone.png';
import realme8 from '../../assets/realme8.png';
import hpmouse from '../../assets/hpmouse.jpg';

const getImage = (productName) => {
    switch(productName){
        case "boAt headphone":
            return boatHeadphone;
        case "realme 8":
            return realme8;
        case "hp mouse":
            return hpmouse;
        default:
            return null;
    }
}

const CartItem = (props) => {
    const { productName, quantity, description, price } = props.item;
    const { increaseQty, decreaseQty, removeItem } = props;
    const isDisabled = quantity < 2;
    const handleDecreaseClick = () => {
        if(!isDisabled){
            decreaseQty();
        }
    }
    let imageUrl = getImage(productName);
    return (
        <div className={CartItemStyles.itemContainer}>
            <div className={CartItemStyles.leftContainer}>
                <div className={CartItemStyles.image}>
                    <img src={imageUrl} alt="product-image" className={CartItemStyles.image} />
                </div>
                <div className={CartItemStyles.nameDescriptionContainer}>
                    <div className={CartItemStyles.productName}>{productName}</div>
                    <div className={CartItemStyles.description}>{description}</div>
                </div>
            </div>
            <div>
                <div className={CartItemStyles.price}>${price}/<span style={{fontSize: "10px", fontWeight: "normal"}}>each</span></div>
                <div className={CartItemStyles.buttonContainer}>
                    <div className={CartItemStyles.actionContainer}>
                        <div className={CartItemStyles.actionButton} style={isDisabled ? { backgroundColor: "grey" } : {}} onClick={handleDecreaseClick}>-</div>
                        <div className={CartItemStyles.quantity}>{quantity}</div>
                        <div className={CartItemStyles.actionButton} onClick={increaseQty}>+</div>
                    </div>
                    <span className={CartItemStyles.closeButton} onClick={removeItem}>x</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;