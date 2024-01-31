import React, { useState, useEffect } from 'react'

// import components
import Card from '../components/Card';

function FavoriteList() {
  const [ cats, setCats ] = useState([]);

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem("favorites")) || [];
    setCats(storage);
  }, []); 

  return (
    <div className='FavoriteList'>
      <div className="List">
        { 
          cats.map((cat) => {
            return <Card key={ cat.id }
                url={ cat.url }
                id={ cat.id }
            />
          })
        }
      </div>
    </div>
  )
}

export default FavoriteList