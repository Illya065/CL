import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Homepage from "../Homepage";
import SingleCatPage from "../SingleCatPage";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" element={<Homepage />}></Route>
      <Route
        path="/single-cat-page/:bread_id"
        element={<SingleCatPage />}
      ></Route>
    </Switch>
  );
};

export default Routes;
