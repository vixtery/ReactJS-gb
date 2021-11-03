import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRouter({ ...rest }) {
  const { user } = useSelector((state) => state.user);

  return user ? <Route {...rest} /> : <Redirect to={{ pathname: "/" }} />;
}

export default PrivateRouter;