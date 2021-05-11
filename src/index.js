

import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import subjects  from './components/subjects'
import Teachers from './components/Teachers'
import Header from './components/navbar'
import register from './components/register';


ReactDOM.render(
    
         <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={App} />
          <Route  path="/Subjects" component={subjects} />
          <Route path="/Teachers" component={Teachers} />
          <Route exact path="/Students" component={register} />
          
        </Switch>
      </Router>,
   
    document.getElementById('root')
  );

