import React, { Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import CarouselBSExample from "./Examples/Carousel";

export default class CategoryList extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          heading="Category List"
          subheading=""
          icon="pe-7s-album icon-gradient bg-sunny-morning"
        />
        <div className="mbg-3 h-auto ps-0 pe-0 bg-transparent no-border card-header">
          <div className="card-header-title fsize-2 text-capitalize fw-normal">
            Categories
          </div>
        </div>
        {/* <CarouselBSExample /> */}
      </Fragment>
    );
  }
}
