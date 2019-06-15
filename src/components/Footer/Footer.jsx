/*eslint-disable*/
import React from 'react';
// used for making the prop types of this component
import PropTypes from 'prop-types';

import { Container, Nav, NavItem, NavLink } from 'reactstrap';

var style = {
  'text-decoration': 'line-through'
};

class Footer extends React.Component {
  render() {
    return (
      <footer className={'footer' + (this.props.default ? ' footer-default' : '')}>
        <Container fluid={this.props.fluid ? true : false}>
          <Nav>
            <NavItem>
              <NavLink href="https://www.lenovo.com/us/en/pc" target="_blank">
                Lenovo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0)">About</NavLink>
            </NavItem>
          </Nav>
          <div className="copyright">
            Proof of concept coded by <span style={style}>Wes Hatley</span>{' '}
            <a href="https://www.linkedin.com/in/wesley-hatley/" rel="noopener noreferrer" target="_blank">
              The Other Wes
            </a>{' '}
            and designed by{' '}
            <a href="https://www.linkedin.com/in/amanda-michelson/" rel="noopener noreferrer" target="_blank">
              Amanda Michelson
            </a>
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
