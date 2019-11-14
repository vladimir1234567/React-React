import {createStore, combineReducers} from 'redux';
import profileReduser from './profile-reduser';
import sidebarReduser from './sidebar-reduser';
import dialogsReduser from './dialogs-reduser';

let redusersPack = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser
});

let store = createStore(redusersPack);

export default store;

window.store = store;