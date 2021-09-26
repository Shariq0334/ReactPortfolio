import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Experience from './pages/experience';
import Layout from './component/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' exact>
          <Home />
        </Route>
        <Route exact path='/contact' exact>
          <Contact />
        </Route>
        <Route exact path='/projects' exact>
          <Projects />
        </Route>
        <Route exact path='/skills' exact>
          <Skills />
        </Route>
        <Route exact path='/experience' exact>
          <Experience />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
