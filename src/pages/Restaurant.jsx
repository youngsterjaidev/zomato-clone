import React, { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import RNavbar from "../components/RNavbar"

const URI = "https://zomato-clone-cqmtcf7cm-youngsterjaidev.vercel.app";

const Restaurant = () => {
  const params = useParams()
  const [result, setResult] = useState(undefined)
  const [cart, setCart] = useState([])

  console.log(params)

  const searchRestaurant = async (data) => {
    try {
      const res = await axios.get(`${URI}/restaurants/${data}`);

      console.log("The Response : ", res);

      setResult(res.data[0]);
    } catch (e) {
      console.log("Error while searching the doc ", e);
    }
  };

  useEffect(() => {
    searchRestaurant(params.restaurantName)
  }, [])

  if(!result) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div className="container">
      <RNavbar />
      <div className="galleryContainer">
        <img src={result.imgdata} alt="" />
        <img src={result.imgdata} alt="" />
        <img src={result.imgdata} alt="" />
        <img src={result.imgdata} alt="" />
      </div>
      <div>
        <h1 className="text-lg">{result.rname}</h1>
        <h3>Pizza Pasta, Italian Fast Food</h3>
        <h4>Pune</h4>
        <div> Cart - {cart.length}</div>
      </div>

      <div>
        <h2>Menu</h2>
        <ul>
          {result.menu.map((item, index) => (
            <li className="flex justify-between p-3 shadow-lg">
              <div>{item.dishName}</div>
              <div className="">{item.price}</div>
              <button
                type="button"
                onClick={() => {
                  setCart([...cart, result.menu[index]]);
                }}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Restaurant