import Calendar from 'views/Calendar.jsx';
import Dashboard from 'views/Dashboard.jsx';
import Notifications from 'views/Notifications.jsx';
import TableList from 'views/TableList.jsx';
import UserProfile from 'views/UserProfile.jsx';

var routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'tim-icons icon-chart-pie-36',
    component: Dashboard,
    layout: '/admin'
  },
  {
    path: '/projectlist',
    name: 'DCG Project List',
    icon: 'tim-icons icon-puzzle-10',
    component: TableList,
    layout: '/admin'
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'tim-icons icon-bell-55',
    component: Notifications,
    layout: '/admin'
  },
  {
    path: '/calendar',
    name: 'Calendar',
    icon: 'tim-icons icon-time-alarm',
    component: Calendar,
    layout: '/admin'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: 'tim-icons icon-single-02',
    component: UserProfile,
    layout: '/admin'
  }
];

export default routes;
