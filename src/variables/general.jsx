var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

const events = [
  {
    title: 'All Day Event',
    allDay: true,
    start: new Date(y, m, 1),
    end: new Date(y, m, 1)
  },
  {
    title: 'Meeting',
    start: new Date(y, m, d - 1, 10, 30),
    end: new Date(y, m, d - 1, 11, 30),
    allDay: false,
    color: 'green'
  },
  {
    title: 'Lunch',
    start: new Date(y, m, d + 7, 12, 0),
    end: new Date(y, m, d + 7, 14, 0),
    allDay: false,
    color: 'red'
  },
  {
    title: 'Lunch with Ettain',
    start: new Date(y, m, d - 2),
    end: new Date(y, m, d - 2),
    allDay: true,
    color: 'azure'
  },
  {
    title: "Amanda Michelson's Birthday Party",
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false,
    color: 'azure'
  },
  {
    title: 'Click for Lenovo Event Details',
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: 'orange'
  },
  {
    title: 'Click for Google Alert Popup',
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: 'orange'
  }
];
export { events };
