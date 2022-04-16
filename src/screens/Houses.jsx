import { Fragment } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHouses } from "../features/houses/houseSlice";
import { Button, Card, Elevation } from "@blueprintjs/core";
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
      <p>House Page</p>
      {isLoading && <Loader />}
      {houses.map((item) => (
        <Card interactive={true} elevation={Elevation.TWO} key={item.id}>
          <h5>
            <a href="#">{item.name}</a>
          </h5>
          <p>Card content</p>
          <Button>Submit</Button>
        </Card>
      ))}
    </Fragment>
  );
};

export default HousesScreen;
