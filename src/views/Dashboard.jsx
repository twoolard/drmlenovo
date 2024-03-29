import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from 'reactstrap';

// core components
import { chartExample1, chartExample2, chartExample3, chartExample4 } from 'variables/charts.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: 'data1'
    };
  }
  setBgChartData = (name) => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Project Overview</h5>
                      <CardTitle tag="h2">Truscale</CardTitle>
                    </Col>

                    <Col sm="5">
                      <ButtonGroup className="btn-group-toggle float-right" data-toggle="buttons">
                        <Button
                          tag="label"
                          className={classNames('btn-simple', {
                            active: this.state.bigChartData === 'data1'
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setBgChartData('data1')}
                        >
                          <input defaultChecked className="d-none" name="options" type="radio" />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Year</span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames('btn-simple', {
                            active: this.state.bigChartData === 'data2'
                          })}
                          onClick={() => this.setBgChartData('data2')}
                        >
                          <input className="d-none" name="options" type="radio" />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Status</span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="2"
                          size="sm"
                          tag="label"
                          className={classNames('btn-simple', {
                            active: this.state.bigChartData === 'data3'
                          })}
                          onClick={() => this.setBgChartData('data3')}
                        >
                          <input className="d-none" name="options" type="radio" />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Path</span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                    <Col sm="1">
                      <UncontrolledDropdown className="float-right">
                        <DropdownToggle caret className="btn-icon " color="link" data-toggle="dropdown" type="button">
                          <i className="tim-icons icon-settings-gear-63" />
                        </DropdownToggle>
                        <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                            Collapse Project Overview
                          </DropdownItem>
                          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                            Change To A Different Project
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line data={chartExample1[this.state.bigChartData]} options={chartExample1.options} />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="5">
                      <div className="info-icon text-center icon-warning">
                        <i className="tim-icons icon-chat-33" />
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Truscale Version</p>
                        <CardTitle tag="h3">2.0.0</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="tim-icons icon-refresh-01" /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="5">
                      <div className="info-icon text-center icon-primary">
                        <i className="tim-icons icon-shape-star" />
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Truscale Clients</p>
                        <CardTitle tag="h3">45,610</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="tim-icons icon-sound-wave" /> Latest Data
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="5">
                      <div className="info-icon text-center icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Truscale Assets Deployed</p>
                        <CardTitle tag="h3">155,000</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="tim-icons icon-trophy" /> Status Reports
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="5">
                      <div className="info-icon text-center icon-danger">
                        <i className="tim-icons icon-molecule-40" />
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Truscale System Errors</p>
                        <CardTitle tag="h3">12</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="tim-icons icon-watch-time" /> In the last 24 hours
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Truscale Total Asset Shipments</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-primary" /> 763,215
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line data={chartExample2.data} options={chartExample2.options} />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Truscale Monthly Profit</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-info" /> $3163.46
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar data={chartExample3.data} options={chartExample3.options} />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Truscale Completed Installations</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 12,100K
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line data={chartExample4.data} options={chartExample4.options} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="6" md="12">
              <Card className="card-tasks">
                <CardHeader>
                  <h6 className="title d-inline">MEETINGS (6)</h6>
                  <p className="card-category d-inline"> today</p>
                  <UncontrolledDropdown>
                    <DropdownToggle caret className="btn-icon" color="link" data-toggle="dropdown" type="button">
                      <i className="tim-icons icon-settings-gear-63" />
                    </DropdownToggle>
                    <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Highlight All Items
                      </DropdownItem>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Dismiss Selected Items
                      </DropdownItem>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Collapse Meetings Table
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Review Truscale Business Requirements</p>
                            <p className="title">Monday, June 17th, 2019 at 04:00pm to 05:00pm</p>
                            <p className="text-muted">We'll find a room come meeting time.</p>
                          </td>
                          <td className="td-actions text-right">
                            <Button color="link" id="tooltip636901683" title="" type="button">
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip636901683" placement="right">
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Compliment Amanda's Lovely Haircut</p>
                            <p className="title">All Day</p>
                            <p className="text-muted">Amanda recently got a haircut and it is very well done.</p>
                          </td>
                          <td className="td-actions text-right">
                            <Button color="link" id="tooltip457194718" title="" type="button">
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip457194718" placement="right">
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Discuss Hyperscale</p>
                            <p className="title">Monday, June 17th, 2019 at 10:00am to 10:30am</p>
                            <p className="text-muted">B8 2S-F11</p>
                          </td>
                          <td className="td-actions text-right">
                            <Button color="link" id="tooltip362404923" title="" type="button">
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip362404923" placement="right">
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Lunch With Executives</p>
                            <p className="title">Monday, June 17th, 2019 at 12:00pm to 1:00pm</p>
                            <p className="text-muted">Ruth's Chris Steakhouse in Durham</p>
                          </td>
                          <td className="td-actions text-right">
                            <Button color="link" id="tooltip818217463" title="" type="button">
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip818217463" placement="right">
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Compile Digital Roadmap Project Requirements</p>
                            <p className="title">Monday, June 17th, 2019 at 2:00pm to 2:30pm</p>
                            <p className="text-muted">Skype</p>
                          </td>
                          <td className="td-actions text-right">
                            <Button color="link" id="tooltip831835125" title="" type="button">
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip831835125" placement="right">
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Interview New Intern</p>
                            <p className="title">Monday, June 17th, 2019 at 3:00pm to 3:30pm</p>
                            <p className="text-muted">B8 Lobby</p>
                          </td>
                          <td className="td-actions text-right">
                            <Button color="link" id="tooltip217595172" title="" type="button">
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip217595172" placement="right">
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">DCG Project Table Overview</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Project</th>
                        <th>Category</th>
                        <th>Year</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th className="text-center">Export List</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Truscale</td>
                        <td>Business Innovation</td>
                        <td>2019</td>
                        <td>Completed</td>
                        <td>Lorem Ipsum</td>
                        <td className="text-center" href="">
                          VIEW IN CONFLUENCE
                        </td>
                      </tr>
                      <tr>
                        <td>IaaS Expanded Offerings</td>
                        <td>Business Innovation</td>
                        <td>2019</td>
                        <td>On Track</td>
                        <td>Lorem Ipsum</td>
                        <td className="text-center">VIEW IN CONFLUENCE</td>
                      </tr>
                      <tr>
                        <td>IBM Integration into Self-Owned CRM</td>
                        <td>Customer & Partner Experience</td>
                        <td>2020</td>
                        <td>Not Started</td>
                        <td>Lorem Ipsum</td>
                        <td className="text-center">VIEW IN CONFLUENCE</td>
                      </tr>
                      <tr>
                        <td>AI Powered Customer & Business Forecasting</td>
                        <td>Business Automation</td>
                        <td>2020</td>
                        <td>Not Started</td>
                        <td>Lorem Ipsum</td>
                        <td className="text-center">VIEW IN CONFLUENCE</td>
                      </tr>
                      <tr>
                        <td>Hypercale</td>
                        <td>Business Innovation</td>
                        <td>2019</td>
                        <td>Completed</td>
                        <td>Lorem Ipsum</td>
                        <td className="text-center" href="">
                          VIEW IN CONFLUENCE
                        </td>
                      </tr>
                      <tr>
                        <td>Nitrogen</td>
                        <td>Business Innovation</td>
                        <td>2019</td>
                        <td>Completed</td>
                        <td>Lorem Ipsum</td>
                        <td className="text-center" href="">
                          VIEW IN CONFLUENCE
                        </td>
                      </tr>
                      <tr>
                        <td>Win The Powerball</td>
                        <td>Business Innovation</td>
                        <td>2019</td>
                        <td>Completed</td>
                        <td>Lorem Ipsum</td>
                        <td className="text-center" href="">
                          VIEW IN CONFLUENCE
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
