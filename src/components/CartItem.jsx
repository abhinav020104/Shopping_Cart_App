import { AiFillDelete } from "react-icons/ai"
import { useDispatch } from "react-redux"
import {toast} from "react-hot-toast"
import { remove } from "../redux/Slices/CartSlice";
function CartItem(props)
{
  let item = props.item;
  let itemIndex = props.itemIndex;
  const dispatch = useDispatch();
  function removeFromCart()
  {
    dispatch(remove(item.id));
    toast.error("Item Removed")
  }
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-between w-[60vw] px-10 gap-x-10 border-b-2 border-gray-500 mb-10">
            <img src={item.image} alt="" className="h-36 w-36"/>
            <div className="flex flex-col justify-between gap-5">
              <div className=" flex flex-col gap-y-5">
              <h1>{item.title}</h1>
              <h1>{item.description}</h1> 
              </div>
                <div className=" flex items-center justify-between mb-5">
                <p className=" text-green-500 font-bold">{`$ ${item.price}`}</p>
                <div className="rounded-full w-[30px] h-[30px] py-2 px-2 bg-red-700 relative cursor-pointer">
                  <div onClick={removeFromCart} className="absolute left-[.48rem]">
                  <AiFillDelete></AiFillDelete>
                  </div>
                </div>
            </div>
          </div>
          </div>  
        </div>
      </div>
    </div>
  );
}


export default CartItem;