import { useState } from "react"
import Card from "./Card"
import "./Productcards.css"


let products = [
  {
    productTitle:"Мужские Кроссовки Nike Blazer Mid Suede",
    productPrice:"12 999 руб."
  },
  {
    productTitle:"Мужские Кроссовки Nike Air Max 270",
    productPrice:"8 999 руб."
  },
  {
    productTitle:"Мужские Кроссовки Nike Blazer Mid Suede",
    productPrice:"9 999 руб."
  },
  {
    productTitle:"Кроссовки Puma X Aka Boku Future Rider",
    productPrice:"15 999 руб."
  },
  {
    productTitle:"Мужские Кроссовки Under Armour Curry 8",
    productPrice:"11 999 руб."
  },
  {
    productTitle:"Мужские Кроссовки Nike Kyrie 7",
    productPrice:"13 999 руб."
  },
  {
    productTitle:"Мужские Кроссовки Jordan Air Jordan 11",
    productPrice:"7 999 руб."
  },
  {
    productTitle:"Мужские Кроссовки Nike LeBron XVIII",
    productPrice:"10 999 руб."
  },
]
const Productcards = () => {

  const handleSearch = (e) => {
    console.log(e.target.value)
    const [productsData, setProducts] = useState(products)

    if (e.target.value.trim().length > 0) {
      let newProducts = productsData.filter((product) =>
        product.productTitle.toLowerCase().includes(e.target.value.trim().toLowerCase())
    );

    setProducts(newProducts)
    } else {
      setProducts(products)
    }
  }
  return (
    <div>
        <main className="main container">
            <div className="main-top">
                <h1>All Sneakers</h1>
                <input onChange={handleSearch} type="text" placeholder="Search..."/>
            </div>
        </main>
      <div className="cards container">
        {products.map((product, index) => (
            <Card key={index}
            productTitle = {product.productTitle}
            productPrice = {product.productPrice}/>
          ))}
      </div>
    </div>
  )
}

export default Productcards