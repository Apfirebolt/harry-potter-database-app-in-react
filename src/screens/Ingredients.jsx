import { Fragment } from "react";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getIngredients } from '../features/ingredients/ingredientSlice'
import { Button, Card, Elevation } from "@blueprintjs/core";
import Loader from "../components/Loader";

const IngredientScreen = () => {
  const { ingredients, isLoading, isSuccess } = useSelector(
    (state) => state.ingredient
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <Fragment>
      <p>Ingredient Screen</p>
      {isLoading && <Loader />}
      {ingredients.map((item) => (
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

export default IngredientScreen;
