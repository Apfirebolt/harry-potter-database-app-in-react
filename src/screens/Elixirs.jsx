import { Fragment } from "react";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getElixirs } from '../features/elixirs/elixirSlice'

const ElixirsScreen = () => {
  const { elixirs, isLoading, isSuccess } = useSelector(
    (state) => state.house
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getElixirs())
  }, [dispatch])

  return (
    <Fragment>
      <p>Elixir Screen</p>
    </Fragment>
  );
};

export default ElixirsScreen;
