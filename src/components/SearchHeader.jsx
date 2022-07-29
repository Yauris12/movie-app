import React from 'react'

import { FaSearch } from 'react-icons/fa'
const SearchHeader = ({ query, onChange, inputRef, onSubmit }) => {
  return (
    <form className='form' onSubmit={onSubmit}>
      <input
        type='text'
        className='form-input'
        placeholder='Search Movie'
        value={query}
        onChange={onChange}
        ref={inputRef}
        name='query'
      />

      <FaSearch />
    </form>
  )
}

export default SearchHeader
