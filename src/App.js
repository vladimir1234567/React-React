import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
      <Route path='/content' component={Content}/>
      <Route path='/dialogs' component={Dialogs}/>
      <Route path='/news' component={News}/>
      <Route path='/music' component={Music}/>
      <Route path='/settings' component={Settings}/>
      </div>
      
    
    </div>
    </BrowserRouter>
  )
}

export default App;