const express = require("express");
const app = express();
const port = 8000;

const {faker} = require('@faker-js/faker');
const createUser = ()=>{
    const newUser = {
        passwoed: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
    }
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
    const newUser = createUser();
    res.json(newUser)
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );