import React from 'react';
import {NavBar } from '../components/index.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom'
import {MoviesList, MovieInsert,MovieUpdate, About} from '../pages'
function App(){
  return(
   <Router>
     <NavBar/>
     <Redirect to ="/allMovie" exact component = {MoviesList}></Redirect>
       <Switch>
         <Route  path ="/allMovie" exact component = {MoviesList}></Route>
         <Route path="/createMovie" exact component = {MovieInsert}></Route>
         <Route path="/deleteMovie" exact component={MovieInsert}></Route>
         <Route path="/updatemovie/:id" exact component={MovieUpdate}></Route>
         <Route path="/about" exact component={About}></Route>
        
       </Switch>
   </Router>
  )
}
export default App;
