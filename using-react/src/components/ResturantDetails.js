import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ResturantDetails = () => {
  const { id } = useParams();
  const [resDetail, setResDetail] = useState({});
  const { name } = resDetail;

  async function getResDetail() {
    const result = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" +
        id
    );

    const response = await result.json();
    console.log(response?.data?.cards[0].card?.card?.info);
    setResDetail(response?.data?.cards[0].card?.card?.info);
  }

  useEffect(() => {
    getResDetail();
  }, []);

  return <div>{name}</div>;
};
