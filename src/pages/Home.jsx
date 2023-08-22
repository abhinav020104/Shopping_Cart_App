import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"
function Home () {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false);
  const[posts , setPosts] = useState([]);
  async function fetchProductData(){
    setLoading(true);
    try{
      const response = await fetch(API_URL);
      const data =   await response.json();
      setPosts(data);
    }
    catch(e)
    {
      alert("An Error Occured")
    }
    setLoading(false);
    }

    useEffect(()=>{
      fetchProductData();
      console.log(posts);
    },[]);

  return (
    <div >
      {loading?(<div className="flex w-screen h-screen justify-center items-center"><Spinner></Spinner></div>):(posts.length > 0 ? (<div className=" grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 min-h-[80vh] space-x-5">{posts.map(function(post){ return <Product post = {post}></Product>})}</div>) : (<div className="flex items-center justify-center"><p>No Data Found</p></div>))}
    </div>
  );
}
export default Home;