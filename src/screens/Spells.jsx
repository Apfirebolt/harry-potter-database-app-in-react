import { Fragment } from "react";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSpells } from '../features/spells/spellSlice'
import { Button, Card, Elevation } from "@blueprintjs/core";
import Loader from "../components/Loader";

const SpellScreen = () => {
  const { spells, isLoading, isSuccess } = useSelector(
    (state) => state.spell
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSpells())
  }, [dispatch])

  return (
    <Fragment>
      <p>Spells Screen</p>
      {isLoading && <Loader />}
      {spells.map((item) => (
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

export default SpellScreen;
