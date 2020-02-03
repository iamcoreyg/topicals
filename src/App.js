import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz'
import axios from 'axios';
import CountUp from 'react-countup';
import {Helmet} from "react-helmet";

import './App.css';
import './Quiz.css';
import './Intro.css';
import './share-modal.css';

class App extends React.Component {
  state = {
    numOfEntries: 0
  }
  componentDidMount() {
    axios.get(`https://v2-api.sheety.co/ea57f67b579af1a26d164034c3bc694f/skinSunStars/total`)
        .then((res) => {
            if (res && res.data && res.data.total) {
                this.setState({
                    numOfEntries: res.data.total['0'].total
                })
            }
        })
}

  render() {
    return (
      <div className="wrap">
        <Helmet>
              <meta charSet="utf-8" />
              <title>Skin, Sun & Stars | Topicals</title>
              <link rel="canonical" href="https://mytopicals.com/skinsunandstars" />
          </Helmet>
        <div className="intro">
          <div className="intro-content">
            <h1 className="intro-heading">Skin, Sun & Stars</h1>
            <p className="intro-p">
              Input your info and receive your skin's star signs picked for your unique needs
              
              <small class="count">Join <CountUp end={this.state.numOfEntries} /> others who have gotten their skin’s zodiac.</small>
            </p>
            <span className="arrow"></span>
            <span className="circle circle-1"></span>
            <span className="circle circle-2"></span>
          </div>
        </div>
        <Quiz />
      </div>
    );
  }
}

export default App;
