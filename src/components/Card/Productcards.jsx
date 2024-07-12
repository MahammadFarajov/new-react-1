import Card from "./Card"
import "./Productcards.css"



const Productcards = () => {
  let products = [
    {
      productitle:"Мужские Кроссовки Nike Blazer Mid Suede",
      productprice:"12 999 руб."
    },
    {
      productitle:"Мужские Кроссовки Nike Air Max 270",
      productprice:"8 999 руб."
    },
    {
      productitle:"Мужские Кроссовки Nike Blazer Mid Suede",
      productprice:"9 999 руб."
    },
    {
      productitle:"Кроссовки Puma X Aka Boku Future Rider",
      productprice:"15 999 руб."
    },
    {
      productitle:"Мужские Кроссовки Under Armour Curry 8",
      productprice:"11 999 руб."
    },
    {
      productitle:"Мужские Кроссовки Nike Kyrie 7",
      productprice:"13 999 руб."
    },
    {
      productitle:"Мужские Кроссовки Jordan Air Jordan 11",
      productprice:"7 999 руб."
    },
    {
      productitle:"Мужские Кроссовки Nike LeBron XVIII",
      productprice:"10 999 руб."
    },
  ]
  return (
    <div>
      <div className="cards container">
        {products.map((product, index) => (
            <Card key={index}
            productitle = {product.producTitle}
            productprice = {product.productprice}/>
          ))}
      </div>
    </div>
  )
}

export default Productcards