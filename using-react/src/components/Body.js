import { useContext, useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import SearchContext from "../utils/SearchContext";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ResturantCard from "./ResturantCard";

function test() {
  useEffect(() => {
    console.log("Test...");
  });
}

export const Body = () => {
  console.log("Body..");
  const value = test();

  const [listRes, setListRes] = useState([]);
  const [filteredListRes, setFilteredListRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { searchFor, setSearchFor } = useContext(SearchContext);

  useEffect(() => {
    getResList();
  }, []);

  useEffect(() => {
    const list = listRes.filter((res) =>
      res.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    setFilteredListRes(list);
  }, [searchText]);

  async function getResList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&sortBy=DELIVERY_TIME&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    console.log(result?.data?.cards[0].data?.data.cards);
    setListRes(result?.data?.cards[0].data?.data.cards);
    setFilteredListRes(result?.data?.cards[0].data?.data.cards);
  }

  return filteredListRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
            setSearchFor(e.target.value);
          }}
          placeholder="Search"
        />
      </div>

      <h2>Seach results for.. {searchFor}</h2>
      <div className="res-container">
        {filteredListRes.map((res) => (
          // <Link to={"/resturant/" + res.data.id}>
          <ResturantCard key={res.uuid} resturant={res} />
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
