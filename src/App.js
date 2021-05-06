import React ,{ useState }from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Home from './screens/Home/Home';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import SignOut from './components/SignOut/SignOut';
import Profile from './components/Profile/Profile';
function App() {
  let [auth, setAuth] =useState(JSON.parse(localStorage.getItem('auth')));
  let [prof, setProf] =useState(JSON.parse(localStorage.getItem('prof')));
  function AuthUpdate()
  {
    setAuth(JSON.parse(localStorage.getItem('auth')));
    setProf(JSON.parse(localStorage.getItem('prof')));
  }
  
  return (
    <div className="App">
      <Navbar auth={auth}/>

      <Switch>
        <Route path="/login"> <SignIn AuthUpdate={()=>{AuthUpdate()}}/> </Route>
        <Route path="/logout"> <SignOut AuthUpdate={()=>{AuthUpdate()}}/> </Route>
        <Route path="/profile"> <Profile prof={prof}/> </Route>
        <Route path="/register"> <SignUp /></Route>
        <Route path="/"> <Home /> </Route>



      </Switch>
    </div>
  );
}

export default App;
