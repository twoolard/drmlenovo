/*eslint-disable*/
import React from 'react';
// used for making the prop types of this component
import PropTypes from 'prop-types';

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from 'reactstrap';

var style = {
  'text-decoration': 'line-through'
};
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink href="https://www.lenovo.com/us/en/pc">Lenovo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0)">About</NavLink>
            </NavItem>
          </Nav>
          <div className="copyright">
            Proof of concept hashed together by <span style={style}>Wes Hatley</span>
            <a href="https://www.linkedin.com/in/wesley-hatley/" rel="noopener noreferrer" target="_blank">
              The Other Wes
            </a>{' '}
            while on his honeymoon
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
