import { Fragment } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "@blueprintjs/core";
import { getCharacters } from "../features/characters/characterSlice";
import Loader from "../components/Loader";

const CharacterScreen = () => {
  const { characters, isLoading } = useSelector(
    (state) => state.character
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="container">
        <h3>Characters</h3>
        {isLoading && <Loader />}
        {characters.map((item) => (
          <Card key={item.id} className="house-card">
            <span> {item.firstName} </span>
            <span> {item.lastName} </span>
          </Card>
        ))}
      </div>
    </Fragment>
  );
};

export default CharacterScreen;
