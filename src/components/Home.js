import React from 'react'
import { Link } from "react-router-dom"

const Home = props => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-3"></div>
            <div className="col">
            <br/><br/>
            <h2>Welcome to the world of fitness</h2>
            </div>
            
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <br/>
                    <br/><br/><br/>
                    <div className="row">
                        <div className="col">
                            <Link to="/new"><button type="submit" class="btn btn-primary">New Customer</button></Link>
                        </div>
                        <div className="col">
                            <Link to="/update"><button type="submit" class="btn btn-primary">Update Calories</button></Link>
                        </div>
                    </div>
                    </div>
                <div className="col"></div>
            </div>
            
        </div>
    )
}

export default Home
