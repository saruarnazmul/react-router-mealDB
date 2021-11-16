import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Meal.css'
const Meal = (props) => {
    const history = useHistory()
    const { idMeal, strMeal, strMealThumb, strInstructions } = props?.meal
    // if sometime not work need to use || and empty object
    // const { idMeal, strMeal, strMealThumb, strInstructions } = props?.meal || {}
    const url = `/meal/${idMeal}`
    console.log(url)
    const showProduct = () => {
        history.push(`${url}`)
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <p>Id: {idMeal}</p>
                        <Card.Text>
                            {strInstructions?.slice(0, 100)}
                        </Card.Text>
                        <Link to={url}>Visit me</Link>
                    </Card.Body>

                    <button onClick={() => showProduct(idMeal)}>Show Details</button>
                </Card>
            </Col>

        </div >
    );
};

export default Meal;