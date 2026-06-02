/* eslint-disable react-hooks/set-state-in-effect */
import { useSelector, useDispatch} from "react-redux";
import { removeItem , clearAllItems} from "./redux/slice";
import {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


const CartList = () => {

  const cartSelector = useSelector((state) => state.cart.items);
  const[cartItems, setCartItems] = useState(cartSelector);
  const navigate = useNavigate();


useEffect(()=>{
  setCartItems(cartSelector);
},[cartSelector])

 
 const dispatch = useDispatch();

  const addQuantity = (id, q) =>{

    let quantity = parseInt(q)>1?parseInt(q):1;

  const cartTempItems = cartItems.map((item)=>{
       return item.id == id ?
       {...item, quantity}:item
  })
  
  setCartItems(cartTempItems);
  }

   const totalPrice = cartItems.reduce(
    (sum, item) => item.quantity ? sum + item.price*item.quantity : sum + item.price,
    0
  );

  function handlePlaceOrder(){
      localStorage.clear();
      dispatch(clearAllItems());
      alert("Order Placed Successfully");
      navigate('/');
   }




  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">🛒 Cart List : <span className="cart-count">{cartItems.length} Items </span></h1>  
        
      </div>
      <br/>

      {cartItems.length > 0 ? (
        <>
          <div className="cart-grid">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-card">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="cart-image"
                />

                <div className="cart-content">
                  <h2 className="product-title">{item.title}</h2>

                  <div className="product-brand">{item.brand}</div>

                  <div className="product-info">
                    ⭐ {item.rating}/5
                  </div>

                  <div className="product-category">
                    {item.category}
                  </div>

                  <div className="return-policy">
                    {item.returnPolicy}
                  </div>

                  <div className="product-price">
                    ₹ {(item.quantity ? item.quantity*item.price : item.price).toFixed(2)}
                  </div>

                  <div>
                      <br/>
                    <div>
                      <input
                       onChange = {(e)=>addQuantity(item.id, e.target.value)} value={item.quantity?item.quantity:1} style={{padding:'5px'}} type="number" placeholder="Enter quantity"/>
                    </div>
                    <button
                    className="remove-cart-btn"
                    onClick={() => dispatch(removeItem(item))}
                  >
                    Remove from Cart
                  </button>

                  </div>

                  
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            Total: ₹ {totalPrice.toFixed(2)}
          </div>

          <button className= "cart-btn place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
          
        </>
      ) : (
        <div className="empty-cart">
          Your cart is empty 🛍️
        </div>
      )}
    </div>
  );
};

export default CartList;