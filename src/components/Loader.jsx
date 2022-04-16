import { Fragment } from "react";
import { Spinner } from "@blueprintjs/core";

const Loader = () => {
  return (
    <Fragment>
      <Spinner size={100} style={{ margin: '1rem' }} />
    </Fragment>
  );
};

export default Loader;
