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


const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
      <Route path='/content' render={() => 
             <Content posts={props.state.profilePage} 
                      addPost={props.addPost}
                      updateNewPostText={ props.updateNewPostText } /> } />

      <Route path='/dialogs' render={() => 
                   <Dialogs dialogs={props.state.dialogsPage} 
                            messages = {props.state.dialogsPage} /> } />
      <Route path='/news' component={News}/>
      <Route path='/music' component={Music}/>
      <Route path='/settings' component={Settings}/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;