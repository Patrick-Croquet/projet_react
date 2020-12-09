import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Khan } from './Khan';
import { Carlson } from './Carlson';
import { Preljocaj } from './Preljocaj';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';



function App() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/khan" component={Khan} />
                <Route path="/carlson" component={Carlson} />
                <Route path="/preljocaj" component={Preljocaj} />
                <Route path="/contact" component={Contact} />
                <Route component={NoMatch} />
              </Switch>
            </Layout>
          <Footer />
        </Router>
      </React.Fragment>
    );
}

export default App;
