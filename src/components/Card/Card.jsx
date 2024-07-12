import "./Card.css"
import shoe from "../image 5.jpg"
const Card = (props) => {
  return (
    <div>
        <div className="card">
            <div className="card-top">
                <img src={shoe} alt="" />
                <p>{props.productTitle}</p>
            </div>
            <div className="card-bottom">
                <div className="text">
                    <h4>Price:</h4>
                    <h2>{props.productPrice}</h2>
                </div>
                <button className="btn">+</button>
            </div>
        </div>
    </div>
  )
}

export default Card