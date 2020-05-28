import React from 'react';
import "antd/dist/antd.css";
import DessertsList from '../dessertsList/index'
import Corusel from "../corusel/index";


const desserts = [
    {
        id: 1,
        title: "Honey cake",
        price: 6000,
        ingredients: "flout, honey, sugar, butter",
    },
    {
        id: 2,
        title: "Napoleone",
        price: 8000,
        ingredients: "flout, sugar, butter, cream",
    },
    {
        id: 3,
        title: "Chocolate cake",
        price: 2500,
        ingredients: "flout, chocolate, sugar, butter",
    },
]

function Home_page() {

    return (
       <div>
        <Corusel desserts={desserts}/>
        <DessertsList/>
       </div>
)}

export default Home_page