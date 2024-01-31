import React from 'react'

function Nav() {
  return (
    <div className='Nav'>
        <div className="Link">
          <a href="/" className='Link'>Все котики</a>
        </div>
        <div className='Link'>
          <a href="/favorites" className='Link'>Любимые котики</a>
        </div>
    </div>
  )
}

export default Nav