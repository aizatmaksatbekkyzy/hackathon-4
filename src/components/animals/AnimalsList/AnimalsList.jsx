import React, { useEffect, useState } from 'react'
import CardAnimal from '../CardAnimal/CardAnimal'
import Pagination from '@mui/material/Pagination'
import { useAnimals } from '../../../contexts/AnimalContextProvider'


const AnimalsList = ({ page, setPage, changeSideBarStatus }) => {
    const { animals, getAnimals } = useAnimals();

    useEffect(() => {
        getAnimals();
    }, []);

    const itemsOnPage = 6;

    const count = Math.ceil(animals.length / itemsOnPage);

    const handlePage = (e, p) => {
        setPage(p);
    };

    function currentData(){
        const begin = (page - 1) * itemsOnPage;
        const end = begin + itemsOnPage;
        return animals.slice(begin, end);
    };

  return (
    <div className='products-block'>
        <div className='title'>
        <h3>Cats&Dogs</h3>
        </div>
          <button id='btn-sb' onClick={changeSideBarStatus}>Filter&Search Menu</button>
        {animals ? (
            currentData().map(item => (
                <CardAnimal key={item.id} item={item} />
            ))
        ): (
            <h3>Loading...</h3>
        )}
        <Pagination className='lol' count={count} page={page} onChange={handlePage} />
    </div>
  )
}

export default AnimalsList 