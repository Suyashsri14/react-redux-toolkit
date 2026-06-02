import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddtoCart = () => {
    const cartSelector = useSelector((state)=> state.cart.items)
  return (

    <div>
      <Link to= "/cart"><span className="cart-btn">
      🛒  Cart : {cartSelector.length ? cartSelector.length : 0}
    </span></Link>

    
</div>
  )
}

export default AddtoCart