import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const ResturantCard = ({ resturant }) => {
  const { name, rating, image, title, cloudinaryImageId, avgRating } =
    resturant.data;
  const url =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
    cloudinaryImageId;
  return (
    <div className="res-card">
      <img className="res-image" src={url} />
      <h3>{name}</h3>
      {avgRating && <h4>{avgRating}</h4>}
    </div>
  );
};

export const Body = () => {
  console.log("Body..");

  const [listRes, setListRes] = useState([]);
  const [filteredListRes, setFilteredListRes] = useState([]);
  const [searchText, setSearchText] = useState("");

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
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
        />
      </div>

      <div className="res-container">
        {filteredListRes.map((res) => (
          <Link to={"/resturant/" + res.data.id}>
            <ResturantCard key={res.uuid} resturant={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
