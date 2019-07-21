import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Landing from '../pages/Home';

class App extends Component {
    render() {
        return (
           <Router>
               <Header />
                    <Switch>
                        <Route component={Landing} exact path="/" />
                    </Switch>
               <Footer />
           </Router>
                
           
        )
    }
}


export default App;
