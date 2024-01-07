import React, { useState, useEffect } from "react";
import axios from "axios"
import Navbar from "../components/Navbar";

const Home = () => {
  const [rname, setRname] = useState("")
  const [result, setResult] = useState([])

  const searchRestaurant = async (data) => {
    try {
      if(data === "") {
        // show all data
        const res = await axios.get(`http://10.200.189.21:8000/restaurants`)

      console.log("The Response : ", res)

      setResult(res.data)  
        return
      }

      const res = await axios.get(`http://10.200.189.21:8000/restaurants/${data}`)

      console.log("The Response : ", res)

      setResult(res.data)
    } catch(e) {
      console.log("Error while searching the doc ")
    }
  }

  useEffect(() => {
    searchRestaurant("")
  }, [])

  return (
    <>
      <Navbar />
      <div className="min-h-screeni flex justify-center item-centerA">
        <div>
          <h1>Zomato</h1>
          <p>Discover the best food & drinks in Pune</p>
          <form className="flex justify-center">
            <div>
              <input list="places" type="text" placeholder="cities" />
              <datalist id="places">
                <option>Pune</option>
              </datalist>
            </div>
            <div>
              <input 
                value={rname} 
                type="text" 
                placeholder="Search for restauant" 
                onChange={e => {
                  setRname(e.target.value)
                  searchRestaurant(e.target.value)
                }}
                />
            </div>
          </form>

          <ul>
            {result.map(item => {
              return (
                  <li className="p-3 shadow-lg">
                    <img src={item.imgdata} />
                    <div>{item.rname}</div>
                    <div>{item.price}</div>
                  </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
