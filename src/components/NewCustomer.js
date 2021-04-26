import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Web3 from 'web3'

const NewCustomer = () => {

    const [State, setState] = useState({
        account: ''
    })

    async function load () {
        const web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545")
        const network = await web3.eth.net.getNetworkType()
        console.log("network",network)
        const accounts = await web3.eth.getAccounts()
        console.log("account : ",accounts)
        setState({...State,account:accounts[0]})
        
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <br/><br/>
                <h1> Enter Credentials </h1>
                <h3>Account : {State.account}</h3>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Height</label>
                        <input type="text" class="form-control" id="height" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Weight</label>
                        <input type="text" class="form-control" id="weight" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Age</label>
                        <input type="text" class="form-control" id="age" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button><br/><br/>
                    <Link to="/"><button type="submit" class="btn btn-primary">Home</button></Link>
                </form>
            </div>
            <div className="col"></div>
        </div>
    )
}

export default NewCustomer