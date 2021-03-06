import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import queryString from 'query-string'
import { getHeroesByName } from '../heroes/helpers'
import { HeroCard } from '../heroes/components'

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroesByName(q)

  const { searchText, onInputChange } = useForm({
    searchText: q,
  })

  const showSearch = q.length === 0
  const showError = q.length > 0 && heroes.length === 0

  const onSearchSubmit = (e) => {
    e.preventDefault()
    //if (searchText.trim().length <= 1) return

    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <h4 />
      <div className='row'>
        <div className='col-5'>
          <h4 />
          <form onSubmit={onSearchSubmit} t>
            <input
              type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />

            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          <div
            className='alert alert-primary'
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </div>
          <div
            className='alert alert-danger'
            style={{ display: showError ? '' : 'none' }}
          >
            There's no results <b>{q}</b>{' '}
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  )
}
