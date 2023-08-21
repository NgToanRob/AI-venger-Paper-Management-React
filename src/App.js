import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NavbarComponent from './components/Navbar';
import ChatPaper from './components/ChatPaper';
import Profile from './components/Profile';


const App = () => {
  return (
    <Router>
      <NavbarComponent />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/chatpaper" component={ChatPaper} />
        <Route exact path="/profile" component={Profile} />
        {/* Add other routes if needed */}
      </Switch>

    </Router>
  );
};

export default App;
