import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Mealdetail.css'
const Meaildetail = () => {
    const { searchId } = useParams()
    const [meal, setMeal] = useState({})
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchId}`)
            .then(res => res.json())
            .then(data => {
                console.log('data', data)
                setMeal(data.meals[0])
            })
    }, [searchId])
    const url = `/restaurent`
    return (
        <div>
            <Card style={{ width: '18rem' }} className="text-center">
                <Card.Img variant="top" src={meal?.strMealThumb} />
                <Card.Body>
                    <Card.Title>{meal?.strMeal}</Card.Title>
                    <Card.Text>
                        {meal?.strInstructions?.slice(0, 100)}
                    </Card.Text>
                    <Link to={url}>
                        <Button variant="primary">Home</Button>
                    </Link>


                </Card.Body>
            </Card>


        </div>
    );
};

export default Meaildetail;