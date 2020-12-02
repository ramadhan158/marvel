import React, { useEffect, useState } from 'react'
import Marvel from './Marvel'

const App = () => {
  const apikey = '8a41cb1c97646600edf2a1f2626f6f1a';
  const ts = '1605539483000';
  const hash = 'fa671960ed91ebe8038f30063c34b4c6';

  const [hero, setHero] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(undefined);

  useEffect(() => {
      getAPI();
  }, [query]);

  const getAPI = async () => {
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}&name=${query}`)
    const data = await response.json();
    const result = await data.data.results
    setHero(result)
  }

    const updateSearch = (e) => {
      setSearch(e.target.value);
    }

    const getSearch = (e) => {
      e.preventDefault()
      if (search === "") {
        setQuery(null)  
      }else{
        setQuery(search)
      }
      setSearch("")
    }

    return(
        <div className="App">
            <form onSubmit={getSearch}>
                <input value={search} onChange={updateSearch}/>
                <button>Cari</button>
            </form>
            <div>
                {hero.map(he => (
                <Marvel name={he.name} des={he.description} />
                ))}
            </div>
            
        </div>
    )
};

export default App;
