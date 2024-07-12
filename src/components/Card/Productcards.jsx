import Card from "./Card"
import "./Productcards.css"



const Productcards = () => {
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
  return (
    <div>
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