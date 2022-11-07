import React, { useEffect, useState } from 'react'

import logo from '././melodium-logo.png';

function Search (params) {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://localhost:4000/olivia')
      const jsonResult = await result.json();

      setAuthors(jsonResult)
    }
    fetchData();
  }, [])

  const submitAuthor = async () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>MELODIUM</h1>
        <h2>Encontre suas novas músicas favoritas!</h2>
        <p>A partir de somente uma música, encontramos similares para completar sua playlist</p>
        {authors.map(author =>
        <h3>{author.nome}</h3>
        )

        }
      </header>
    </div> 
  )

}

export default Search();