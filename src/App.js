import {useEffect, useState} from 'react';

// style and icon
import "./App.css";
import SearchIcon from "./search.svg";
import SpellCardMini from './components/SpellCardMini';
import SpellBlock from './components/SpellBlock';

// 18d22986

const API_URL = "https://www.dnd5eapi.co";

// temp for making a frame.
// const movie1 = {
//     "Title": "Shrek",
//     "Year": "2001",
//     "imdbID": "tt0126029",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// }

const App = () => {
    const [spells, setSpells] = useState([]);
    const [currSpell, setCurrSpell] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const searchSpells = async (name) => {
        const response = await fetch(`${API_URL}/api/spells/?name=${name}`);
        const data = await response.json();

        // null the current spell
        setCurrSpell(null);

        setSpells(data.results);
        // console.log("data", data);
        // console.log("results", data.results);
        // console.log("spells", spells);
        // console.log(spells);
    }

    const testClick = async (index) => {
        const response = await fetch(`${API_URL}/api/spells/${index}`); 
        const data = await response.json();

        setCurrSpell(data);
        console.log(data);
    }

    useEffect(() => {
        searchSpells(""); // searching nothing returns all spells
    }, []);

    return (
        <div className='app'>
            <h1>SpellCast</h1>
            <h2>A tool for finding D&D 5e Spells with ease.</h2>
            
            <div className='search'>
                <input 
                    placeholder='Find a spell...'
                    value={searchTerm}
                    onChange={(event) => {setSearchTerm(event.target.value)}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchSpells(searchTerm)}
                />
            </div>

            {
                currSpell
                ? (
                    // Not Null
                    <SpellBlock spell={currSpell} />
                ) :
                (
                    // Null
                    <></>
                )
            }

            {
                spells?.length > 0
                    ? (
                        <div classname="container">
                            {spells.map((spell) => (
                                <SpellCardMini spell={spell} onClick={testClick} key={spell.index}/>
                            ))}
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No spells found.</h2>
                        </ div>
                    )
            }


            
        </div>
    );
}

export default App; // gotta export everything to be called elsewhere.
