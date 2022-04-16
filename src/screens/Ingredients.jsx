import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../features/ingredients/ingredientSlice";
import { Card, InputGroup } from "@blueprintjs/core";
import Loader from "../components/Loader";

const IngredientScreen = () => {
  const { ingredients, isLoading, isSuccess } = useSelector(
    (state) => state.ingredient
  );

  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <Fragment>
      <h3>Ingredients</h3>

      {isLoading && <Loader />}
      <div className="container">
        <InputGroup
          asyncControl={true}
          large={true}
          leftIcon="search"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Ingredients..."
          value={searchText}
        />
      
        <Card style={{ marginTop: '0.5rem' }}>
          {ingredients.filter(x => x.name.includes(searchText)).map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </Card>
      </div>
    </Fragment>
  );
};

export default IngredientScreen;
