import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSpells } from "../features/spells/spellSlice";
import { Card, InputGroup } from "@blueprintjs/core";
import Loader from "../components/Loader";

const SpellScreen = () => {
  const { spells, isLoading, isSuccess } = useSelector((state) => state.spell);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpells());
  }, [dispatch]);

  return (
    <Fragment>
      <h3>Spells</h3>

      {isLoading && <Loader />}
      <div className="container">
        <InputGroup
          asyncControl={true}
          large={true}
          leftIcon="search"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Spells..."
          value={searchText}
        />

        <Card style={{ marginTop: "0.5rem" }}>
          <table className="bp4-html-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Creator</th>
                <th>Effect</th>
                <th>Type</th>
                <th>Verbal</th>
              </tr>
            </thead>
            <tbody>
              {spells
                .filter((x) => x.name.includes(searchText))
                .map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.creator}</td>
                    <td>{item.effect}</td>
                    <td>{item.type}</td>
                    <td>{item.canBeVerbal ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Card>
      </div>
    </Fragment>
  );
};

export default SpellScreen;
