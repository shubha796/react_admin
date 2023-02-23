import React, { Fragment } from "react";

import Tabs from "react-responsive-tabs";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Dropdown Examples

import DropdownStyles from "./Examples/DropdownStyles";

const tabsContent = [
  {
    title: "Language",
    content: <DropdownStyles />,
  },
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index,
  }));
}

export default class LanguageList extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          heading="Language List"
          subheading="You can add multiple languages."
          icon="pe-7s-umbrella icon-gradient bg-sunny-morning"
        />

        <Tabs
          tabsWrapperClass="body-tabs body-tabs-layout"
          transform={false}
          showInkBar={true}
          items={getTabs()}
        />
      </Fragment>
    );
  }
}
