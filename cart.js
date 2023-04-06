import { useSelector, useDispatch } from "react-redux";
import store from "./utils/store";
import { IMG_CDN_URL } from "./constants";
import { clearCart } from "./utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClear = ()=>{
        dispatch(clearCart())
    }
    return(
        <div className="cartItems">
            <span className="cartCount">{cartItems.length}</span>
            <button className="cart-btn" onClick={()=>handleClear()}>ClearCart</button>
            {
             cartItems.map((obj)=>{
                return(
                    <div key={obj.id} className="cartItem">
                        <img src={IMG_CDN_URL + obj.cloudinaryImageId}/>
                        <span>{obj.name}</span>
                    </div>
                )
             })
            }
        </div>
    )
}

export default Cart;