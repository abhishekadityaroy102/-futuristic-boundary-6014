// import logo from './logo.svg';
import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./Pages/Navbar";

import NavbarAuth from "./Pages/NavbarAuth";
import {ChakraProvider} from "@chakra-ui/react"
function App() {
  const {isAuth}=useSelector((state)=>state.Authreducer)
  return <div className="App">
     <ChakraProvider>
      {
        isAuth ?<NavbarAuth/>:<Navbar/>
      }
   </ChakraProvider>
    
  </div>;
}

export default App;
