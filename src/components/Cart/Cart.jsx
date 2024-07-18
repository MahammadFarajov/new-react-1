import { LuArrowRight } from 'react-icons/lu'
import './Cart.css'
import shoe from "../image 5.jpg"

let productsData = [
    {
      productTitle:"Мужские Кроссовки Nike Blazer Mid Suede",
      productPrice:"12 999 руб."
    },
    {
      productTitle:"Мужские Кроссовки Nike Air Max 270",
      productPrice:"8 999 руб."
    },
  ]
const Cart = ( { isOpen }) => {
  return (
    <div>
        <div className={isOpen ? "cart isOpen" : "cart"}>
            <div className="top">
                <h1>Корзина</h1>
                <div className="main-cards">
                    {productsData.map((product, index) => (
                        <div className="main-card">
                        <img src={shoe} alt="shoe" sizes='70' />
                        <div className="right">
                            <p>{product.productTitle}</p>
                            <h2>{product.productPrice}</h2>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="footer">
                <div className="lines">
                    <div className="line"><h3>Итого:</h3><h2>21 498 руб. </h2></div>
                    <div className="line"><h3>Налог 5%: </h3><h2>1074 руб. </h2></div>
                </div>
                <button className="btn"><div className="text">Оформить заказ <LuArrowRight size={14} className='icon-arrow'/></div></button>
            </div>
        </div>
    </div>
  )
}

export default Cart