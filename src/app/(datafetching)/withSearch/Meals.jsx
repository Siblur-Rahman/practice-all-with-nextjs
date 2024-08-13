'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('a')
    const [meals, setMeals] = useState([])
    const [error, setError] = useState('')
    const loadData = async () =>{
       try{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
        const data = await res.json();
        setMeals(data.meals)
        setError('')
       } catch(error){
        setError(error)
       }
    }
    const handler = (e) =>{
        setSearch(e.target.value)
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <div className="mt-12">
            <h2>{search}</h2>
            <input 
            onChange={handler}
            type="text" placeholder="Search Meals...." className="p-4 outline-none border-transparent text-slate-900" />
            <button onClick={() => loadData()} className="bg-red-400 p-4">Search</button>
            <div className="mt-12 grid grid-cols-3 gap-4">
                    { 
                        meals?.length > 0 && !error && meals?.map(meal =>(
                        <div className="border-2 p-4" key={meal.idMeal}>
                        <Image src={meal.strMealThumb} alt={meal.strMeal} width={500} height={500}/>
                        <h6>{meal.strMeal}</h6>
                        <p>{meal.strInstructions}</p>
                        </div>
                        ))
                    }
                    {
                        error && <h6>Data Not Found....</h6>
                    }
            </div>
        </div>
    );
};

export default Meals;