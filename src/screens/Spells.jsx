import { Fragment } from "react";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSpells } from '../features/spells/spellSlice'

const SpellScreen = () => {
  const { spells, isLoading, isSuccess } = useSelector(
    (state) => state.house
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSpells())
  }, [dispatch])

  return (
    <Fragment>
      <p>Spells Screen</p>
    </Fragment>
  );
};

export default SpellScreen;
