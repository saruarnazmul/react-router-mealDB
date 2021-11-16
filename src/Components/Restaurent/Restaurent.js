import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Delete from '../Delete/Delete';
import Meal from '../Meal/Meal';
import './Restaurent.css'
const Restaurent = () => {
    const [search, setSearch] = useState(' ')
    const [meals, setMeals] = useState([])
    // search bar er jonno always dependecny dite hobe
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [search])
    const handleSearch = event => {
        const searchText = event.target.value;
        setSearch(searchText)
    }
    return (
        <div>
            <input type="text" onChange={handleSearch} placeholder="Search Here" className="custom-input" />

            <Row xs={1} md={3} className="g-4">

                {
                    meals?.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}> </Meal>

                    )
                }
            </Row>



        </div>
    );
};

export default Restaurent;