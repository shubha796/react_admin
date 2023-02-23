import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import MetisMenu from "react-metismenu";

import {
  MainNav,
  ComponentsNav,
  FormsNav,
  WidgetsNav,
  ChartsNav,
  Subscribers,
  MoviesNav,
} from "./NavItems";

class Nav extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <h5 className="app-sidebar__heading">Company</h5>
        <div className="metismenu vertical-nav-menu">
          <ul className="metismenu-container">
            <li className="metismenu-item">
              <a
                className="metismenu-link"
                href="https://sunyam.com/"
                target="_blank"
              >
                <i className="metismenu-icon pe-7s-diamond"></i>
                Sunyam Software
              </a>
            </li>
          </ul>
        </div>

        <h5 className="app-sidebar__heading"></h5>
        <MetisMenu
          content={MainNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Subscribers</h5>
        <MetisMenu
          content={Subscribers}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />

        <h5 className="app-sidebar__heading">Manage movies</h5>
        <MetisMenu
          content={MoviesNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />

        <h5 className="app-sidebar__heading">Production team</h5>
        <MetisMenu
          content={MoviesNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />

        <h5 className="app-sidebar__heading">Manage account</h5>
        <MetisMenu
          content={Subscribers}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Settings</h5>
        <MetisMenu
          content={Subscribers}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        {/* ====================================== */}

        {/* <h5 className="app-sidebar__heading">Components</h5>
        <MetisMenu
          content={ComponentsNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Widgets</h5>
        <MetisMenu
          content={WidgetsNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Forms</h5>
        <MetisMenu
          content={FormsNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Charts</h5>
        <MetisMenu
          content={ChartsNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        /> */}
      </Fragment>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);
