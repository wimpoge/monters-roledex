import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/CardList';
import Search from './components/search-box/Search';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
      ))
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()

    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <h1 className='app-title'>
          Monster Roledex
        </h1>
        <Search onChangeHandler={onSearchChange} placeholder="search" className="monster-search-box" />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
