import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classnames from "classnames";

import {
  Row,
  Col,
  Button,
  CardHeader,
  Card,
  CardBody,
  Progress,
  TabContent,
  TabPane,
} from "reactstrap";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import {
  AreaChart,
  Area,
  Line,
  ResponsiveContainer,
  Bar,
  BarChart,
  ComposedChart,
  CartesianGrid,
  Tooltip,
  LineChart,
} from "recharts";

import {
  faAngleUp,
  faArrowRight,
  faArrowUp,
  faArrowLeft,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import avatar1 from "../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../assets/utils/images/avatars/3.jpg";
import avatar4 from "../../../assets/utils/images/avatars/4.jpg";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data2 = [
  { name: "Page A", uv: 5400, pv: 5240, amt: 1240 },
  { name: "Page B", uv: 7300, pv: 4139, amt: 3221 },
  { name: "Page C", uv: 8200, pv: 7980, amt: 5229 },
  { name: "Page D", uv: 6278, pv: 4390, amt: 3200 },
  { name: "Page E", uv: 3189, pv: 7480, amt: 6218 },
  { name: "Page D", uv: 9478, pv: 6790, amt: 2200 },
  { name: "Page E", uv: 1289, pv: 1980, amt: 7218 },
  { name: "Page F", uv: 3139, pv: 2380, amt: 5150 },
  { name: "Page G", uv: 5349, pv: 3430, amt: 3210 },
];

export default class AnalyticsDashboard1 extends Component {
  constructor() {
    super();

    this.state = {
      dropdownOpen: false,
      activeTab1: "11",
    };
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
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
              <PageTitle
                heading="User"
                subheading=""
                icon="lnr-user icon-gradient bg-ripe-malin"
              />

              <Row>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <div className="card-header">
                      Users
                      <div className="btn-actions-pane-right">
                        <div role="group" className="btn-group-sm btn-group">
                          <button className="active btn btn-info">
                            Join today
                          </button>
                          <button className="btn btn-info">All user</button>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                        <thead>
                          <tr>
                            <th className="text-center">#</th>
                            <th>Name</th>
                            <th className="text-center">City</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center text-muted">#345</td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <div className="widget-content-left">
                                      <img
                                        width={40}
                                        className="rounded-circle"
                                        src={avatar4}
                                        alt="Avatar"
                                      />
                                    </div>
                                  </div>
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading">
                                      John Doe
                                    </div>
                                    <div className="widget-subheading opacity-7">
                                      Web Developer
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">Madrid</td>
                            <td className="text-center">
                              <div className="badge bg-warning">Pending</div>
                            </td>
                            <td className="text-center">
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                              >
                                Details
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center text-muted">#347</td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <div className="widget-content-left">
                                      <img
                                        width={40}
                                        className="rounded-circle"
                                        src={avatar3}
                                        alt="Avatar"
                                      />
                                    </div>
                                  </div>
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading">
                                      Ruben Tillman
                                    </div>
                                    <div className="widget-subheading opacity-7">
                                      Etiam sit amet orci eget
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">Berlin</td>
                            <td className="text-center">
                              <div className="badge bg-success">Completed</div>
                            </td>
                            <td className="text-center">
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                              >
                                Details
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center text-muted">#321</td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <div className="widget-content-left">
                                      <img
                                        width={40}
                                        className="rounded-circle"
                                        src={avatar2}
                                        alt="Avatar"
                                      />
                                    </div>
                                  </div>
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading">
                                      Elliot Huber
                                    </div>
                                    <div className="widget-subheading opacity-7">
                                      Lorem ipsum dolor sic
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">London</td>
                            <td className="text-center">
                              <div className="badge bg-danger">In Progress</div>
                            </td>
                            <td className="text-center">
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                              >
                                Details
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center text-muted">#55</td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <div className="widget-content-left">
                                      <img
                                        width={40}
                                        className="rounded-circle"
                                        src={avatar1}
                                        alt="Avatar"
                                      />
                                    </div>
                                  </div>
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading">
                                      Vinnie Wagstaff
                                    </div>
                                    <div className="widget-subheading opacity-7">
                                      UI Designer
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">Amsterdam</td>
                            <td className="text-center">
                              <div className="badge bg-info">On Hold</div>
                            </td>
                            <td className="text-center">
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                              >
                                Details
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-block text-center card-footer">
                      <button className="me-2 btn-icon btn-icon-only btn btn-outline-danger">
                        <i className="pe-7s-trash btn-icon-wrapper"> </i>
                      </button>
                      <button className="btn-wide btn btn-success">Save</button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
