const { json } = require("body-parser");
const { faker } = require('@faker-js/faker');
const express = require("express");
// This is how we import express
const app = express();
// We created an app variable whic is an instance of express
const port = 8000;

class User {
    constructor() {
        this.Password = faker.internet.password;
        this.Email = faker.internet.email();
        this.PhoneNumber = faker.phone.phoneNumber();
        this.LastName = faker.name.lastName();
        this.FirstName = faker.name.firstName();
        this.id = faker.datatype.uuid();
    }
}
class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = faker.address.city();
        this.id = faker.datatype.uuid();
    }
}

app.get("/api/users/new", (req, res) => {
    console.log(req.body)
    // req.body is the new imformation submitted into our form 
    // create user here
    let newUser = new User();
    res.json({newUser});
});

app.get("/api/companies/new", (req,res)=>{
    console.log(req.body)
    let newCompany = new Company();
    res.json({newCompany});
});

app.get("/api/user/company", (req,res) => {
    // console.log(req.body)
    let newCompany = new Company();
    let newUser = new User();
    res.json({newCompany})
    res.json({newUser})
}); 

// This line is needed at the bottom of your code in order to run route
app.listen(port, () => console.log(`Listening on port: ${port}`));