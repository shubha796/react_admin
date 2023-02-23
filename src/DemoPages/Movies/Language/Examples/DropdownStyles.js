import React, { Fragment } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";
// import {Animated} from "react-animated-css";

export default class DropdownStyles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition
            component="div"
            className="TabsAnimation"
            appear={true}
            timeout={0}
            enter={false}
            exit={false}
          >
            <div>
              <h1>Hello</h1>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
