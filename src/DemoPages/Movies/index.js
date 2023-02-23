import React, { Fragment } from "react";
import { Route } from "react-router-dom";

//== COMPONENTS ==

// Category

import CategoryList from "./Category";

// Language

import LanguageList from "./Language";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

const Components = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* == Components == */}

          {/* Carousel */}

          <Route path={`${match.url}/category`} component={CategoryList} />

          {/* Carousel */}

          <Route path={`${match.url}/language`} component={LanguageList} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Components;
