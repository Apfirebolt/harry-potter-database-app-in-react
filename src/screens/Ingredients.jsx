import { Fragment } from "react";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getIngredients } from '../features/ingredients/ingredientSlice'

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
    </Fragment>
  );
};

export default IngredientScreen;
