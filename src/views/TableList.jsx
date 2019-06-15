import React from 'react';

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from 'reactstrap';

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Truscale</CardTitle>
                  <p>Completed In: 2019</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Projections</th>
                        <th>Site</th>
                        <th>Description</th>
                        <th className="text-center">Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          This endeavor has achieved statuses completion and automation and has no further forecasts.
                        </td>
                        <td>8001 Development Dr, Morrisville, NC 27560</td>
                        <td>
                          Hardware as a Service is a Lenovo lorem ipsum filler text, that's what I'm putting here.
                        </td>
                        <td className="text-center">$286,322,500</td>
                      </tr>
                      <tr>
                        <td>Sample Row 2 Additional Data</td>
                        <td>Sample Row 2 Additional Data</td>
                        <td>Sample Row 2 Additional Data</td>
                        <td className="text-center">$286,322,500</td>
                      </tr>
                      <tr>
                        <td>Sample Row 3 Additional Data</td>
                        <td>Sample Row 3 Additional Data</td>
                        <td>Sample Row 3 Additional Data</td>
                        <td className="text-center">$286,322,500</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Nitrogen</CardTitle>
                  <p className="category">On Track For: 2020</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Projections</th>
                        <th>Site</th>
                        <th>Description</th>
                        <th className="text-center">Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>XYZ parameters are projected by ABC dates.</td>
                        <td>8001 Development Dr, Morrisville, NC 27560</td>
                        <td>Nitrogen is a Lenovo lorem ipsum filler text, that's what I'm putting here.</td>
                        <td className="text-center">$286,322,500</td>
                      </tr>
                      <tr>
                        <td>Sample Row 2 Additional Data</td>
                        <td>Sample Row 2 Additional Data</td>
                        <td>Sample Row 2 Additional Data</td>
                        <td className="text-center">$286,322,500</td>
                      </tr>
                      <tr>
                        <td>Sample Row 3 Additional Data</td>
                        <td>Sample Row 3 Additional Data</td>
                        <td>Sample Row 3 Additional Data</td>
                        <td className="text-center">$286,322,500</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Hyperscale</CardTitle>
                  <p className="category">Proceeding With Risk In: 2020</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Projections</th>
                        <th>Site</th>
                        <th>Description</th>
                        <th className="text-center">Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>XYZ parameters are projected by ABC dates.</td>
                        <td>8001 Development Dr, Morrisville, NC 27560</td>
                        <td>Nitrogen is a Lenovo lorem ipsum filler text, that's what I'm putting here.</td>
                        <td className="text-center">$286,322,500</td>
                      </tr>
                      <tr>
                        <td>Sample Row 2 Additional Data</td>
                        <td>Sample Row 2 Additional Data</td>
                        <td>Sample Row 2 Additional Data</td>
                        <td className="text-center">$286,322,500</td>
                      </tr>
                      <tr>
                        <td>Sample Row 3 Additional Data</td>
                        <td>Sample Row 3 Additional Data</td>
                        <td>Sample Row 3 Additional Data</td>
                        <td className="text-center">$286,322,500</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Carbon</CardTitle>
                  <p className="category">Not Started: 2021</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Projections</th>
                        <th>Site</th>
                        <th>Description</th>
                        <th className="text-center">Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>XYZ parameters are projected by ABC dates.</td>
                        <td>8001 Development Dr, Morrisville, NC 27560</td>
                        <td>Nitrogen is a Lenovo lorem ipsum filler text, that's what I'm putting here.</td>
                        <td className="text-center">$286,322,500</td>
                      </tr>
                      <tr>
                        <td>Sample Row 2 Additional Data</td>
                        <td>Sample Row 2 Additional Data</td>
                        <td>Sample Row 2 Additional Data</td>
                        <td className="text-center">$286,322,500</td>
                      </tr>
                      <tr>
                        <td>Sample Row 3 Additional Data</td>
                        <td>Sample Row 3 Additional Data</td>
                        <td>Sample Row 3 Additional Data</td>
                        <td className="text-center">$286,322,500</td>
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

export default Tables;
