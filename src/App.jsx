import { useState } from "react"
import AdKermit from "./components/AdKermit"
import Productcards from "./components/Card/Productcards"
import Cart from "./components/Cart/Cart"
import Navbar from "./components/Navbar"

function App() {
  const [openCart, setisOpenCart] = useState(false)
  const handleOpenCart = () => {
    setisOpenCart(!openCart)
  }
  return (
    <>
      <Navbar handleOpenNav={handleOpenCart}/>
      <AdKermit />
      <Productcards />
      <Cart isOpen = {openCart}/>
    </>
  )
}

export default App
