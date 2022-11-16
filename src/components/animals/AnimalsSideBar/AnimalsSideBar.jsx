import React, { useEffect, useState } from 'react'
import FilterAnimals from '../FilterAnimals'
import "../../../style/animalSideBar.css"
import { useSearchParams } from 'react-router-dom'
import { useAnimals } from '../../../contexts/AnimalContextProvider'

const AnimalsSideBar = ({ isSideBar, setPage }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get('q') || '');
    const {getAnimals} = useAnimals();

    useEffect(() => { 
        setSearchParams({
          q: search
        });

    }, [search])

    useEffect(() => {
      getAnimals();
        setPage(1);
    }, [searchParams])

  return isSideBar ? (
    <div className='sideBar'>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
        <FilterAnimals />
        ProductSideBar</div>
  ) : (
    null
  )
}

export default AnimalsSideBar