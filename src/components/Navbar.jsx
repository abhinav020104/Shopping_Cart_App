import {AiOutlineShoppingCart} from "react-icons/ai"
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux"
function NavBar(){
  const {cart} = useSelector((state)=>state)
  return(
    <div className=" flex max-w-6xl mx-auto h-20 justify-between items-center px-10 py-5">
      <NavLink to="/"><img src="https://static.vecteezy.com/system/resources/previews/013/156/900/original/shopping-cart-logo-design-shopping-logo-design-on-line-shopping-app-icon-free-vector.jpg" className=" w-[100px]"/></NavLink>
      <div className="flex items-center text-2xl font-bold gap-x-4 relative">
        <NavLink to="/"><p className="text-white">Home</p></NavLink>
        <NavLink to="/cart"><AiOutlineShoppingCart className=" hover:text-green-500 duration-100 text-white text-2xl"></AiOutlineShoppingCart>{cart.length >0 && <div className=" bg-green-500 flex rounded-full w-[18px] h-[18px] absolute -top-2.5 -right-2 justify-center items-center animate-bounce "><span className=" text-white text-xs ">{cart.length}</span></div>}</NavLink>
      </div>

    </div>
  );
}

export default NavBar;
