import React from 'react'

const Nav = ({search, setSearch}) => {
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search Post</label>
        <input
          id='search'
          type='text'
          value={search}
          placeholder='search posts'
          onChange={e => setSearch(e.target.value)}
        />
      </form>
    </nav>
  )
}

export default Nav