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
  const [comics, setComics] = useState();

  useEffect(() => { 
      // get hero
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

  }, [query]);

  //getting comics
  if (hero.length === 1) {
    const getComics = async () => {
      const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${hero[0].id}/comics?apikey=${apikey}&ts=${ts}&hash=${hash}`)
      const data = await response.json()
      const comics = await data.data.results
      setComics(comics)
    }
    getComics()
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

  // konsol iki lho su, run en lak metu terus console.log e
  console.log(comics)

  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <form className="form-inline" onSubmit={getSearch}>
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" value={search} onChange={updateSearch} />
            <button className="btn btn-primary">Cari</button>
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
