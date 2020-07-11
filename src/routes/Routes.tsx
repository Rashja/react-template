import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routePath from './path';
import Loader from "../components/loader/Loader";


const Routes: React.FC = () => {
  /*------------------------------------------------------------------ */
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routePath.map((route, index) =>
              <Route
                key={index}
                exact={route.exact ? route.exact : false}
                path={route.path}
                component={route.component}
              />
            )}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default Routes;
