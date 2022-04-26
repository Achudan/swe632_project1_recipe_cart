import React from "react";
import './cart.styles.scss';
import CART_DATA from "./cart-items";
import { useSelector } from "react-redux";
// import CustomButton from "../../components/CustomButton/custombutton-component";

const Cart = () => {
    // const handleSubmit = (elt) => {
    //     console.log("Button Clicked")
    // }
    const cartItem = useSelector((state) => state.cartItem?.item)

    console.log(cartItem)

return(
    // <div className="vrow">
    // <div className="card">
    //         <img src={require('../RecipeDirectory/recipe_images/payment-method.jpg')} alt="Avatar" />
    //         <div className="containerss">
    //             <h4><b>Jane Doe</b></h4> 
    //             <p>Interior Designer</p> 
    //         </div>
    //     </div>
    //     </div>

    <div className="row">
        <div className="column paddingtop">
            <h2>Cart</h2>
            <table>
                <tr>
                    <th>QUANTITY</th>
                    <th>ITEMS</th>
                    <th>PRICE</th>
                </tr>
                
                {CART_DATA.map((item, i) => (
                    <tr key={i}>
                        <td>{item.quantity}</td>
                        {/* <td><img src={item.imageURL} width="200" height="200" alt='recipe'/></td> */}
                        <td>
                        <div className="card">
                            <img src={item.imageURL} alt="recipe" />
                            <div className="containerss">
                                {/* <h4><b>Jane Doe</b></h4>  */}
                                <p>{item.title}</p> 
                            </div>
                        </div>
                        </td>
                        {/* <td>{item.title}</td> */}
                        <td>{item.price}</td>
                    </tr>
                ))}
            </table>
        </div>
        <div className="column">
            
        

            <div className="height"></div>
            <div>
                <table>
                    <tr>
                        <td><b>SUB TOTAL</b></td>
                        <td>$37.50</td>
                    </tr>
                    <tr>
                        <td><b>TAX</b></td>
                        <td>$2.50</td>
                    </tr>
                    <tr>
                        <td><b>TOTAL</b></td>
                        <td>$40</td>
                    </tr>
                </table>
                
            </div>
            
            <div className="margin">
                <button className="button">Cancel</button>
                <button className="button">Checkout</button>
            </div>
            <div className="test">
                <img src={require('../RecipeDirectory/recipe_images/payment-method.jpg')} alt="payment" />
            </div>
        </div>
    </div>

    

);
}
export default Cart;