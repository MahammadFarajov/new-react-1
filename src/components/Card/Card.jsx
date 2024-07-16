import { useState } from "react";
import "./Card.css"
import shoe from "../image 5.jpg"
import { LuCheck, LuHeart, LuPlus } from "react-icons/lu";
const Card = (props) => {
    const [sellected, setsellected] = useState(false)
    const [selected, setselected] = useState(false)
  return (
    <div>
        <div className="card">
            <button id="heart" className={selected && "selected"} onClick={() => setselected(!selected)} >
                {!selected ? (<LuHeart size={12}/>) : (<LuHeart size={12} fill="#FF8585" color="#FF8585"/>)}
            </button>
            <div className="card-top">
                <img src={shoe} alt="" />
                <p>{props.productTitle}</p>
            </div>
            <div className="card-bottom">
                <div className="text">
                    <h4>Price:</h4>
                    <h2>{props.productPrice}</h2>
                </div>
                <button className={sellected && "sellected"} onClick={() => setsellected(!sellected)}>
                    {!sellected ? (<LuPlus size={12} color="#d3d3d3"/>) : (<LuCheck size={12} color="white"/>) }
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card