import React, { useState, useEffect } from "react";
import axios from "axios"
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import { Link } from "react-router-dom"

const URI = "https://zomato-clone-phi-nine.vercel.app"

const Card = (props) => {
  return (
    <div className="boxes h-[280px] min-w-[354px] rounded-lg  bg-white hover:scale-105">
      <div className="h-[200px] min-w-[354px] rounded-t-lg border bg-white border-slate-300 transition-all">
        <img
          className="object-cover h-[200px] w-[354px] rounded-t-lg"
          src={props.imgdata}
          alt=""
        />
      </div>
      <div className="h-[80px] bg-white w-[354px] rounded-b-lg border border-slate-300 flex flex-col justify-center px-3">
        <h2 className="text-xl font-bold">{props.rname}</h2>
        <p>{props.desc}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}


const Home = () => {
  const [rname, setRname] = useState("")
  const [result, setResult] = useState([])

  const searchRestaurant = async (data) => {
    try {
      if(data === "") {
        // show all data
        const res = await axios.get(`${URI}/restaurants`)

      console.log("The Response : ", res)

      setResult(res.data)  
        return
      }

      const res = await axios.get(`${URI}/restaurants/${data}`);

      console.log("The Response : ", res)

      setResult(res.data)
    } catch(e) {
      console.log("Error while searching the doc ")
    }
  }

  useEffect(() => {

  }, [result])

  return (
    <>
      <div className="h-[50vh] brandBanner">
        <Navbar />
        <div>
          <h1 className="text-[80px] font-bold italic text-center">Zumato</h1>
          <p className="text-3xl text-center">
            Discover the best food & drinks in Pune
          </p>
          <form className="flex justify-center">
            <div className="px-5 h-[3rem] w-[18rem] gap-2 rounded-l-md bg-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF7E8B"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 iRDDBk"
              >
                <title>location-fill</title>
                <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path>
              </svg>
              <input
                className=""
                type="text"
                placeholder="Search City"
                name="search"
                id="search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#4F4F4F"
                width="12"
                height="12"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 ezrcri"
              >
                <title>down-triangle</title>
                <path d="M20 5.42l-10 10-10-10h20z"></path>
              </svg>
              <detalist>
                <option>Pune</option>
                <option>Chandigarh</option>
              </detalist>
            </div>
            <div className="px-5 h-[3rem] w-[28rem] gap-2 rounded-r-md bg-white flex items-center">
              <box-icon name="search"></box-icon>
              <input
                className="text-black w-[28rem] focus:outline-0"
                value={rname}
                type="text"
                placeholder="Search for Restaurant,Cuisine or a Dish"
                onChange={(e) => {
                  setRname(e.target.value);
                  searchRestaurant(e.target.value);
                }}
              />
            </div>
          </form>
          {/* <ul>
            {result.map(item => {
              return (
                  <li className="p-3 shadow-lg">
                    <img src={item.imgdata} />
                    <div>{item.rname}</div>
                    <div>{item.price}</div>
                  </li>
              )
            })}
          </ul> */}
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-3 container">
        {result.length === 0 ? (
          <Service />
        ) : (
          result.map((item) => {
            return (
              <Link to={`/restaurant/${item.rname}`}>
              <Card
                rname={item.rname}
                price={item.price}
                imgdata={item.imgdata}
                desc={item.somedata}
              />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Home;
