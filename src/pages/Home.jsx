import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
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
              <input type="text" placeholder="Search for restauant" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
