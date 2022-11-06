import { useEffect, useState } from 'react';
import './App.css';

import CardList from './components/card-list/CardList';
import Search from './components/search-box/Search';

const App = () => {
  const [search, setSearch] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(search)
    })
    setFilteredMonsters(newFilteredMonsters)

    
  }, [monsters, search])


  const onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    setSearch(searchField)
  }




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





export default App;
