import { useSelector , useDispatch} from "react-redux"
import {toast} from "react-hot-toast"
import { add , remove } from "../redux/Slices/CartSlice";
function Product(props){
  let post = props.post;
  const {cart} = useSelector((state)=>state);
  const dispatch =  useDispatch();
  function addToCart()
  {
    dispatch(add(post));
    toast.success("Item Added To Cart");
  }

  function removefromCart()
  {
    dispatch(remove(post.id));
    toast.error("Item removed Sucessfully");
  }
  return(
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div className="w-40 text-gray-400 text-[10px] text-left font-normal">
        {post.description.split(" ").slice(0,10).join(" ") + "..."}
      </div>
      <div className=" h-[180px]">
        <img className=" h-full w-full"src={post.image}/>
      </div>
      <div className="flex w-full justify-between items-center">
        <p className=" text-green-500 font-bold">{`$ ${post.price}`}</p>
      {
        cart.some((p)=> p.id == post.id)?(<button onClick={removefromCart} className=" border-2 border-black rounded-2xl px-5 py-1 text-md hover:text-white hover:bg-black transition-all duration-100">Remove Item</button>) : (<button onClick={addToCart} className=" border-2 border-black rounded-2xl px-5 py-1 text-md hover:text-white hover:bg-black transition-all duration-100">Add To Cart</button>)
      }
      </div>
    </div>
  );
}
export default Product;
