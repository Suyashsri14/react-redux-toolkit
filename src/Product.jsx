import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem} from "./redux/slice";
import { useEffect} from "react";
import { fetchProducts } from "./redux/ProductSlice";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productSelector = useSelector((state) => state.products.items);
  const cartSelector = useSelector((state) => state.cart.items);
  
  return (
    <div className="grid">
      {productSelector.length &&
        productSelector.map((item) => (
          <div key={item.id} className="card">
            <img  src={item.thumbnail} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="brand">{item.brand}</div>
              <div className="rating">{item.rating}/5</div>
              <div className="category">{item.category}</div>
              <div className="returnPolicy">{item.returnPolicy}</div>
              <div className="availabilityStatus">{item.availabilityStatus}</div>
              {
                cartSelector.find((cartItem)=> cartItem.id === item.id) ? 
                
                <button className ="remove-cart-btn" onClick ={()=> dispatch(removeItem(item))}>Remove from Cart</button> :
                <button className ="add-cart-btn" onClick ={()=> dispatch(addItem(item))}>Add to Cart</button> 
                

              }
              
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
