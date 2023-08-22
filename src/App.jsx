import NavBar from "./components/Navbar";
import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
function App(){
  return(
    <div className="w-screen h-screen overflow-x-hidden">
      <div className=" bg-slate-900">
      <NavBar></NavBar>
    </div>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
    </Routes>
    </div>
  );
}

export default App;
