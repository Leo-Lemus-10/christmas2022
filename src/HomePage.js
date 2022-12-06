import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = props => {
    
    return (
        <div className="HomePage">
            <h1 className="title">Leo's Christmas List</h1>
            <Link to= "/mainpage">
                <a href="#" className="button">Enter Leo's List</a>
            </Link>
        </div>
    )
}



export default HomePage
