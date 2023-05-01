const express = require("express");
const app = express();
const port = 8000;

const {faker} = require('@faker-js/faker');
const createUser = ()=>{
    let id = 0;
    const newUser = {
        passwoed: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        id: id
    }
    (id + 1);
    return newUser;
};

const createCompany = ()=>{
    const newCompany = {
        name: faker.company.name(),
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
}
app.use(express.json() );
app.use(express.urlencoded({extended:true}));

app.get("api/users", (req, res) => {
    res.json(createUser)
});