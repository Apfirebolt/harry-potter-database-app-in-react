import { Fragment } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHouses } from "../features/houses/houseSlice";
import { Card, Elevation } from "@blueprintjs/core";
import Loader from "../components/Loader";

const HousesScreen = () => {
  const { houses, isLoading, isSuccess } = useSelector((state) => state.house);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);
  console.log("Houses ", houses, isLoading);
  return (
    <Fragment>
      <div className="container">
        <h3>Houses</h3>
        {isLoading && <Loader />}
        {houses.map((item) => (
          <Card
            interactive={true}
            elevation={Elevation.TWO}
            key={item.id}
            className="house-card"
          >
            <h4>{item.name}</h4>
            <div className="info-container">
              <p><span>Founder</span>{item.founder}</p>
              <p><span>House Colors</span>{item.houseColours}</p>
              <p><span>Animal</span>{item.animal}</p>
              <p><span>Common Room</span>{item.commonRoom}</p>
              <p><span>Ghost</span>{item.ghost}</p>
            </div>
            <h4>House Heads</h4>
            {item.heads &&
              item.heads.map((nestedItem) => (
                <p key={nestedItem.id}>{nestedItem.firstName + " " + nestedItem.lastName}</p>
              ))}
            <h4>House Traits</h4>
            {item.traits &&
              item.traits.map((nestedItem) => (
                <p className="trait-item" key={nestedItem.id}>{nestedItem.name}</p>
              ))}
          </Card>
        ))}
      </div>
    </Fragment>
  );
};

export default HousesScreen;
