import { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Cart from './components/Cart/Cart';
import cartIcon  from './assets/cartIcon.png';

function App({ totalItems }) {
  const [showCart, setShowCart] = useState(false);
  const handleCartIconClick = () => {
    setShowCart(prevState => !prevState);
  }
  return (
    <div>
      <div className="header">
        <div>Mini-Cart</div>
        <div onClick={handleCartIconClick} className="cartIconContainer">
          <img src={cartIcon} className="cartIcon" />
          <span className="count">{totalItems}</span>
        </div>
      </div>
      {showCart ? <Cart /> : null}
      <div>{!showCart ? <div className="instruction"> Click on Cart-Icon to view the cart items</div> : null}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    totalItems: state.data.length
  }
}

export default connect(mapStateToProps, null)(App);
