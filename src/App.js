import React, { useEffect, useState } from 'react'
import Marvel from './Marvel';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const apikey = '8a41cb1c97646600edf2a1f2626f6f1a';
  const ts = '1605539483000';
  const hash = 'fa671960ed91ebe8038f30063c34b4c6';

  //hero state 
  const [hero, setHero] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(undefined);

  //comic state
  const [comic, setComic] = useState([]);

  useEffect(() => { 
      // get api hero
      const getAPIHero = async () => {
        try{
          const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}&name=${query}`)
          const data = await response.json();
          const result = await data.data.results
          setHero(result)  
        } catch(err) {
          console.log(err)
        }
      }
      getAPIHero();

      // get api comic
      const getAPIComics = async () => {
        try{
          const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}&name=${query}`)
          const data = await response.json();
          const result = await data.data.results
          setHero(result)  
        } catch(err) {
          console.log(err)
        }
      }

  }, [query]);


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

    console.log(hero)

    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <form onSubmit={getSearch}>
                <input value={search} onChange={updateSearch}/>
                <button>Cari</button>
            </form>
        </nav>
            <div>
                {hero.map(he => (
                // key salah
                <Marvel key={he.name} name={he.name} des={he.description} img={he.thumbnail.path}/>
                ))}
            </div>
      </>
    )
};

export default App;
