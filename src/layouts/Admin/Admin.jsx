import React from 'react';
import { Route, Switch } from 'react-router-dom';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';

// core components
import AdminNavbar from 'components/Navbars/AdminNavbar.jsx';
import Footer from 'components/Footer/Footer.jsx';
import Sidebar from 'components/Sidebar/Sidebar.jsx';
import FixedPlugin from 'components/FixedPlugin/FixedPlugin.jsx';

import routes from 'routes.js';

import logo from 'assets/img/Lenovo.png';

var ps;

let imgUrl = require('./../../assets/img/Background.jpg');
let bgStyles = {
  backgroundImage: `url(${imgUrl})`,
  backgroundSize: 'cover'
};

//this.state.backgroundColor
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'blue',
      sidebarOpened: document.documentElement.className.indexOf('nav-open') !== -1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on';
      document.documentElement.classList.remove('perfect-scrollbar-off');
      ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
      let tables = document.querySelectorAll('.table-responsive');
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    window.addEventListener('scroll', this.showNavbarButton);
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
      document.documentElement.className += ' perfect-scrollbar-off';
      document.documentElement.classList.remove('perfect-scrollbar-on');
    }
    window.removeEventListener('scroll', this.showNavbarButton);
  }
  componentDidUpdate(e) {
    if (e.location.pathname !== e.history.location.pathname) {
      if (navigator.platform.indexOf('Win') > -1) {
        let tables = document.querySelectorAll('.table-responsive');
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle('nav-open');
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === '/admin') {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };

  getActiveRoute = (routes) => {
    let activeRoute = 'Default Brand Text';
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = this.getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (window.location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  handleActiveClick = (color) => {
    this.setState({ activeColor: color });
  };
  getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (this.props.location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return 'Brand';
  };

  handleMiniClick = () => {
    let notifyMessage = 'Sidebar mini ';
    if (document.body.classList.contains('sidebar-mini')) {
      this.setState({ sidebarMini: false });
      notifyMessage += 'deactivated...';
    } else {
      this.setState({ sidebarMini: true });
      notifyMessage += 'activated...';
    }
    let options = {};
    options = {
      place: 'tr',
      message: notifyMessage,
      type: 'primary',
      icon: 'tim-icons icon-bell-55',
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
    document.body.classList.toggle('sidebar-mini');
  };
  toggleSidebar = () => {
    this.setState({
      sidebarOpened: !this.state.sidebarOpened
    });
    document.documentElement.classList.toggle('nav-open');
  };
  closeSidebar = () => {
    this.setState({
      sidebarOpened: false
    });
    document.documentElement.classList.remove('nav-open');
  };
  render() {
    return (
      <>
        <div className="wrapper">
          <Sidebar
            {...this.props}
            routes={routes}
            bgColor={this.state.backgroundColor}
            logo={{
              outterLink: 'https://parallelam.github.io/drmlenovo/',
              text: 'Wesley Hatley',
              imgSrc: logo
            }}
            toggleSidebar={this.toggleSidebar}
          />

          <div className="main-panel" ref="mainPanel" style={bgStyles}>
            <AdminNavbar
              {...this.props}
              brandText={this.getBrandText(this.props.location.pathname)}
              toggleSidebar={this.toggleSidebar}
              sidebarOpened={this.state.sidebarOpened}
            />
            <Switch>{this.getRoutes(routes)}</Switch>
            {// we don't want the Footer to be rendered on map page
            this.props.location.pathname.indexOf('maps') !== -1 ? null : <Footer fluid />}
          </div>
        </div>
        <FixedPlugin bgColor={this.state.backgroundColor} handleBgClick={this.handleBgClick} />
      </>
    );
  }
}

export default Admin;
