var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profiles = require('../components/Profile');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profiles} />
    <IndexRoute component={Home} />
  </Route>
);
