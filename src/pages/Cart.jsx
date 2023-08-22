import { useSelector } from "react-redux";
import CartItem from "../components/CartItem"
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
function Cart(){
  const[totalAmount , setTotalAmount] = useState(0);
  const {cart} = useSelector((state)=>state);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  }, [cart])
  return(
    <div>
      {
        cart.length > 0 ? (
        <div className="flex justify-between items-center mr-10 ml-10">

        <div className=" flex flex-col ">
          {cart.map(function(item,index){
            return <CartItem key = {item.id} item={item} itemIndex = {index}></CartItem>
          })}
        </div>


        <div className="flex flex-col w-[30vw]  gap-5 justify-between h-[50vh]">

          <div>
            <div className="text-green-700 text-xl font-extrabold">Your Cart</div>
            <div className="text-green-700 text-3xl font-extrabold mb-5">Summary</div>
            <p className="text-black font-semibold text-xl"><span>{`Total Items : ${cart.length}`}</span></p>
          </div>

          <div className="flex flex-col justify-center w-full gap-4">
            <p className=" font-bold text-black text-lg">{`Total Amount : $ ${totalAmount}`}</p>
            <button className="bg-green-700 text-white rounded-lg font-bold text-xl px-5 py-2">Check Out Now</button>
          </div>
        </div>
        
        </div>
        ) 
        
        : (<div className="flex flex-col w-full h-[450px] items-center justify-center gap-5">
          <h2>Your Cart Is Empty!!!</h2>
          <NavLink to ="/"> <button className="bg-green-700 text-white rounded-lg font-bold text-xl px-5 py-2">Shop Now</button></NavLink>
        </div>)
      }
    </div>
  );
} 

export default Cart;