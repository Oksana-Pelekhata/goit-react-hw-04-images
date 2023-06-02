import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import {Form, SearchbarHeader, SearchButton, SearchButtonLabel, SearchInput} from './Searchbar.styled'

export const Searchbar = ({onSubmit})=> {
const[name, setName] = useState('')

  const handleInputChange = ({target:{value}}) => {
      setName(value.toLowerCase())
    }

  const handleSubmit = event => {
      event.preventDefault()
    

        if (name.trim() === '') {
            alert("Please, enter your search request")
            return
        }

      onSubmit(name)
      setName('')
    }
        return (
        <SearchbarHeader>
  <Form onSubmit={handleSubmit}>
    <SearchButton type="submit" >
        <ImSearch style={{ marginRight: 8 }} />
      <SearchButtonLabel>Search</SearchButtonLabel>
    </SearchButton>

    <SearchInput onChange = {handleInputChange}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={name}
    />
  </Form>
</SearchbarHeader>
    )
}
