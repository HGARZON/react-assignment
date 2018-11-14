import React, { Component } from 'react';

import headerImage from './assets/header.jpg';
import './styles/home.css';

class HomeView extends Component {
  render() {
    return(
      <div>
        <h1 className="character-title">
          Rick and Morty Character Information Database
        </h1>
        <div>
          <img className="header" src={headerImage} alt="Rick and Morty"/>
        </div>
        <a href="https://rickandmortyapi.com" className="link-information">https://rickandmortyapi.com</a>
      </div>
    )
  }
}

export default HomeView;