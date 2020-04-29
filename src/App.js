import React, { Component } from 'react';

import { CardList } from './cardList/CardList';
import { SearchBar } from './SearchBar/SearchBar';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFeild: '',
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((json) => this.setState({ monsters: json }));
  }

  filterState() {
    const filteredState = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchFeild.toLowerCase())
    );
    return filteredState;
  }

  setSearchState = (e) => {
    this.setState({ searchFeild: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <SearchBar getInput={this.setSearchState} />
        <CardList monsters={this.filterState()} />
      </div>
    );
  }
}

export default App;
