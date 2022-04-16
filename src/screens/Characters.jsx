import { Fragment } from "react";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCharacters } from '../features/characters/characterSlice'
import Loader from "../components/Loader";
import { Colors } from "@blueprintjs/core";

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
      <p style={{ color: Colors.BLUE3, background: Colors.BLACK }}>Character Screen</p>
    </Fragment>
  );
};

export default CharacterScreen;
