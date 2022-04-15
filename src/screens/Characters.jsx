import { Fragment } from "react";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCharacters } from '../features/characters/characterSlice'

const CharacterScreen = () => {
  const { characters, isLoading, isSuccess } = useSelector(
    (state) => state.character
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacters())
  }, [dispatch])

  return (
    <Fragment>
      <p>Character Screen</p>
    </Fragment>
  );
};

export default CharacterScreen;
