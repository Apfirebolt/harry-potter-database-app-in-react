import { Fragment } from "react";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getElixirs } from '../features/elixirs/elixirSlice'
import { Button, Card, Elevation } from "@blueprintjs/core";

const ElixirsScreen = () => {
  const { elixirs, isLoading, isSuccess } = useSelector(
    (state) => state.elixir
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getElixirs())
  }, [dispatch])

  return (
    <Fragment>
      <p>Elixir Screen</p>
      {isLoading && <Loader />}
      {elixirs.map((item) => (
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

export default ElixirsScreen;
