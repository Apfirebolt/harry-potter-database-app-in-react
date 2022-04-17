import { Fragment } from "react";
import Banner from "../assets/harry-potter.jpg";

const HomeScreen = () => {
  return (
    <Fragment>
      <div className="container">
      <h3>Home - Harry Potter Database App</h3>
      <p>
        Created using an open source API hosted on Heroku, has data about potions, characters, spells and others from the 
        Universe of Harry Potter.
      </p>
      <img src={Banner} alt="error Icon" />
      </div>
    </Fragment>
  );
};

export default HomeScreen;
