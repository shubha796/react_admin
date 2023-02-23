import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";

import { ToastContainer } from "react-toastify";

const Dashboards = lazy(() => import("../../DemoPages/Dashboards"));
const Users = lazy(() => import("../../DemoPages/Users"));
const Movies = lazy(() => import("../../DemoPages/Movies"));
const Production = lazy(() => import("../../DemoPages/Production"));
const Account = lazy(() => import("../../DemoPages/Account"));
const Settings = lazy(() => import("../../DemoPages/Settings"));
const Widgets = lazy(() => import("../../DemoPages/Widgets"));
const Elements = lazy(() => import("../../DemoPages/Elements"));
const Components = lazy(() => import("../../DemoPages/Components"));
const Charts = lazy(() => import("../../DemoPages/Charts"));
const Forms = lazy(() => import("../../DemoPages/Forms"));
const Tables = lazy(() => import("../../DemoPages/Tables"));

const AppMain = () => {
  return (
    <Fragment>
      {/* Components */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">Loading ..</h6>
            </div>
          </div>
        }
      >
        <Route path="/components" component={Components} />
      </Suspense>
      {/* Forms */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">Loading ..</h6>
            </div>
          </div>
        }
      >
        <Route path="/forms" component={Forms} />
      </Suspense>
      {/* Charts */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">Loading ..</h6>
            </div>
          </div>
        }
      >
        <Route path="/charts" component={Charts} />
      </Suspense>
      {/* Tables */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">Loading ..</h6>
            </div>
          </div>
        }
      >
        <Route path="/tables" component={Tables} />
      </Suspense>
      {/* Elements */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">Loading ..</h6>
            </div>
          </div>
        }
      >
        <Route path="/elements" component={Elements} />
      </Suspense>
      {/* Dashboard Widgets */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">Loading ..</h6>
            </div>
          </div>
        }
      >
        <Route path="/widgets" component={Widgets} />
      </Suspense>
      {/* ====================== */}
      {/* Manage movies */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">Loading ..</h6>
            </div>
          </div>
        }
      >
        <Route path="/Movies" component={Movies} />
      </Suspense>
      {/* Production team  */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">Loading ..</h6>
            </div>
          </div>
        }
      >
        <Route path="/Production" component={Production} />
      </Suspense>
      {/* Account */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">Loading ..</h6>
            </div>
          </div>
        }
      >
        <Route path="/Account" component={Account} />
      </Suspense>

      {/* Settings */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">Loading ..</h6>
            </div>
          </div>
        }
      >
        <Route path="/Settings" component={Settings} />
      </Suspense>

      {/* Users */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">Loading ..</h6>
            </div>
          </div>
        }
      >
        <Route path="/users" component={Users} />
      </Suspense>
      {/* Dashboards */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">Loading ..</h6>
            </div>
          </div>
        }
      >
        <Route path="/dashboards" component={Dashboards} />
      </Suspense>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/dashboards/basic" />}
      />
      <ToastContainer />
    </Fragment>
  );
};

export default AppMain;
