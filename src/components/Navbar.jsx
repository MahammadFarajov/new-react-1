import { LuShoppingCart, LuHeart, LuUserCircle } from "react-icons/lu"
import { PiSneakerBold } from "react-icons/pi";
import "./Navbar.css"


function Navbar() {
  return <header className="header">
    <nav className="nav container">
        <div className="nav-left">
            <PiSneakerBold size={47}/>
            <div className="left">
            <h1>REACT SNEAKERS</h1>
            <p>Магазин лучших кроссовок</p>
            </div>
        </div>
        <ul className="nav-right">
            <div className="link"> <LuShoppingCart size={23} /> <li><a href="#">1205 руб.</a></li></div>
            <div className="link"> <LuHeart size={23} /> <li><a href="#">Закладки</a></li></div>
            <div className="link"> <LuUserCircle size={23} /> <li><a href="#">Профиль</a></li></div>
        </ul>
    </nav>
  </header>
}

export default Navbar