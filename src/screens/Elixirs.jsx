import { Fragment } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getElixirs } from "../features/elixirs/elixirSlice";
import { Card } from "@blueprintjs/core";
import Loader from "../components/Loader";

const ElixirsScreen = () => {
  const { elixirs, isLoading, isSuccess } = useSelector(
    (state) => state.elixir
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getElixirs());
  }, [dispatch]);

  return (
    <Fragment>
      <h3>Elixirs</h3>
      {isLoading && <Loader />}
      <div className="container">
        <Card>
          <table className="bp4-html-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Effect</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {elixirs.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.effect}</td>
                  <td>{item.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </Fragment>
  );
};

export default ElixirsScreen;
