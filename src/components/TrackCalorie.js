import React from 'react'
import { Link } from "react-router-dom"

const TrackCalorie = props => {
    return (
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <br/><br/>
                <h1> Calories Burnt Update </h1>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Calories</label>
                        <input type="text" class="form-control" id="height" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button><br/><br/>
                    <Link to="/"><button type="submit" class="btn btn-primary">Home</button></Link>
                </form>
            </div>
            <div className="col"></div>
        </div>
    )
}

export default TrackCalorie
