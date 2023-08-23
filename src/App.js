import { React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NavbarComponent from "./components/Navbar";
import ChatPaper from "./components/ChatPaper";
import Profile from "./components/Profile";
import AIvenger from "./components/AIvenger";
import Team from "./components/Team";
const App = () => {
    return (
        <Router>
            <NavbarComponent />

            <Switch>
                <Route exact path="/" component={AIvenger} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/chatpaper/*" component={ChatPaper} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/team" component={Team} />

                {/* Add other routes if needed */}
            </Switch>
        </Router>
    );
};

export default App;
