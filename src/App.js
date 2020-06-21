import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.scss';
import Home from "./pages";
import Projects from "./pages/Projects";
import About from "./pages/About";
import {Theme} from "./components/Theme";
import Contact from "./pages/contact";
class App extends React.Component {
    render() {
        return(

                <Router>
                   <Switch>
                       <Theme>
                       <Route exact path='/' component={Home}/>
                       <Route exact path='/Projects' component={Projects}/>
                       <Route exact path='/About' component={About}/>
                        <Route exact path='/contact' component={Contact}/>
                       </Theme>
                   </Switch>
                </Router>

        )
    }
}

export default App;
