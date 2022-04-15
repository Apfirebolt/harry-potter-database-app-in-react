import { Fragment } from "react";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getHouses } from '../features/houses/houseSlice'

const HousesScreen = () => {
  const { houses, isLoading, isSuccess } = useSelector(
    (state) => state.house
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHouses())
  }, [dispatch])

  return (
    <Fragment>
      <p>A sample fragment</p>
    </Fragment>
  );
};

export default HousesScreen;
