import logo from './logo.svg';
import React, { Component }  from 'react';
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Header from './components/Header/index'
import SideBar from './components/Main/SideBar/index'
import UsersList from './components/Main/MainCotent/Users/index'
import './components/Header/style/headerStyle.scss'
import './components/Main/SideBar/style/sidebarStyle.scss'
import './components/Main/MainCotent/Users/style/usersStyle.scss'
import './App.css';

const dataProvider = jsonServerProvider("http://localhost:3001");
function App() {
  return (
    <div className="App">
        {/* <Admin dataProvider={dataProvider} >
            <Resource name="comments" list={ListGuesser} />
            <Resource name="posts" list={ListGuesser} />
        </Admin> */}
        <Header  />;
        <SideBar />;
        <UsersList />
    </div>
  );
}

export default App;
