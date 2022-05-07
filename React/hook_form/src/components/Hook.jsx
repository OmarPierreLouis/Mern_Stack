import React, { useState } from 'react';
// create a state variable for reach input that will be stored inside our form
    const HookForm = (props) => {
        let [firstName, setfirstName] = useState("");
        let [lastName, setlastName] = useState("");
        let [email, setEmail] = useState("");
        let [password, setPassword] = useState("");
        let [confirmPassword, setConfirmPassword] = useState("");
    
    const createUser = (e) => {
            e.preventDefault();
        const newUser = { firstName, lastName, email, password,confirmPassword };
            console.log("Welcome", newUser);
        };
    return (
            <>
        <form onSubmit={createUser}>
            <div className="form-group">
                <label>First name: </label>
                <input className="form-control" type="text" onChange={(e) => setfirstName(e.target.value)} />
                {
                        firstName.length < 2 ? <p className='text-danger'>Field must be at least 2 characters.</p>:null
                }
            </div>
            <div className="form-group">
                <label>Last Name: </label>
                <input className="form-control"type="text" onChange={(e) => setlastName(e.target.value)} />
                    {
                        lastName.length < 2 ? <p className='text-danger'>Field must be at least 2 characters.</p> : null
                    }
            </div>
            <div className="form-group">
                <label htmlFor="">Email:</label>
                <input className="form-control"type="text" onChange={(e) => setEmail(e.target.value)} />
                {
                    email.length < 5 ? <p className='text-danger'>Field must be at least 5 characters.</p>:null
                }
            </div>
            <div className="form-group">
            <label htmlFor="">Password: </label>                
            <input className="form-control"type="password" onChange={(e) => setPassword(e.target.value)} />
            {
                password.length < 8 ? <p className='text-danger'>Password must be atleast 8 characters long</p>:null
            }
            </div>
            <div className="form-group">
                <label htmlFor="">Confirm Password: </label>                
                <input className="form-control" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    {
                        password !== confirmPassword? <p className='text-danger'>Password Must Match </p> : null
                    }
            </div>
            <input className="btn btn-success mt-3"type="submit" value="Submit"/>
        </form>
        <hr />
        <h3>Your Form Data</h3>
        <p>First Name: {firstName} </p>
        <p>Last Name: {lastName} </p>
        <p>Email: {email} </p>
        <p>Password: {password} </p>
        <hr />
        </>
    );
};

export default HookForm;
