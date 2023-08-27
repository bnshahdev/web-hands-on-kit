import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ResturantCard = ({ resturant }) => {
  const dispatch = useDispatch();
  const { name, rating, image, title, cloudinaryImageId, avgRating } =
    resturant.data || {};
  const url =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
    cloudinaryImageId;
  return (
    <div className="res-card">
      <img className="res-image" src={url} />
      <h3>{name}</h3>
      {avgRating && <h4>{avgRating}</h4>}
      <button onClick={() => dispatch(addItem(resturant))}>Add to Card</button>
    </div>
  );
};

export default ResturantCard;
